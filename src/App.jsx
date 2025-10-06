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
import UpdatesSection from "./components/Updates";
import NIOSStreamsSection from "./components/RecentUpdates";
import StatsSection from "./components/StatsSection";
import EnquiryFormSection from "./components/HorEnquiryForm";
import ToppersSection from "./components/ToppersSection";
import SocialMediaFeedSection from "./components/SocialMediaSection";
import TrustBadgesSection from "./components/TrustBadges";
import QuestionPapersSection from "./components/PreviousPapers";
import CelebritySection from "./components/Celebrity";
import TestimonialsSection from "./components/Testimonials";
import CTASection from "./components/CTASection";
import FooterNew from "./components/FooterNew";
import EnquiryFormPopup from "./components/enquiry-form";

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
      {/* Enquire Now Button */}
      <div
        className="fixed left-0 z-50 flex items-center justify-center"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg shadow-lg transition-all duration-300 hover:shadow-xl"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="text-sm font-medium tracking-wider">
            Enquire Now
          </span>
        </button>
      </div>

      
      <div
        className={`fixed z-50 top-1/2 left-0 w-80 sm:w-96 bg-white rounded-r-xl shadow-2xl transition-transform duration-300 ease-in-out ${
          isFormOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          transform: isFormOpen
            ? "translateY(-50%) translateX(0)"
            : "translateY(-50%) translateX(-100%)",
        }}
      >
        
        <div className="bg-blue-700 text-white px-4 py-3 rounded-tr-xl flex justify-between items-center">
          <h2 className="text-lg font-semibold">Quick Enquiry</h2>
          <button
            onClick={() => setIsFormOpen(false)}
            className="p-1 hover:bg-slate-600 rounded transition-colors cursor-pointer duration-200"
          >
            <X size={18} />
          </button>
        </div>

        
        <div className="p-4">
          <div className="space-y-4">
            
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
                className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700 text-sm"
              />
            </div>

            
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
                className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700 text-sm"
              />
            </div>

            
            <button
              onClick={handleSubmit}
              className="w-full cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2.5 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm"
            >
              <Send size={16} />
              Submit
            </button>
          </div>

          <div className="mt-4 text-center text-gray-600 text-xs">
            <p>We'll get back to you within 24 hours</p>
          </div>
        </div>
      </div>

      {/* <EnquiryFormPopup /> */}

      <Navbar />
      <SSCoachingHero />
      <UpdatesSection />
      <NIOSStreamsSection />
      <StatsSection />
      <EnquiryFormSection />
      <ToppersSection />
      <SocialMediaFeedSection />
      <TrustBadgesSection />
      <QuestionPapersSection />
      <CelebritySection />
      <TestimonialsSection />
      <CTASection />
      <FooterNew />

      {/* <NNGLearnSection /> */}
      {/* <PopularCoursesSection />*/}
      {/* <PrivateTeamTraining /> */}
      {/* <WhyNNGSection />  */}
      {/* <SocialMedia /> */}
      {/* <ChampionChoice />*/}
      {/* <EnquiryForm /> */}
      {/* <Footer />  */}
    </>
  );
}

export default App;