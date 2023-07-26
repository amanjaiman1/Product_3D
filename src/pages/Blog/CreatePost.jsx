import React, { useState, useRef, useEffect, useMemo } from "react";
import JoditEditor from "jodit-react";

function CreatePost({ placeholder }) {
  const editor = useRef(null);
  const [postText, setPostText] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  useEffect(() => {
    if (editor.current) {
      setTimeout(() => {
        editor.current.workplace.tabIndex = 2;
        editor.current.workplace.focus();
      }, 0);
    }
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTagsChange = (e) => {
    setCurrentTag(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && currentTag.trim() !== "") {
      // Add the currentTag to the list of tags
      setTags([...tags, currentTag.trim()]);
      // Clear the currentTag input field
      setCurrentTag("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleEditorChange = (value) => {
    setPostText(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here, you can submit the post data, including 'title', 'content', and 'tags'.
    // For example, you can make an API call to send the data to the server.
    const postData = {
      title: title,
      content: postText,
      tags: tags,
    };

    console.log(postData); // Replace this with your actual logic for submitting the post.
  };

  const editorConfig = useMemo(() => ({
    readonly: false,
    height: '420px',
    width: '100%',
    theme: 'dark',
    toolbar: true,
    style: {
      background: '#27272E',    
    },
  }), []);

  return (
    <div
      style={{ fontFamily: "Poppins, sans-serif" }}
      className="bg-slate-900 max-h-screen"
    >
      <div className="bg-dark p-8 rounded-lg shadow-slate-700 w-full h-screen">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-white text-center">
          Create Post
        </h1>
        <form className="grid gap-4" onSubmit={handleFormSubmit}>
          <input
            className="w-full  p-3 rounded-md shadow-md bg-slate-700 text-white"
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            tabIndex={1}
          />
          <JoditEditor
            ref={editor}
            value={postText}
            config={editorConfig}
            tabIndex={2}
            onBlur={handleEditorChange}
          />

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <div key={index} className="flex items-center">
                <span className="border border-blue-600 text-white px-2 py-1 rounded-md shadow-2xl bg-blue-600">
                  {tag}
                </span>
                <button
                  type="button"
                  onClick={() => handleTagRemove(tag)}
                  className="ml-2 text-white"
                >
                  &#10005; {/* Close (X) symbol */}
                </button>
              </div>
            ))}
          </div>

          <input
            className="w-full text-white p-3 rounded-md shadow-md bg-slate-700"
            type="text"
            placeholder="Tags (Press Enter to add a tag)"
            value={currentTag}
            onChange={handleTagsChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md w-1/12 mx-auto"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
