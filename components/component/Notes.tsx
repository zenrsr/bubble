"use client";
import React, { useState, useEffect } from "react";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    // Retrieve saved values from localStorage when the component mounts
    const savedTitle = localStorage.getItem("title");
    const savedText = localStorage.getItem("text");

    if (savedTitle) {
      setTitle(savedTitle);
    }

    if (savedText) {
      setText(savedText);
    }
  }, []);

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    localStorage.setItem("text", newText);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    localStorage.setItem("title", newTitle);
  };

  return (
    <div className="min-h-screen w-full text-black pt-4 flex flex-col overflow-y-auto">
      <textarea
        className="w-full h-[100px] border-none pt-2 focus:outline-none resize-none mt-20 text-4xl leading-6 placeholder:text-4xl placeholder:font-bold placeholder:text-gray-500"
        placeholder="Untitled Title"
        value={title}
        onChange={handleChangeTitle}
      />
      <div className="border-t border-gray-500" />
      <textarea
        className="w-full flex-1 border-none focus:outline-none resize-none mt-10"
        placeholder="Start typing..."
        value={text}
        onChange={handleChangeText}
      />
    </div>
  );
};

export default Notes;
