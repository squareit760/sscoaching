import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  User,
  Phone,
  GraduationCap,
  Layers,
  ChevronDown,
  PhoneCall,
} from "lucide-react";

export default function EnquiryFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    course: "",
    stream: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.mobile ||
      !formData.course ||
      !formData.stream
    ) {
      toast.error("Please fill all fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    console.log("Form submitted:", formData);
    toast.success("Thank you! We will contact you soon.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setFormData({ name: "", mobile: "", course: "", stream: "" });
  };

  return (
    <>
      <ToastContainer />
      <section className="bg-gradient-to-r from-[#2563eb] to-[#0a1f44] py-10 relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-1/4 w-48 h-48 bg-white rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-10 right-1/4 w-64 h-64 bg-yellow-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a1f44] mb-6 text-center">
              Don't Wait! Secure Your Seat Today.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              {/* Name Field */}
              <div className="md:col-span-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Mobile Field */}
              <div className="md:col-span-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Course Field */}
              <div className="md:col-span-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <GraduationCap className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    placeholder="Course Interested"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Stream Select */}
              <div className="md:col-span-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Layers className="w-5 h-5 text-gray-400" />
                  </div>
                  <select
                    name="stream"
                    value={formData.stream}
                    onChange={handleChange}
                    className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
                  >
                    <option value="">Select Stream</option>
                    <option value="stream1">Stream 1</option>
                    <option value="stream2">Stream 2</option>
                    <option value="stream3-4">Stream 3 & 4</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-1">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-[#0a1f44] font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center group"
                >
                  <PhoneCall className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Request a Callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
