

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
                    <div className="flex-1 flex flex-col items-start mb-6 md:mb-0 md:mr-10">
                        <h1 className="pro text-2xl md:text-4xl text-white border-b-4 border-secondary mb-5 w-[120px] md:w-[150px] font-bold">
                            Contact
                        </h1>
                        <p className="py-3 md:py-5 text-base md:text-lg">
                            If you want to discuss more in detail, please contact me.
                        </p>
                        <p className="py-2">
                            <span className="font-bold">Email:</span> {config.email}
                        </p>
                        <p className="py-2">
                            <span className="font-bold">Phone:</span> {config.phone}
                        </p>
                        <div className="thoch flex flex-col sm:flex-row py-6 md:py-10 gap-2 sm:gap-5">
                            <a href={`mailto:${config.email}`}>Email Me</a>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <form className="flex-1 flex flex-col items-center md:items-start bg-white bg-opacity-10 p-8 rounded-lg w-full max-w-lg">
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
                    </form>
                </div>
            </section>
        </>
    );
}