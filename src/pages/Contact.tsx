import Navbar from "../components/Aboutus/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SmoothScrollTop from "../components/SmoothScrollTop";

const Contact = () => {
  return (
    <SmoothScrollTop>
      <div className="bg-gray-50">
        <Header />
        <Navbar />

        {/* Contact Section */}
        <div className="min-h-screen px-6 md:px-16 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">
              Contact Us
            </h1>
            <p className="text-gray-500 mt-4">
              Let’s discuss your printing requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Form */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full p-3 border rounded-lg"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-3 border rounded-lg"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <p>
                No.73-A, 2nd Street Extension,<br />
                100 Feet Road, Gandhipuram,<br />
                Coimbatore - 641012
              </p>
              <p>+91 73563 19828</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </SmoothScrollTop>
  );
};

export default Contact;