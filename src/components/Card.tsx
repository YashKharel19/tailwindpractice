import React from 'react';

interface CardProps {
    title: string;
    content: string;
    
  }
const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    );
  };
  
  export default Card;