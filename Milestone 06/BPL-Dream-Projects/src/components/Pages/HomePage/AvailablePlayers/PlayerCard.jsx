import { useState } from 'react';
import userIcons from '../../../../../public/assets/user 1.png';

const PlayerCard = ({ player }) => {
  const { name, country, role, battingStyle, price, image } = player;

  const [isSelected, setIsSelected] = useState(false);

  return (
    <div>
      <div className="bg-white customBorders rounded-2xl shadow-md p-4 space-y-3 hover:shadow-xl duration-300 hover:-translate-y-1 cursor-pointer transition text-gray-500">
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover bg-top rounded-xl"
        />

        {/* Name */}
        <div className="flex items-center gap-2 text-gray-800 font-semibold">
          <span>
            <img src={userIcons} alt="icons" />
          </span>
          <h2>{name}</h2>
        </div>

        {/* Country + Role */}
        <div className="flex justify-between text-sm text-gray-500">
          <span>🏳️ {country}</span>
          <span className="bg-gray-100 px-2 py-1 rounded-md text-xs">
            {role}
          </span>
        </div>

        {/* Rating / Batting */}
        <div className="text-sm text-gray-700">
          <p className="font-semibold text-black">Rating</p>
          <div className="flex justify-between">
            <span>{battingStyle}</span>
            <span>{battingStyle}</span>
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-800">Price: ${price}</p>
          <button
            disabled={isSelected}
            onClick={() => setIsSelected(true)}
            className="customBorders duration-200 px-3 py-1 rounded-lg text-sm hover:bg-gray-100 cursor-pointer"
          >
            {isSelected ? 'Selected' : 'Choose Player'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
