export default function ContactSection() {
    return (
        <section id="contact" className="w-full py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Get in Touch
                    </h2>

                    <p className="text-gray-600 mt-3 max-w-md">
                        Have a project in mind? Looking to transform your digital operations?
                        Our team responds within 1–2 business days.
                    </p>

                    {/* Contact Details */}
                    <div className="mt-10 p-6 bg-white shadow-sm border border-gray-200 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-900">Quasent USA Office</h3>
                        <p className="text-gray-600 text-sm mt-2">176 East Main Street, Suite 5, Westborough, MA 01581, USA</p>

                        <div className="mt-4 text-sm text-gray-600 space-y-1">
                            <p>Email: contact@quasent.com</p>
                            <p>Phone: +1 508-302-3020</p>
                        </div>
                    </div>
                </div>

                {/* Right – Form */}
                <form className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <div className="grid grid-cols-1 gap-6">

                        <div>
                            <label className="text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-50 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-50 h-28 focus:outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-md text-white font-semibold
                            bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-md"
                        >
                            Send Message
                        </button>

                    </div>
                </form>

            </div>
        </section>
    );
}
