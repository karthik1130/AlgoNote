import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  // Adding notes
  const addNewNote = async () => {};

  // Editing note
  const editNote = async () => {};

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the Title");
      return;
    }

    if (!content) {
      setError("Please enter some Code");
      return;
    }

    setError("");

    if (type == "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="w-9 h-9 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-200 "
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>

      <div className="flex flex-col gap-2">
        <label className="input-label">Title</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Rearrange Sequence I"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">Code</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded font-scpro"
          placeholder="Code"
          rows={20}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className="mt-3">
        <label className="input-label">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

      <button className="button-primary font-medium mt-5 p-3" onClick={handleAddNote}>
        Add
      </button>
    </div>
  );
};

export default AddEditNotes;
