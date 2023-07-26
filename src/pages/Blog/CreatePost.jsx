import React, { useState, useRef, useEffect, useMemo } from "react";
import JoditEditor from "jodit-react";
import EditorHomeLayout from "../../layout/EditorHomeLayout";
import TextField from "../../components/TextField";

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

  const editorConfig = useMemo(
    () => ({
      readonly: false,
      height: "420px",
      width: "100%",
      toolbar: true,
    }),
    []
  );

  return (
    <EditorHomeLayout>
      <div className="max-h-screen">
        <div className="bg-dark p-8 rounded-lg w-full h-screen">
          <form className="grid gap-y-2" onSubmit={handleFormSubmit}>
            <TextField
              className="w-full  p-3 rounded-md shadow-md "
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
              tabIndex={1}
            ></TextField>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <div key={index} className="flex items-center">
                  <span className="border border-blue-600  px-2 py-1 rounded-md shadow-2xl bg-blue-600 text-white">
                    {tag}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleTagRemove(tag)}
                    className="ml-2 "
                  >
                    &#10005; {/* Close (X) symbol */}
                  </button>
                </div>
              ))}
            </div>
            <TextField
              className="w-full  p-3 rounded-md shadow-md"
              type="text"
              placeholder="Tags (Press Enter to add a tag)"
              value={currentTag}
              onChange={handleTagsChange}
              onKeyDown={handleKeyDown}
            ></TextField>

            <JoditEditor
              className="mt-2"
              ref={editor}
              value={postText}
              config={editorConfig}
              tabIndex={2}
              onBlur={handleEditorChange}
            />

            <button
              className="bg-blue-600 hover:bg-primary font-bold py-3 px-6 rounded-md w-1/12  text-white"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </EditorHomeLayout>
  );
}

export default CreatePost;
