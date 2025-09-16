import { useState } from "react";
import SSCoachingHero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentArticlesSection from "./components/RecentUpdates";
import NNGLearnSection from "./components/NNGLearnSection";
import PopularCoursesSection from "./components/PopularCoursesSection";
import PrivateTeamTraining from "./components/PrivateTeamTraining";
import WhyNNGSection from "./components/WhyNNGSection";
import Footer from "./components/Footer";
import ChampionChoice from "./components/ChampionChoice";
import EnquiryForm from "./components/EnquiryForm";
import { Phone, Send, User, X } from "lucide-react";

function App() {
  // const [count, setCount] = useState(0);

   const [isFormOpen, setIsFormOpen] = useState(false);
   const [formData, setFormData] = useState({
     name: "",
     mobile: "",
   });

   const handleInputChange = (e) => {
     const { name, value } = e.target;
     setFormData((prev) => ({
       ...prev,
       [name]: value,
     }));
   };

   const handleSubmit = () => {
     // Basic validation
     if (!formData.name.trim() || !formData.mobile.trim()) {
       alert("Please fill in all fields");
       return;
     }

     // Handle form submission here
     console.log("Form submitted:", formData);
     alert("Thank you for your enquiry! We will contact you soon.");
     setFormData({ name: "", mobile: "" });
     setIsFormOpen(false);
   };

  return (
    <>
      {/* Contact Us Button - Fixed on left side */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg shadow-lg transition-all duration-300 hover:shadow-xl"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="text-sm font-medium tracking-wider">Contact Us</span>
        </button>
      </div>

      {/* Overlay */}
      

      {/* Compact Sliding Form */}
      <div
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 w-80 sm:w-96 bg-white rounded-r-xl shadow-2xl z-50 transition-all duration-300 ease-in-out ${
          isFormOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-slate-700 text-white px-4 py-3 rounded-tr-xl flex justify-between items-center">
          <h2 className="text-lg font-semibold">Quick Enquiry</h2>
          <button
            onClick={() => setIsFormOpen(false)}
            className="p-1 hover:bg-slate-600 rounded transition-colors duration-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-4">
          <div className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <User size={16} />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-700 text-sm"
              />
            </div>

            {/* Mobile Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Phone size={16} />
              </div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-700 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2.5 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm"
            >
              <Send size={16} />
              Submit
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-4 text-center text-gray-600 text-xs">
            <p>We'll get back to you within 24 hours</p>
          </div>
        </div>
      </div>
      <Navbar />
      <SSCoachingHero />
      <RecentArticlesSection />
      <NNGLearnSection />
      <PopularCoursesSection />
      <PrivateTeamTraining />
      <WhyNNGSection />
      {/* <SocialMedia /> */}
      <ChampionChoice />
      <EnquiryForm />
      <Footer />
    </>
  );
}

export default App;