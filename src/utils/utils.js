const imageModules = import.meta.glob(
  "../../public/images/*/*.{jpeg,jpg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const folderCache = new Map();

function fetchImages(folderName) {
  if (folderCache.has(folderName)) {
    return folderCache.get(folderName);
  }

  const folderSegment = `/images/${folderName}/`;
  const images = Object.entries(imageModules)
    .filter(([path]) => path.includes(folderSegment))
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    )
    .map(([, src]) => src);

  folderCache.set(folderName, images);
  return images;
}

const PHOTO_TYPE_STYLES = {
  all: "btn btn-outline btn-neutral filter-reset",
  family: "btn btn-outline btn-accent",
  event: "btn btn-outline btn-primary",
  portrait: "btn btn-outline btn-error",
  birthday: "btn btn-outline btn-error",
  wedding: "btn btn-outline btn-accent",
  baptism: "btn btn-outline btn-primary",
};

const formatPhotoTypeLabel = (tag) =>
  tag
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const getPhotoTypes = (albums) => {
  const tagSet = new Set();

  Object.values(albums).forEach(({ tags }) => {
    if (!Array.isArray(tags)) return;
    tags.forEach((tag) => tagSet.add(tag));
  });

  return ["all", ...tagSet];
};

const updateMetaTags = (selectedAlbum, selectedAlbumKey) => {
  if (typeof window === "undefined") return;
  const defaultTitle = "Feb Studio | Canberra Photography & Creative Studio";
  const defaultImage = "https://feb.studio/images/cover.jpg";
  const defaultDesc =
    "Feb Studio is a professional photography studio in Canberra capturing weddings, families, events, and portraits. We turn your best moments into timeless memories.";
  const defaultUrl = "https://feb.studio/";

  const metaImage = document.querySelector('meta[property="og:image"]');
  const metaDesc = document.querySelector('meta[name="description"]');
  const metaOgTitle = document.querySelector('meta[property="og:title"]');
  const metaOgDesc = document.querySelector('meta[property="og:description"]');
  const metaCanonical = document.querySelector('link[rel="canonical"]');

  // Twitter tags
  const metaTwTitle = document.querySelector('meta[property="twitter:title"]');
  const metaTwDesc = document.querySelector(
    'meta[property="twitter:description"]'
  );
  const metaTwImage = document.querySelector('meta[property="twitter:image"]');
  const metaTwUrl = document.querySelector('meta[property="twitter:url"]');

  if (selectedAlbum) {
    const albumTitle = `Album of ${selectedAlbum.name} | Feb Studio`;
    document.title = albumTitle;

    const imageUrl = selectedAlbum.coverPhoto?.startsWith("http")
      ? selectedAlbum.coverPhoto
      : `${window.location.origin}${
          selectedAlbum.coverPhoto || "/images/cover.jpg"
        }`;

    const albumUrl = `${window.location.origin}${window.location.pathname}?album=${selectedAlbumKey}`;
    const albumDesc = selectedAlbum.description || defaultDesc;

    // Update Meta Tags
    if (metaImage) metaImage.setAttribute("content", imageUrl);
    if (metaDesc) metaDesc.setAttribute("content", albumDesc);
    if (metaOgTitle) metaOgTitle.setAttribute("content", albumTitle);
    if (metaOgDesc) metaOgDesc.setAttribute("content", albumDesc);
    if (metaCanonical) metaCanonical.setAttribute("href", albumUrl);

    // Update Twitter Tags
    if (metaTwTitle) metaTwTitle.setAttribute("content", albumTitle);
    if (metaTwDesc) metaTwDesc.setAttribute("content", albumDesc);
    if (metaTwImage) metaTwImage.setAttribute("content", imageUrl);
    if (metaTwUrl) metaTwUrl.setAttribute("content", albumUrl);
  } else {
    document.title = defaultTitle;

    if (metaImage) metaImage.setAttribute("content", defaultImage);
    if (metaDesc) metaDesc.setAttribute("content", defaultDesc);
    if (metaOgDesc) metaOgDesc.setAttribute("content", defaultDesc);
    if (metaCanonical) metaCanonical.setAttribute("href", defaultUrl);

    // Reset Twitter Tags
    if (metaTwTitle) metaTwTitle.setAttribute("content", defaultTitle);
    if (metaTwDesc) metaTwDesc.setAttribute("content", defaultDesc);
    if (metaTwImage) metaTwImage.setAttribute("content", defaultImage);
    if (metaTwUrl) metaTwUrl.setAttribute("content", defaultUrl);
  }
};

export {
  fetchImages,
  getPhotoTypes,
  formatPhotoTypeLabel,
  PHOTO_TYPE_STYLES,
  updateMetaTags,
};
