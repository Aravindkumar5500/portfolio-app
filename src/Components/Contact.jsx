import"./Contact.css"

export default function Contact() {
    const config = {
        email: "aravindrps75@gmail.com",
        phone: "6380601959"
    };

    return (
        <>
            <section id="contact" className="bg-primary px-5 py-32 text-white">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4 md:px-0">
                    {/* Contact Info */}
                    <div className="contactmail flex-1 flex flex-col items-start mb-6 md:mb-0 md:mr-10">
                        <h1 className="pro text-2xl md:text-4xl text-white border-b-4 border-secondary mb-5 w-[120px] md:w-[150px] font-bold">
                            Contact
                        </h1>
                        <p className="par py-3 md:py-5 text-base md:text-lg">
                            If you want to discuss more in detail, please contact me.
                        </p>
                     <p className="py-2">
  <span className="font-bold">Email:</span> {config.email}
</p>
<p className="py-2">
  <span className="font-bold">Phone:</span> {config.phone}
</p>

<div className="flex flex-col sm:flex-row py-6 md:py-10 gap-2 sm:gap-5">
  <a
    href={`https://mail.google.com/mail/?view=cm&to=${config.email}`}
    className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-600 transition"
  >
    Email Me
  </a>
  <a
  href={`https://wa.me/${config.phone}`}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition flex items-center gap-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.78 11.78 0 0012 0 11.78 11.78 0 003.48 3.48 11.78 11.78 0 000 12a11.78 11.78 0 003.48 8.52A11.78 11.78 0 0012 24a11.78 11.78 0 008.52-3.48A11.78 11.78 0 0024 12a11.78 11.78 0 00-3.48-8.52zM12 22a10.05 10.05 0 01-5.38-1.58L2 22l1.58-4.62A10.05 10.05 0 012 12a10 10 0 1110 10zm5.43-7.56c-.3-.15-1.77-.87-2.05-.97s-.48-.15-.68.15-.78.96-.95 1.16-.35.22-.65.07a8.34 8.34 0 01-2.46-1.5 9.3 9.3 0 01-1.7-2.1c-.18-.3 0-.46.13-.61s.3-.35.45-.52a2 2 0 00.3-.51.56.56 0 000-.52c-.07-.15-.68-1.65-.94-2.28-.25-.6-.5-.52-.68-.53s-.37 0-.57 0a1.1 1.1 0 00-.8.38 3.34 3.34 0 00-1 2.47 5.82 5.82 0 001.2 3.18c.3.45 1.77 2.67 4.3 3.75A14.26 14.26 0 0016 17a3.64 3.64 0 002.5-1.7c.18-.3.18-.53.12-.68s-.3-.2-.6-.35z" />
  </svg>
  WhatsApp Me
</a>
</div>

                    </div>
                    {/* Contact Form */}
                    {/* <form className="contact-form flex-1 flex flex-col items-center md:items-start bg-white bg-opacity-10 p-8 rounded-lg w-full max-w-lg">
                        <h5 className="pro text-white border-b-4 border-primary mb-5 font-bold">
                            Get In Touch
                        </h5>
                        <label className="mb-2 w-full" htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className="border-2 border-gray-300 rounded-md p-2 mb-4 text-black w-full"
                        />

                        <label className="mb-2 w-full" htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="border-2 border-gray-300 rounded-md p-2 mb-4 text-black w-full"
                        />

                        <label className="mb-2 w-full" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter your Message"
                            className="border-2 border-gray-300 rounded-md p-2 mb-4 text-black w-full min-h-[100px] resize-y"
                        />

                        <button type="submit" className="down btn bg-secondary text-white px-4 py-2 rounded w-full md:w-auto">
                            Send
                        </button>
                    </form> */}
                </div>
            </section>
        </>
    );
}