import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import EditPostForm from "../../pages/Blog/EditPost"; // Create a component for editing the post

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Card(props) {
  const [showFullContent, setShowFullContent] = useState(false);
  const [editMode, setEditMode] = useState(false); // State to control edit mode
  const maxCharLimit = 1;

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const userFullName = localStorage.getItem("userInfo");
  const isUserLoggedIn = !!userFullName; // Check if user information is present

  const handleDelete = async () => {
    try {
      console.log(props?.data?.id);

      await updateDoc(doc(db, "blogPost", props?.data?.id), { isDelete: true });

      props?.setBlog((prev) => {
        return prev.filter((item) => item.id !== props?.data?.id);
      });
      console.log("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEdit = async (updatedPost) => {
    try {
      // Update the document in Firestore collection based on the document ID (props?.data?.id)

      console.log("props", updatedPost);
      console.log("propsid", props?.data?.id);

      await updateDoc(doc(db, "blogPost", props?.data.id), updatedPost);

      // You can also trigger a success message or perform additional actions here
      console.log("Post updated successfully!");
      setEditMode(false); // Exit edit mode after successful update
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };
  const handleReadMoreClick = () => {
    if (!isUserLoggedIn) {
      toast.warn("Please log in to access full content.", { autoClose: 3000 });
    } else {
      toggleContent();
    }
  };

  const renderContent = () => {
    if (showFullContent || props?.data?.content.length <= maxCharLimit) {
      return <p dangerouslySetInnerHTML={{ __html: props?.data?.content }} />;
    } else {
      const truncatedContent = `${props?.data?.content.slice(0, maxCharLimit)}...`;
      return <p dangerouslySetInnerHTML={{ __html: truncatedContent }} />;
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-full">
            <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-blue-300 to-pink-300 overflow-hidden">
              <img
                className="lg:h-60 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src={props?.data?.imageUrl}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                  <span className="mr-2">{props?.data?.date}</span>
                  {isUserLoggedIn && (
                    <React.Fragment>
                      <MdEdit
                        className="text-violet-600 inline-block mr-2 cursor-pointer ml-[50%] text-base"
                        onClick={() => setEditMode(true)} // Enter edit mode when edit button is clicked
                      />
                      <MdDelete
                        className="text-red-500 inline-block cursor-pointer text-base"
                        onClick={handleDelete}
                      />
                    </React.Fragment>
                  )}
                  <div className="flex flex-wrap mt-2">
                    {props?.data?.tags?.map((tag, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-purple-400 to-cyan-400 text-black text-xs px-2 py-1 rounded-lg m-1"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </h2>
                <h1 className="title-font text-xl font-medium text-gray-600 mb-2 ">
                  <strong>{props?.data?.title}</strong>
                </h1>
                <div className="leading-relaxed">
                  {renderContent()}
                  {props?.data?.content.length > maxCharLimit && (
                    <button
                      className={`mt-4 bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md shadow-cla-blue px-4 py-1 rounded-lg ${
                        !isUserLoggedIn ? "cursor-not-allowed" : ""
                      }`}
                      onClick={handleReadMoreClick}
                      disabled={!isUserLoggedIn}
                    >
                      {showFullContent ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>
                {!isUserLoggedIn && (
                  <p className="text-red-500 mt-2 text-sm">
                    Please Logged in to access full functionality.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {editMode && (
        <EditPostForm
          post={props.data} // Pass the post data to the EditPostForm component for editing
          handleEdit={handleEdit} // Pass the handleEdit function to handle the update
          onCancel={() => setEditMode(false)} // Exit edit mode when cancel button is clicked
        />
      )}
    </section>
  );
}
