import React from "react";
import { MdNoteAdd } from "react-icons/md";

const EmptyCard = () => {
  return (
    <div 
      className="relative w-full h-full" 
      style={{ minHeight: "300px" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   flex flex-col items-center text-center space-y-4"
      >
        <MdNoteAdd className="text-6xl text-gray-400" />
        <h1 className="text-2xl font-semibold text-gray-600">
          No Notes Found
        </h1>
        <p className="text-gray-500">
          Start organizing your thoughts. Click the <strong>+</strong> icon below to create your first note.
        </p>
      </div>
    </div>
  );
};

export default EmptyCard;
