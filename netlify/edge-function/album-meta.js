import data from '../../src/data.json'

export default async function handler(request, context) {
  const url = new URL(request.url)
  const slug = url.pathname.split('/').pop() || ''
  const album = data.albums?.[slug]

  // Nếu không tìm thấy, trả về app bình thường
  if (!album) return context.next()

  const title = `${album.name} | Feb Studio`
  const description = album.description ?? 'Feb Studio – Canberra Photography & Creative Studio'
  const image = album.coverPhoto?.startsWith('http')
    ? album.coverPhoto
    : `${url.origin}${album.coverPhoto || '/images/cover.jpg'}`

  // Bắt response gốc (index.html), chèn meta tag mới
  const response = await context.next()
  const html = await response.text()

  const customized = html
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${description}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${title}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${description}">`)
    .replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${image}">`)
    .replace(/<meta property="twitter:title" content="[^"]*">/, `<meta property="twitter:title" content="${title}">`)
    .replace(/<meta property="twitter:description" content="[^"]*">/, `<meta property="twitter:description" content="${description}">`)
    .replace(/<meta property="twitter:image" content="[^"]*">/, `<meta property="twitter:image" content="${image}">`)

  return new Response(customized, response)
}
