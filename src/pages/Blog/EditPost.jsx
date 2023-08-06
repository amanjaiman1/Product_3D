import React, { useState } from "react";

export default function EditPostForm({ post, handleEdit, onCancel }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the updated post data

    const updatedPost = {
      ...post,
      title,
      content: contentAsHtml, // Save the content as HTML when submitting the form
    };
    // Call the handleEdit function to update the post in Firestore
    handleEdit(updatedPost);
  };

  // Convert HTML content to plain text for editing
  const contentAsText = new DOMParser().parseFromString(content, "text/html").body
    .textContent;

  // Convert plain text back to HTML when saving
  const contentAsHtml = new DOMParser().parseFromString(contentAsText, "text/html")
    .body.innerHTML;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-80 bg-gray-800">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl font-medium mb-4">Edit Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            {/* Display content as plain text for editing */}
            <textarea
              id="content"
              rows="5"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full resize-none"
              value={contentAsText}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
