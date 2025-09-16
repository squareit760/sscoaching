import React from "react";

const EnquiryForm = () => {
  return (
    <div className="bg-white text-black py-10 px-4 border-t-3 border-b-3 border-blue-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4">
        
        {/* Contact Info */}
        <p className=" text-lg font-medium flex-1 text-center md:text-left">
          Call Now : Mob No. - <a href="tel:+919839065533" className="font-semibold">+91 9839065533</a>
        </p>

        {/* Apply Button */}
        

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-4 flex-1 justify-center">
          <input
            type="text"
            placeholder="*Name"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
            required
          />
          <input
            type="tel"
            placeholder="*Contact Number"
            pattern="[0-9]{10}"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
            required
          />
          <button
            type="submit"
            className="border-2 border-blue-300 text-white cursor-pointer bg-sky-500 px-5 py-2 rounded-md hover:bg-white hover:text-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
