import React from 'react'

const ChampionChoice = () => {
  return (
    <div>
      {/* Bottom section with image and consulting card */}
      <div className="flex flex-col gap-x-3 overflow-hidden gap-y-1 justify-center items-center lg:p-16 bg-gradient-to-b from-red-900 to-red-950 text-white">
        <h1 className="text-3xl font-semibold text-center">
          The Choice of
          <span className="text-blue-300"> Champions</span>
        </h1>
        <h3 className="lg:text-lg text-sm text-center">
          Many renowned personalities chose NIOS to balance their passion and
          education.
        </h3>
        {/* Static Images */}
        <div className="flex lg:flex-row flex-col lg:gap-10 gap-4 mt-7 items-center">
          <img
            src="	./images/champ-1.jpg"
            alt="Consulting Service 1"
            className="lg:w-[50%] lg:h-50 w-[80%] h-60 object-contain rounded-lg shadow-lg"
          />
          <img
            src="./images/champ-2.jpg"
            alt="Consulting Service 2"
            className="lg:w-[50%] lg:h-50 w-[80%] h-60 object-contain rounded-lg shadow-lg"
          />
          <img
            src="./images/champ-3.jpg"
            alt="Consulting Service 3"
            className="lg:w-[50%] lg:h-50 w-[80%] h-60 object-contain rounded-lg shadow-lg"
          />
          <img
            src="./images/champ-4.jpg"
            alt="Consulting Service 3"
            className="lg:w-[50%] lg:h-50 w-[80%] h-60 object-contain rounded-lg shadow-lg"
          />
          <img
            src="./images/champ-5.jpg"
            alt="Consulting Service 3"
            className="lg:w-[50%] lg:h-50 w-[80%] h-60 object-contain rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>
  );
}

export default ChampionChoice
