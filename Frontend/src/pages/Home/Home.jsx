import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8 px-4">
          <NoteCard
            title={"Meeding on 7th April"}
            date="2nd october"
            content="Meeting on 7th April Meeting on 7th April Meeting on 7th April Meeting on 7th April"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="flex items-center justify-center rounded-full bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        style={{ width: "40px", height: "40px" }}
        onClick={() => {}}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>


      
    </>
  );
};

export default Home;
