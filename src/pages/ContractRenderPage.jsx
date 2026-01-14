import { useState } from "react"

const studioDetails = {
  name: "Feb Studio",
  abn: "79242354647",
  address: "44 Letters st, Evatt, ACT - 2617",
  phone: "0468939034",
  website: "https://feb.studio",
}

const getToday = () => new Date().toISOString().slice(0, 10)

const formatDateDMY = (value) => {
  if (typeof value !== "string" || value.trim() === "") return ""
  const [year, month, day] = value.split("-")
  if (!year || !month || !day) return value
  return `${day}/${month}/${year.slice(-2)}`
}

export default function ContractRenderPage() {
  const [formData, setFormData] = useState(() => ({
    agreementDate: getToday(),
    photographerEmail: "dinhhien102@gmail.com",
    photographerName: "Feb Dao",
    clientName: "",
    clientAddress: "",
    clientPhone: "",
    clientEmail: "",
    shootType: "Family session",
    eventDate: "",
    startTime: "",
    endTime: "",
    location: "",
    packageType: "Mini session",
    deliverables: "",
    notes: "",
    totalFee: "",
    depositAmount: "",
    depositDue: "",
    balanceDue: "before the session/event begins",
    paymentMethod: "Bank transfer",
    cancelNoticeDays: "",
    cancelRefundPolicy: "not refunded",
    cancelShortNoticeDays: "",
    rescheduleNoticeDays: "",
    rescheduleFee: "",
    deliveryMethod: "Online gallery",
    deliveryTimeframe: "",
    storagePeriod: "",
    retouchingOption: "Included",
    retouchingFee: "",
    portfolioOption: "A",
    clientInitials: "",
    clientSignatureName: "",
    clientSignatureDate: "",
    photographerSignatureDate: "",
  }))

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const renderValue = (value, fallback) => {
    if (typeof value === "string" && value.trim() !== "") {
      return <span className="font-medium text-base-content">{value}</span>
    }
    return <span className="italic text-base-content/60">{fallback}</span>
  }

  const renderCurrency = (value, fallback = "[Amount]") => {
    if (typeof value === "string" && value.trim() !== "") {
      return <span className="font-medium text-base-content">AUD ${value}</span>
    }
    return (
      <span className="italic text-base-content/60">AUD ${fallback}</span>
    )
  }

  const renderDays = (value) => {
    if (typeof value === "string" && value.trim() !== "") {
      return <span className="font-medium text-base-content">{value} days</span>
    }
    return <span className="italic text-base-content/60">[X] days</span>
  }

  const scheduleDateTime = () => {
    const parts = []
    if (formData.eventDate.trim()) {
      parts.push(formatDateDMY(formData.eventDate))
    }
    const timeLabel =
      formData.startTime && formData.endTime
        ? `${formData.startTime} to ${formData.endTime}`
        : formData.startTime || formData.endTime
    if (timeLabel) parts.push(timeLabel)
    return parts.join(" ")
  }

  const retouchingSummary =
    formData.retouchingOption === "Optional add on"
      ? formData.retouchingFee
        ? `Optional add on $${formData.retouchingFee}`
        : "Optional add on $"
      : formData.retouchingOption

  const handleGenerate = () => {
    if (typeof window === "undefined") return
    window.print()
  }

  return (
    <main className="bg-base-100 text-base-content">
      <div className="container mx-auto max-w-6xl px-6 py-12 print:px-0 print:py-0">
        <header className="mb-10 space-y-4 print:hidden">
          <p className="text-xs uppercase tracking-[0.3em] text-base-content/60">
            Contract Generator
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Photography Services Agreement
          </h1>
          <p className="max-w-2xl text-base-content/70">
            Fill in the client and booking details, then generate a polished
            agreement ready to export as a PDF.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)]">
          <div className="space-y-6 print:hidden">
            <div className="card border border-base-200 bg-base-100 shadow-sm">
              <div className="card-body gap-4">
                <div className="flex items-center justify-between">
                  <h2 className="card-title text-lg">Client details</h2>
                  <span className="badge badge-outline">Required</span>
                </div>
                <label className="form-control">
                  <span className="label-text">Client full name</span>
                  <input
                    className="input input-bordered"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    placeholder="Client Full Name"
                  />
                </label>
                <label className="form-control">
                  <span className="label-text">Client address</span>
                  <textarea
                    className="textarea textarea-bordered min-h-[80px]"
                    name="clientAddress"
                    value={formData.clientAddress}
                    onChange={handleChange}
                    placeholder="Client Address"
                  />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-control">
                    <span className="label-text">Client phone</span>
                    <input
                      className="input input-bordered"
                      name="clientPhone"
                      value={formData.clientPhone}
                      onChange={handleChange}
                      placeholder="Client Phone"
                    />
                  </label>
                  <label className="form-control">
                    <span className="label-text">Client email</span>
                    <input
                      className="input input-bordered"
                      name="clientEmail"
                      value={formData.clientEmail}
                      onChange={handleChange}
                      placeholder="Client Email"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="card border border-base-200 bg-base-100 shadow-sm">
              <div className="card-body gap-4">
                <h2 className="card-title text-lg">Agreement & contact</h2>
                <label className="form-control">
                  <span className="label-text">Agreement date</span>
                  <input
                    className="input input-bordered"
                    type="date"
                    name="agreementDate"
                    value={formData.agreementDate}
                    onChange={handleChange}
                  />
                </label>
                <label className="form-control">
                  <span className="label-text">Photographer email</span>
                  <input
                    className="input input-bordered"
                    name="photographerEmail"
                    value={formData.photographerEmail}
                    onChange={handleChange}
                    placeholder="you@feb.studio"
                  />
                </label>
              </div>
            </div>

            <div className="card border border-base-200 bg-base-100 shadow-sm">
              <div className="card-body gap-4">
                <h2 className="card-title text-lg">Session details</h2>
                <label className="form-control">
                  <span className="label-text">Shoot type</span>
                  <select
                    className="select select-bordered"
                    name="shootType"
                    value={formData.shootType}
                    onChange={handleChange}
                  >
                    <option>Family session</option>
                    <option>Birthday</option>
                    <option>Event</option>
                    <option>Other</option>
                  </select>
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-control">
                    <span className="label-text">Event date</span>
                    <input
                      className="input input-bordered"
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="form-control">
                    <span className="label-text">Start time</span>
                    <input
                      className="input input-bordered"
                      type="time"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-control">
                    <span className="label-text">End time</span>
                    <input
                      className="input input-bordered"
                      type="time"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="form-control">
                    <span className="label-text">Location</span>
                    <input
                      className="input input-bordered"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Location"
                    />
                  </label>
                </div>
                <label className="form-control">
                  <span className="label-text">Package</span>
                  <select
                    className="select select-bordered"
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleChange}
                  >
                    <option>Mini session</option>
                    <option>Standard session</option>
                    <option>Extended session</option>
                  </select>
                  <span className="mt-2 text-xs text-base-content/60">
                    Package prices: Mini session $250, Standard session $400,
                    Extended session $600.
                  </span>
                </label>
                <label className="form-control">
                  <span className="label-text">Deliverables</span>
                  <textarea
                    className="textarea textarea-bordered min-h-[80px]"
                    name="deliverables"
                    value={formData.deliverables}
                    onChange={handleChange}
                    placeholder="Number of edited photos or curated gallery of edited images"
                  />
                </label>
                <label className="form-control">
                  <span className="label-text">Notes & special requests</span>
                  <textarea
                    className="textarea textarea-bordered min-h-[80px]"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any special requests, group list, must-have shots"
                  />
                </label>
              </div>
            </div>

            <div className="card border border-base-200 bg-base-100 shadow-sm">
              <div className="card-body gap-4">
                <h2 className="card-title text-lg">Pricing & payment</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-control">
                    <span className="label-text">Total fee (AUD)</span>
                    <input
                      className="input input-bordered"
                      name="totalFee"
                      value={formData.totalFee}
                      onChange={handleChange}
                      placeholder="Amount"
                    />
                  </label>
                  <label className="form-control">
                    <span className="label-text">Deposit (AUD)</span>
                    <input
                      className="input input-bordered"
                      name="depositAmount"
                      value={formData.depositAmount}
                      onChange={handleChange}
                      placeholder="Amount"
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-control">
                    <span className="label-text">Deposit due date</span>
                    <input
                      className="input input-bordered"
                      type="date"
                      name="depositDue"
                      value={formData.depositDue}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="form-control">
                    <span className="label-text">Balance due</span>
                    <input
                      className="input input-bordered"
                      name="balanceDue"
                      value={formData.balanceDue}
                      onChange={handleChange}
                      placeholder="before the session/event begins"
                    />
                  </label>
                </div>
                <label className="form-control">
                  <span className="label-text">Payment method</span>
                  <select
                    className="select select-bordered"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                  >
                    <option>Bank transfer</option>
                    <option>PayID</option>
                    <option>Cash</option>
                    <option>Invoice</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="card border border-base-200 bg-base-100 shadow-sm">
              <div className="card-body gap-4">
                <h2 className="card-title text-lg">Cancellations & rescheduling</h2>
                <label className="form-control">
                  <span className="label-text">
                    Cancel more than X days before
                  </span>
                  <input
                    className="input input-bordered"
                    name="cancelNoticeDays"
                    value={formData.cancelNoticeDays}
                    onChange={handleChange}
                    placeholder="Number of days"
                  />
                </label>
                <label className="form-control">
                  <span className="label-text">Deposit refund policy</span>
                  <select
                    className="select select-bordered"
                    name="cancelRefundPolicy"
                    value={formData.cancelRefundPolicy}
                    onChange={handleChange}
                  >
                    <option>refunded</option>
                    <option>not refunded</option>
                  </select>
                </label>
                <label className="form-control">
                  <span className="label-text">
                    Cancel within X days (deposit not refunded)
                  </span>
                  <input
                    className="input input-bordered"
                    name="cancelShortNoticeDays"
                    value={formData.cancelShortNoticeDays}
                    onChange={handleChange}
                    placeholder="Number of days"
                  />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-control">
                    <span className="label-text">Reschedule notice days</span>
                    <input
                      className="input input-bordered"
                      name="rescheduleNoticeDays"
                      value={formData.rescheduleNoticeDays}
                      onChange={handleChange}
                      placeholder="Number of days"
                    />
                  </label>
                  <label className="form-control">
                    <span className="label-text">Extra reschedule fee (AUD)</span>
                    <input
                      className="input input-bordered"
                      name="rescheduleFee"
                      value={formData.rescheduleFee}
                      onChange={handleChange}
                      placeholder="Amount"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="card border border-base-200 bg-base-100 shadow-sm">
              <div className="card-body gap-4">
                <h2 className="card-title text-lg">Delivery & retouching</h2>
                <label className="form-control">
                  <span className="label-text">Delivery method</span>
                  <select
                    className="select select-bordered"
                    name="deliveryMethod"
                    value={formData.deliveryMethod}
                    onChange={handleChange}
                  >
                    <option>Online gallery</option>
                    <option>Download link</option>
                    <option>Google Drive</option>
                  </select>
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-control">
                    <span className="label-text">Delivery timeframe</span>
                    <input
                      className="input input-bordered"
                      name="deliveryTimeframe"
                      value={formData.deliveryTimeframe}
                      onChange={handleChange}
                      placeholder="X days after the shoot/event"
                    />
                  </label>
                  <label className="form-control">
                    <span className="label-text">Storage period</span>
                    <input
                      className="input input-bordered"
                      name="storagePeriod"
                      value={formData.storagePeriod}
                      onChange={handleChange}
                      placeholder="X days"
                    />
                  </label>
                </div>
                <label className="form-control">
                  <span className="label-text">Retouching</span>
                  <select
                    className="select select-bordered"
                    name="retouchingOption"
                    value={formData.retouchingOption}
                    onChange={handleChange}
                  >
                    <option>Included</option>
                    <option>Optional add on</option>
                  </select>
                </label>
                {formData.retouchingOption === "Optional add on" ? (
                  <label className="form-control">
                    <span className="label-text">Retouching add on (AUD)</span>
                    <input
                      className="input input-bordered"
                      name="retouchingFee"
                      value={formData.retouchingFee}
                      onChange={handleChange}
                      placeholder="Amount"
                    />
                  </label>
                ) : null}
              </div>
            </div>

            <div className="card border border-base-200 bg-base-100 shadow-sm">
              <div className="card-body gap-4">
                <h2 className="card-title text-lg">Portfolio & signatures</h2>
                <div className="space-y-2">
                  <span className="label-text">Portfolio option</span>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        className="radio radio-primary"
                        type="radio"
                        name="portfolioOption"
                        value="A"
                        checked={formData.portfolioOption === "A"}
                        onChange={handleChange}
                      />
                      <span>Option A (permit usage)</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        className="radio radio-primary"
                        type="radio"
                        name="portfolioOption"
                        value="B"
                        checked={formData.portfolioOption === "B"}
                        onChange={handleChange}
                      />
                      <span>Option B (no public use)</span>
                    </label>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-control">
                    <span className="label-text">Client initials</span>
                    <input
                      className="input input-bordered"
                      name="clientInitials"
                      value={formData.clientInitials}
                      onChange={handleChange}
                      placeholder="Initials"
                    />
                  </label>
                  <label className="form-control">
                    <span className="label-text">Photographer name</span>
                    <input
                      className="input input-bordered"
                      name="photographerName"
                      value={formData.photographerName}
                      onChange={handleChange}
                      placeholder="Photographer name"
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-control">
                    <span className="label-text">Client signature name</span>
                    <input
                      className="input input-bordered"
                      name="clientSignatureName"
                      value={formData.clientSignatureName}
                      onChange={handleChange}
                      placeholder="Client name for signature"
                    />
                  </label>
                  <label className="form-control">
                    <span className="label-text">Client signature date</span>
                    <input
                      className="input input-bordered"
                      type="date"
                      name="clientSignatureDate"
                      value={formData.clientSignatureDate}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <label className="form-control">
                  <span className="label-text">Photographer signature date</span>
                  <input
                    className="input input-bordered"
                    type="date"
                    name="photographerSignatureDate"
                    value={formData.photographerSignatureDate}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-base-200 bg-base-100 p-6 shadow-sm print:border-0 print:p-0 print:shadow-none">
              <div className="space-y-2">
                <img
                  src="/images/logo.png"
                  alt="Feb Studio logo"
                  className="h-auto w-32 mx-auto mt-4 mb-8"
                />
                <p className="text-xs uppercase tracking-[0.3em] text-base-content/60">
                  Photography Services Agreement
                </p>
                <h2 className="text-2xl font-semibold">
                  Photography Services Agreement
                </h2>
                <p className="text-base-content/70">
                  This Photography Services Agreement (Agreement) is made on{" "}
                  {renderValue(formatDateDMY(formData.agreementDate), "[Date]")}{" "}
                  between:
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-base-200 bg-base-200/40 p-4">
                  <h3 className="text-lg font-semibold">Photographer</h3>
                  <p className="mt-2 text-sm text-base-content/80">
                    {studioDetails.name} (ABN {studioDetails.abn})
                  </p>
                  <p className="text-sm text-base-content/80">
                    Address: {studioDetails.address}
                  </p>
                  <p className="text-sm text-base-content/80">
                    Phone: {studioDetails.phone}
                  </p>
                  <p className="text-sm text-base-content/80">
                    Email:{" "}
                    {renderValue(formData.photographerEmail, "[Your Email]")}
                  </p>
                  <p className="text-sm text-base-content/80">
                    Website: {studioDetails.website}
                  </p>
                </div>
                <div className="rounded-2xl border border-base-200 bg-base-200/40 p-4">
                  <h3 className="text-lg font-semibold">Client</h3>
                  <p className="mt-2 text-sm text-base-content/80">
                    {renderValue(formData.clientName, "[Client Full Name]")}
                  </p>
                  <p className="text-sm text-base-content/80">
                    Address:{" "}
                    {renderValue(formData.clientAddress, "[Client Address]")}
                  </p>
                  <p className="text-sm text-base-content/80">
                    Phone: {renderValue(formData.clientPhone, "[Client Phone]")}
                  </p>
                  <p className="text-sm text-base-content/80">
                    Email: {renderValue(formData.clientEmail, "[Client Email]")}
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-6 text-sm leading-relaxed sm:text-base">
                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">1. Services</h3>
                  <p>
                    1.1 The Client engages the Photographer to provide
                    photography services for:
                  </p>
                  <ul className="list-disc space-y-1 pl-5 text-base-content/80">
                    <li>
                      Shoot type:{" "}
                      {renderValue(
                        formData.shootType,
                        "[Family session / Birthday / Event / Other]",
                      )}
                    </li>
                    <li>
                      Date:{" "}
                      {renderValue(
                        formatDateDMY(formData.eventDate),
                        "[Event Date]",
                      )}
                    </li>
                    <li>
                      Time:{" "}
                      {renderValue(
                        formData.startTime,
                        "[Start Time]",
                      )}{" "}
                      to {renderValue(formData.endTime, "[End Time]")}
                    </li>
                    <li>
                      Location:{" "}
                      {renderValue(formData.location, "[Location]")}
                    </li>
                    <li>
                      Package:{" "}
                      {renderValue(
                        formData.packageType,
                        "[Mini / Full / Event Coverage]",
                      )}
                    </li>
                    <li>
                      Deliverables:{" "}
                      {renderValue(
                        formData.deliverables,
                        '[Number of edited photos OR "curated gallery of edited images"]',
                      )}
                    </li>
                    <li>
                      Notes:{" "}
                      {renderValue(
                        formData.notes,
                        "[Any special requests, group list, must have shots]",
                      )}
                    </li>
                  </ul>
                  <p>
                    1.2 The Photographer will provide the services using
                    reasonable skill and care consistent with professional
                    practice.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">2. Booking and Payment</h3>
                  <p>2.1 Total Fee: {renderCurrency(formData.totalFee)}.</p>
                  <p>
                    2.2 Booking Fee (Deposit):{" "}
                    {renderCurrency(formData.depositAmount)} due on signing to
                    secure the date. Booking is not confirmed until the deposit
                    is paid.
                  </p>
                  <p>
                    2.3 Balance Due: The remaining amount is due{" "}
                    {renderValue(formData.balanceDue, "[before the session/event begins / on (date)]")}
                    .
                  </p>
                  <p>
                    2.4 Payment Method:{" "}
                    {renderValue(
                      formData.paymentMethod,
                      "[Bank transfer / PayID / cash / invoice]",
                    )}
                    . Late payment may delay delivery.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">
                    3. Cancellations and Rescheduling
                  </h3>
                  <p>3.1 Client cancellation:</p>
                  <ul className="list-disc space-y-1 pl-5 text-base-content/80">
                    <li>
                      Cancel more than {renderDays(formData.cancelNoticeDays)} before: deposit is{" "}
                      {renderValue(
                        formData.cancelRefundPolicy,
                        "[refunded / not refunded]",
                      )}
                      .
                    </li>
                    <li>
                      Cancel within {renderDays(formData.cancelShortNoticeDays)}: deposit is not
                      refunded.
                    </li>
                    <li>
                      Cancel within 24 hours or no show: Client may be charged
                      up to 100% of the total fee.
                    </li>
                  </ul>
                  <p>
                    3.2 Rescheduling by Client: One reschedule is allowed with
                    at least {renderDays(formData.rescheduleNoticeDays)} notice,
                    subject to Photographer availability. Extra reschedules may
                    incur a fee of {renderCurrency(formData.rescheduleFee)}.
                  </p>
                  <p>
                    3.3 Photographer cancellation: If the Photographer cannot
                    attend due to illness, emergency, or unforeseen
                    circumstances, the Photographer will either reschedule,
                    arrange a replacement photographer (with Client approval),
                    or refund all fees paid if no replacement or reschedule is
                    possible. This is the Client's sole remedy.
                  </p>
                  <p>
                    3.4 Weather: For outdoor sessions, if weather is unsafe or
                    unsuitable, the Parties will reschedule or agree on an
                    alternative location.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">4. Client Responsibilities</h3>
                  <p>4.1 The Client is responsible for:</p>
                  <ul className="list-disc space-y-1 pl-5 text-base-content/80">
                    <li>obtaining location permissions if needed;</li>
                    <li>ensuring guests know photography is taking place;</li>
                    <li>
                      ensuring children are supervised by a parent or guardian
                      at all times.
                    </li>
                  </ul>
                  <p>
                    4.2 The Photographer is not responsible for missed shots due
                    to late arrivals, venue restrictions, uncooperative
                    subjects, or conditions outside the Photographer's control
                    (crowds, harsh lighting, limited space).
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">
                    5. Creative Style and Editing
                  </h3>
                  <p>
                    5.1 The Photographer's work is creative and subjective. By
                    booking, the Client accepts the Photographer's style,
                    composition, and editing.
                  </p>
                  <p>
                    5.2 Editing included: Basic editing is included (colour,
                    exposure, crop, light clean up).
                  </p>
                  <p>
                    5.3 Retouch option (family, birthday, event): The Client may
                    request skin retouching and removal of minor blemishes. This
                    is{" "}
                    {renderValue(
                      retouchingSummary,
                      "[included / optional add on $ ]",
                    )}{" "}
                    if stated in Schedule A.
                  </p>
                  <p>
                    5.4 RAW files are not provided unless agreed in writing, and
                    may involve an additional fee.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">6. Delivery</h3>
                  <p>
                    6.1 Delivery method:{" "}
                    {renderValue(
                      formData.deliveryMethod,
                      "[Online gallery / download link / Google Drive]",
                    )}
                    .
                  </p>
                  <p>
                    6.2 Delivery timeframe: within{" "}
                    {renderValue(formData.deliveryTimeframe, "[X] days")} after
                    the shoot/event.
                  </p>
                  <p>
                    6.3 Storage period: The gallery/link will remain available
                    for {renderValue(formData.storagePeriod, "[X] days")}. The
                    Client should download and back up files promptly. After the
                    storage period, the Photographer is not responsible for loss
                    or availability.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">
                    7. Copyright and Client Licence
                  </h3>
                  <p>7.1 The Photographer owns copyright in all images.</p>
                  <p>
                    7.2 The Photographer grants the Client a personal, non
                    commercial licence to download, print, and share the
                    delivered images.
                  </p>
                  <p>7.3 The Client must not:</p>
                  <ul className="list-disc space-y-1 pl-5 text-base-content/80">
                    <li>sell images;</li>
                    <li>
                      use images for business, advertising, or paid promotions
                      without written permission;
                    </li>
                    <li>
                      apply heavy filters or edits that misrepresent the
                      Photographer's work;
                    </li>
                    <li>remove watermarks if any.</li>
                  </ul>
                  <p>
                    7.4 Credit: Where reasonable, the Client agrees to credit
                    the Photographer as "{studioDetails.name}" and tag or link to{" "}
                    {studioDetails.website} when posting online.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">
                    8. Portfolio and Model Release (Choose one)
                  </h3>
                  <p>Select one option and initial:</p>
                  <div className="space-y-2 text-base-content/80">
                    <p>
                      A. Client permits the Photographer to use selected images
                      for portfolio, website, social media, marketing, and
                      competition entry. Initial:{" "}
                      {formData.portfolioOption === "A"
                        ? renderValue(formData.clientInitials, "[ ]")
                        : renderValue("", "[ ]")}
                    </p>
                    <p>
                      B. Client does not permit any public use of images.
                      Initial:{" "}
                      {formData.portfolioOption === "B"
                        ? renderValue(formData.clientInitials, "[ ]")
                        : renderValue("", "[ ]")}
                    </p>
                  </div>
                  <p>
                    If A is selected, the Photographer will use images of
                    children respectfully and will not publish sensitive images.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">9. Privacy</h3>
                  <p>
                    The Photographer will not share Client personal information
                    except as required to provide the services or by law.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">
                    10. Liability and Limitation
                  </h3>
                  <p>
                    10.1 The Photographer will take reasonable steps to store
                    image files safely. In the unlikely event of total loss due
                    to equipment failure, theft, or data corruption, the
                    Photographer's liability is limited to a refund of amounts
                    paid.
                  </p>
                  <p>10.2 The Photographer is not liable for indirect or consequential loss.</p>
                  <p>
                    10.3 The Client is responsible for the safety of themselves
                    and their children at the shoot location.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">11. Force Majeure</h3>
                  <p>
                    Neither Party is liable for failure to perform due to events
                    beyond reasonable control (for example severe weather, venue
                    closure, government restrictions). The Parties will try to
                    reschedule.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">12. General</h3>
                  <p>12.1 This Agreement is the entire agreement between the Parties.</p>
                  <p>12.2 Any changes must be in writing.</p>
                  <p>12.3 If any term is invalid, the remaining terms remain enforceable.</p>
                  <p>
                    12.4 Governing law: Australian Capital Territory (ACT),
                    Australia.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold">Schedule A: Booking Summary</h3>
                  <ul className="list-disc space-y-1 pl-5 text-base-content/80">
                    <li>
                      Client name:{" "}
                      {renderValue(formData.clientName, "[ ]")}
                    </li>
                    <li>
                      Shoot type:{" "}
                      {renderValue(formData.shootType, "[ ]")}
                    </li>
                    <li>
                      Date and time:{" "}
                      {renderValue(scheduleDateTime(), "[ ]")}
                    </li>
                    <li>
                      Location:{" "}
                      {renderValue(formData.location, "[ ]")}
                    </li>
                    <li>
                      Package:{" "}
                      {renderValue(formData.packageType, "[ ]")}
                    </li>
                    <li>
                      Total fee: {renderCurrency(formData.totalFee, "[ ]")}
                    </li>
                    <li>
                      Deposit: {renderCurrency(formData.depositAmount, "[ ]")} due:{" "}
                      {renderValue(
                        formatDateDMY(formData.depositDue),
                        "[ ]",
                      )}
                    </li>
                    <li>
                      Balance due:{" "}
                      {renderValue(formData.balanceDue, "[ ]")}
                    </li>
                    <li>
                      Delivery timeframe:{" "}
                      {renderValue(formData.deliveryTimeframe, "[ ]")}
                    </li>
                    <li>
                      Deliverables:{" "}
                      {renderValue(formData.deliverables, "[ ]")}
                    </li>
                    <li>
                      Retouching:{" "}
                      {renderValue(retouchingSummary, "[Included / Optional add on $ ]")}
                    </li>
                    <li>
                      Portfolio option:{" "}
                      {renderValue(formData.portfolioOption, "[A / B]")}
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h3 className="text-lg font-semibold">Signatures</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <p className="font-semibold">
                        Photographer ({studioDetails.name}):
                      </p>
                      <p>
                        Name:{" "}
                        {renderValue(
                          formData.photographerName,
                          "Feb Dao (or authorised representative)",
                        )}
                      </p>
                      <div className="flex items-center gap-2">
                        <span>Signature:</span>
                        <span className="flex-1 border-b border-dashed border-base-content/50" />
                      </div>
                      <p>
                        Date:{" "}
                        {renderValue(
                          formatDateDMY(formData.photographerSignatureDate),
                          "[ ]",
                        )}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold">Client:</p>
                      <p>
                        Name:{" "}
                        {renderValue(
                          formData.clientSignatureName || formData.clientName,
                          "[ ]",
                        )}
                      </p>
                      <div className="flex items-center gap-2">
                        <span>Signature:</span>
                        <span className="flex-1 border-b border-dashed border-base-content/50" />
                      </div>
                      <p>
                        Date:{" "}
                        {renderValue(
                          formatDateDMY(formData.clientSignatureDate),
                          "[ ]",
                        )}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-base-200 pt-6 print:hidden">
          <p className="text-sm text-base-content/60">
            Ready to send? Click generate to print or save the agreement as a
            PDF.
          </p>
          <button className="btn btn-primary" type="button" onClick={handleGenerate}>
            Generate PDF
          </button>
        </div>
      </div>
    </main>
  )
}
