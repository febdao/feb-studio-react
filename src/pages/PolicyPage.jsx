export default function PolicyPage() {
  return (
    <main className="bg-base-100 text-base-content">
      <div className="container mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-base-content/60">
            Policies
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Policies
          </h1>
          <p className="mt-4 text-lg text-base-content/70">
            This page explains how booking, payment, editing, delivery, and usage
            work for all sessions and events booked with Feb Studio in Canberra.
            By booking a session, you agree to these policies.
          </p>
        </div>

        <div className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Booking and payment</h2>
            <ul className="list-disc space-y-2 pl-5 text-base-content/80">
              <li>
                A booking is confirmed once you accept the quote and pay the
                booking retainer (deposit).
              </li>
              <li>The retainer amount and due dates are shown on your invoice.</li>
              <li>
                The remaining balance is due before, or on the day of the shoot
                (as stated on the invoice).
              </li>
              <li>Prices are in AUD.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Rescheduling</h2>
            <ul className="list-disc space-y-2 pl-5 text-base-content/80">
              <li>If you need to reschedule, please contact me as early as possible.</li>
              <li>Rescheduling is subject to availability.</li>
              <li>
                Your retainer can be transferred to a new date if you reschedule
                with reasonable notice.
              </li>
              <li>
                For outdoor sessions, bad weather is a valid reason to
                reschedule. We can move to another day or switch to a sheltered
                location.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Cancellations and no shows</h2>
            <ul className="list-disc space-y-2 pl-5 text-base-content/80">
              <li>
                Retainers are non-refundable because your time slot is reserved
                and other enquiries are turned away.
              </li>
              <li>
                If you cancel close to the session date, additional fees may
                apply depending on the work already done (planning, travel,
                preparation).
              </li>
              <li>No shows are not refundable.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Session duration and arrival time</h2>
            <ul className="list-disc space-y-2 pl-5 text-base-content/80">
              <li>Session time starts at the agreed start time.</li>
              <li>Late arrival reduces shooting time, but the session fee stays the same.</li>
              <li>If you expect to be late, please message me as soon as you can.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Locations and travel</h2>
            <ul className="list-disc space-y-2 pl-5 text-base-content/80">
              <li>Canberra metro is usually included.</li>
              <li>
                Travel outside Canberra may include a travel fee based on
                distance and time.
              </li>
              <li>
                Any paid parking, venue fees, or location permits required for
                the shoot are the client&apos;s responsibility unless agreed
                otherwise.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Image selection and delivery</h2>
            <ul className="list-disc space-y-2 pl-5 text-base-content/80">
              <li>I curate and deliver the best usable images from your session or event.</li>
              <li>
                The number of edited images included depends on the package you
                book.
              </li>
              <li>
                Your photos are delivered via a private online gallery where you
                can view and download.
              </li>
              <li>
                Gallery delivery timeframe will be confirmed during booking.
                Rush delivery may be available for an extra fee.
              </li>
              <li>
                Online galleries are typically kept active for a limited time.
                Please download and back up your images as soon as you receive
                them.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Editing, retouching, and style</h2>
            <div className="rounded-2xl border border-base-200 bg-base-200/50 p-6">
              <h3 className="text-xl font-semibold">Basic editing (included)</h3>
              <p className="mt-2 text-base-content/80">
                Basic editing is included for all packages and typically covers:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base-content/80">
                <li>Colour and exposure correction</li>
                <li>Crop and straighten</li>
                <li>Consistent tones and natural skin colours</li>
                <li>Light cleanup where needed</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-base-200 bg-base-200/50 p-6">
              <h3 className="text-xl font-semibold">
                Optional retouching (available for all packages)
              </h3>
              <p className="mt-2 text-base-content/80">
                Retouching is available for any session type, including family
                and events, and can include:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base-content/80">
                <li>Natural skin retouching</li>
                <li>Blemish and minor imperfection removal</li>
                <li>Removing small distractions where possible</li>
              </ul>
              <p className="mt-4 text-base-content/80">
                Retouching is priced per image and depends on complexity. Please
                request retouching when booking or after you receive your
                gallery.
              </p>
            </div>
            <div className="rounded-2xl border border-base-200 bg-base-200/50 p-6">
              <h3 className="text-xl font-semibold">RAW files</h3>
              <p className="mt-2 text-base-content/80">
                RAW, unedited files are not included and are not provided by
                default.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Creative control</h2>
            <ul className="list-disc space-y-2 pl-5 text-base-content/80">
              <li>
                By booking, you choose Feb Studio&apos;s editing style as shown in my
                portfolio.
              </li>
              <li>
                I keep images natural and flattering. If you have a specific
                look in mind, tell me before the session.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Copyright and usage</h2>
            <ul className="list-disc space-y-2 pl-5 text-base-content/80">
              <li>Feb Studio retains copyright of all images.</li>
              <li>
                You receive a personal use licence to download, print, and share
                your images for personal, non commercial use.
              </li>
              <li>
                Commercial use (business marketing, paid ads, brand campaigns)
                requires a separate licence and pricing.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Portfolio and social media use</h2>
            <ul className="list-disc space-y-2 pl-5 text-base-content/80">
              <li>I may use selected images for my portfolio, website, and social media.</li>
              <li>
                If you prefer your images not be shared, please let me know in
                writing before the session. I am happy to respect that.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Privacy</h2>
            <ul className="list-disc space-y-2 pl-5 text-base-content/80">
              <li>Your personal details are used only for booking and communication.</li>
              <li>I do not sell or share your personal information with third parties.</li>
              <li>
                I take extra care with children&apos;s photos. If you have privacy
                concerns, tell me and we will agree on what can or cannot be
                posted.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Safety and behaviour</h2>
            <ul className="list-disc space-y-2 pl-5 text-base-content/80">
              <li>Please supervise children at all times during sessions.</li>
              <li>
                Please let me know if there are any mobility, accessibility, or
                safety needs in advance.
              </li>
              <li>
                I reserve the right to stop the session if anyone behaves in a
                threatening or unsafe way.
              </li>
            </ul>
          </section>

          <section className="space-y-3 rounded-2xl border border-base-200 bg-base-200/60 p-6">
            <h2 className="text-2xl font-semibold">Questions</h2>
            <p className="text-base-content/80">
              If anything is unclear, contact me before booking and I will
              explain it simply.
            </p>
            <p className="text-base-content/80">
              If you want, paste your current pricing page text and I will make
              the policy wording match it perfectly, including your exact
              turnaround time, gallery expiry time, and retouch price range.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
