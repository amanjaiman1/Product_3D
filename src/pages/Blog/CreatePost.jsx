import React, { useState, useEffect, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import EditorHomeLayout from "../../layout/EditorHomeLayout";
import TextField from "../../components/TextField";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { generateUUID } from "three/src/math/MathUtils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

function CreatePost() {
  const editor = useRef(null);
  const [postText, setPostText] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false); // New state for tracking submit process

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
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleImageUpload = async () => {
    try {
      if (image) {
        toast.info("Uploading image...");
        const storageRef = ref(getStorage());
        const imageRef = ref(storageRef, `images/${generateUUID()}`);
        const uploadTask = uploadBytesResumable(imageRef, image);
        await uploadTask;

        const imageUrl = await getDownloadURL(imageRef);
        toast.success("Image uploaded successfully!");
        return imageUrl;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image: Please try again.");
    }
    return null;
  };

  const handleEditorChange = (value) => {
    setPostText(value);
  };

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true); // Start the submit process

    if (tags.length === 0) {
      toast.error("Please add at least one tag before submitting.");
      setSubmitting(false); // End the submit process
      return;
    }

    const imageUrl = await handleImageUpload();

    if (imageUrl) {
      const postData = {
        title: title,
        content: postText,
        tags: tags,
        date: new Date().toLocaleDateString("en-GB"),
        imageUrl: imageUrl,
        isDelete: false,
      };

      try {
        await setDoc(doc(db, "blogPost", generateUUID()), postData);
        toast.success("Blog post created successfully!");

        setTitle("");
        setTags([]);
        setPostText("");
        setCurrentTag("");
        setImage(null);

        navigate("/blog");
      } catch (error) {
        console.error("Error saving post:", error);
        toast.error("Error saving post: Please try again.");
      }
    }

    setSubmitting(false); // End the submit process
  };

  const editorConfig = useMemo(
    () => ({
      readonly: false,
      height: "420px",
      width: "100%",
      toolbar: true,
      theme: "dark", // Set a custom theme name
    }),
    []
  );

  return (
    <EditorHomeLayout>
      <div className="max-h-screen">
        <div className="bg-dark p-8 rounded-lg w-full h-screen">
          <div className="grid gap-y-2">
            <TextField
              className="w-full p-3 rounded-md shadow-md bg-black border-gray-600 text-white"
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <div key={index} className="flex items-center">
                  <span className="border border-violet-600 px-2 py-1 rounded-md shadow-2xl bg-violet-600 text-white">
                    {tag}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleTagRemove(tag)}
                    className="ml-2 text-white"
                  >
                    &#215; {/* Close (X) symbol */}
                  </button>
                </div>
              ))}
            </div>
            <TextField
              className="w-full p-3 rounded-md shadow-md  bg-black border-gray-600 text-white"
              type="text"
              placeholder="Tags (Press Enter to add a tag)"
              value={currentTag}
              onChange={handleTagsChange}
              onKeyDown={handleKeyDown}
            />

            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={handleImageChange}
              className="w-full p-3 rounded-md shadow-md"
            />

            <JoditEditor
              className="mt-2"
              ref={editor}
              value={postText}
              config={editorConfig}
              onBlur={handleEditorChange}
            />

            <button
              className={`bg-violet-600 hover:bg-violet-800 font-bold py-3 px-6 rounded-md w-1/5 text-white ${
                submitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              onClick={handleFormSubmit}
              disabled={submitting}
            >
              Create Post
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </EditorHomeLayout>
  );
}

export default CreatePost;
