import React from 'react'

const ChampionChoice = () => {
  return (
    <div>
      {/* Bottom section with image and consulting card */}
      <div className="flex flex-col gap-x-3 overflow-hidden gap-y-1 items-center lg:p-16 bg-gradient-to-b from-red-900 to-red-950 text-white">
        <h1 className="text-3xl font-semibold text-center">
          The Choice of 
         <span className='text-blue-300'>
          {" "}
          Champions
         </span>
        </h1>
        <h3 className="lg:text-lg text-sm text-center">
          Many renowned personalities chose NIOS to balance their passion and
          education.
        </h3>
        {/* Static Images */}
        <div className="flex lg:flex-row flex-col gap-10 mt-7">
          <img
            src="	./images/champ-1.jpg"
            alt="Consulting Service 1"
            className="w-[50%] h-50 object-contain rounded-lg shadow-lg"
          />
          <img
            src="./images/champ-2.jpg"
            alt="Consulting Service 2"
            className="w-[50%] h-50 object-contain rounded-lg shadow-lg"
          />
          <img
            src="./images/champ-3.jpg"
            alt="Consulting Service 3"
            className="w-[50%] h-50 object-contain rounded-lg shadow-lg"
          />
          <img
            src="./images/champ-4.jpg"
            alt="Consulting Service 3"
            className="w-[50%] h-50 object-contain rounded-lg shadow-lg"
          />
          <img
            src="./images/champ-5.jpg"
            alt="Consulting Service 3"
            className="w-[50%] h-50 object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Consulting Services Card */}
      </div>
    </div>
  );
}

export default ChampionChoice
