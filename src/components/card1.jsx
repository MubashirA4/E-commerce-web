import React from 'react';

const Card = ({ image, title, desc }) => {
  return (
    <>
    <div className="flex flex-col items-center justify-center py-4 border border-1">
      <div className="flex flex-col items-center"> 
        <img src={image} alt="" className="max-w-20 max-h-14 mb-4" />
        <h4 className="font-sans text-gray-800 text-center">{title}</h4>
      </div>
      <div className="bg-pink-200 w-fit rounded-xl px-3 flex items-center justify-center my-4">
        <p className="text-red-600 font-medium">{desc}%</p>
      </div>
    </div>
    </>
  );
};

export default Card;
