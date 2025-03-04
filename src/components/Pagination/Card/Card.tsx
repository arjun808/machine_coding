import React from 'react'; // Ensure React is imported

interface CardProps {
  namee: string;
  id: string; // Assuming id is a string, add this to your props
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ namee, id, imageUrl }) => {
  return (
    <div>

   
    <div className="w-32 h-32 border overflow-hidden relative p-4">
      {/* Absolute positioning for id and name on top of the image */}
      <span className="absolute top-0 left-0 text-red-400 bg-opacity-75 bg-white p-1">{id}</span>
      <h1 className="absolute bottom-0 left-0  bg-opacity-75 text-amber-400 p-1">{namee}</h1>
      
      {/* Ensure the image covers the entire card area */}
      <img className="absolute w-full h-full object-cover top-0 left-0" src={imageUrl} alt={namee}/>
    </div>
    </div>
  );
};

export default Card;
