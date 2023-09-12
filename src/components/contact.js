"use client";

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual form handling logic
    console.log("Form submitted!");
  };

  return (
    <section
      id="contact"
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="bg-[#1f242d] min-h-screen text-white p-6"
    >
      <div className="text-center m-8">
        <h1 className="text-3xl font-bold">
          Contact
          <span className="text-3xl font-bold text-[#0ef] mx-2">Me</span>
        </h1>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white text-black rounded-lg p-6"
        >
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label
                className="block text-[#0ef] text-sm font-bold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="Your full name"
                name="fullName"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-2 mb-4">
              <label
                className="block text-[#0ef] text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email address"
                name="email"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label
                className="block text-[#0ef] text-sm font-bold mb-2"
                htmlFor="mobileNumber"
              >
                Mobile Number
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobileNumber"
                type="tel"
                placeholder="Your mobile number"
                name="mobileNumber"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-2 mb-4">
              <label
                className="block text-[#0ef] text-sm font-bold mb-2"
                htmlFor="emailSubject"
              >
                Email Subject
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="emailSubject"
                type="text"
                placeholder="Email subject"
                name="emailSubject"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full px-2 mb-4">
              <label
                className="block text-[#0ef] text-sm font-bold mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
                name="message"
                required
              ></textarea>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-[#0ef] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
