import React from "react";

const PrivateTeamTraining = () => (
  <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-lg mt-8">
    {/* Left Side: Image */}
    <div className="lg:w-1/2 w-full h-[300px] lg:h-auto relative">
      <img
        src="./images/training.jpg"
        alt="Team collaborating"
        className="object-cover w-full h-full"
      />
    </div>
    {/* Right Side: Text */}
    <div className="lg:w-1/2 w-full flex flex-col  items-start bg-[#f5aaff] p-8">
      <h2 className="text-2xl font-bold text-black mb-4">
        How to Pass from NIOS Board in Class 10th & 12th ?
      </h2>
      <p className="text-lg text-black mb-6">
        There are so many students who are good in one subject but poor in
        others which results in FAILURE in final exams. In SS Coaching,NIOS
        Coaching in Lucknow , you can appear for a few subjects in the first
        half of the year and for the remaining subjects in the next half of the
        session. In this way, students can pass a simple subject and a difficult
        subject first and then pass the remaining subjects later. If someone has
        failed in class 9 or 11 and wants to pass the class 10th or 12th exam
        without appearing in class 9th or 11th again then NIOS is the best
        option for them. This is why more and more students are opting for NIOS
        at SS Coaching, Best NIOS coaching in Lucknow for their academic and
        professional courses.
      </p>
      <button className="bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow hover:bg-red-700 transition">
        Know More
      </button>
    </div>
  </div>
);

export default PrivateTeamTraining;
