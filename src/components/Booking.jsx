import { useEffect } from 'react'

const JOTFORM_SCRIPT_SRC =
  'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'
const JOTFORM_IFRAME_SELECTOR = "iframe[id='JotFormIFrame-253222382012039']"
const JOTFORM_DOMAIN = 'https://form.jotform.com/'

function Booking() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const initHandler = () => {
      if (typeof window.jotformEmbedHandler === 'function') {
        window.jotformEmbedHandler(JOTFORM_IFRAME_SELECTOR, JOTFORM_DOMAIN)
      }
    }

    let script = document.querySelector(
      `script[src="${JOTFORM_SCRIPT_SRC}"]`,
    )

    if (script) {
      if (typeof window.jotformEmbedHandler === 'function') {
        initHandler()
        return
      }

      script.addEventListener('load', initHandler)
      return () => {
        script.removeEventListener('load', initHandler)
      }
    }

    script = document.createElement('script')
    script.src = JOTFORM_SCRIPT_SRC
    script.defer = true
    script.addEventListener('load', initHandler)
    document.body.appendChild(script)

    return () => {
      script.removeEventListener('load', initHandler)
    }
  }, [])

  return (
    <div>
      <div className="booking-form">
        <div className="container mx-auto">
          <iframe
            id="JotFormIFrame-253222382012039"
            title="Feb Studio Booking Inquiry Form"
            allowtransparency="true"
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/253222382012039"
            frameBorder="0"
            loading="lazy"
          >
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Booking
