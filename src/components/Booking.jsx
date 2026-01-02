import Header from "./Header"

function Booking() {
  return (
    <div>
      <Header />
      <div className="booking-form">
        <iframe
          id="JotFormIFrame-253222382012039"
          title="Feb Studio Booking Inquiry Form"
          allowtransparency="true"
          allow="geolocation; microphone; camera; fullscreen; payment"
          src="https://form.jotform.com/253222382012039"
          frameBorder="0"
        >
        </iframe>
      </div>
    </div>
  )
}

export default Booking