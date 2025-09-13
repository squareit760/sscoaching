import React from 'react';

const PrivateTeamTraining = () => (
  <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-lg mt-8">
    {/* Left Side: Image */}
    <div className="lg:w-1/2 w-full h-[300px] lg:h-auto relative">
      <img
        src="https://media.nngroup.com/static/img/banners/home-team-training_2x.jpg"
        alt="Team collaborating"
        className="object-cover w-full h-full"
      />
    </div>
    {/* Right Side: Text */}
    <div className="lg:w-1/2 w-full flex flex-col justify-center items-start bg-[#f5aaff] p-8">
      <h2 className="text-3xl font-bold text-black mb-4">
        Private Team Training
      </h2>
      <p className="text-lg text-black mb-6">
        Your team can build your UX skills together, either online or in-person. We’ll focus the discussion around your team’s goals.
      </p>
      <button className="bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow hover:bg-red-700 transition">
        Get Pricing for Team Training
      </button>
    </div>
  </div>
);

export default PrivateTeamTraining;
