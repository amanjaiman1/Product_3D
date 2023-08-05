import React from "react";

const Explore = () => {
  const featuredDesigns = [
    {
      id: 1,
      imageSrc: "designs/design1.jpg",
      title: "Design 1",
      description:
        "Check out this amazing design with vibrant colors and eye-catching graphics.",
    },
    // Add more featured designs as needed...
  ];

  // Sample data for trending designs
  const trendingDesigns = [
    {
      id: 1,
      imageSrc: "designs/trending1.jpg",
      title: "Trending Design 1",
    },
    // Add more trending designs as needed...
  ];

  // Sample data for user-submitted designs
  const userDesigns = [
    {
      id: 1,
      imageSrc: "designs/userdesign1.jpg",
      title: "Design 1",
      submittedBy: "JohnDoe",
    },
    // Add more user-submitted designs as needed...
  ];

  return (
    <div className="bg-black">
      <section className="container mx-auto py-8">
        {/* Section to showcase featured designs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Designs</h2>
          {/* Display a grid of featured t-shirt designs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Map through the featured designs and display each design card */}
            {featuredDesigns.map((design) => (
              <div key={design.id} className="bg-white p-4 rounded shadow">
                {/* Display the t-shirt design image */}
                <img
                  src={design.imageSrc}
                  alt={design.title}
                  className="w-full h-40 object-cover mb-2 rounded"
                />
                {/* Show the name or title of the design */}
                <h3 className="text-lg font-semibold mb-1">{design.title}</h3>
                {/* Provide a brief description of the design */}
                <p className="text-sm text-gray-600">{design.description}</p>
                {/* Add a link to view more details about the design */}
                <a
                  href={`/designs/${design.id}`}
                  className="text-blue-500 hover:underline block mt-2"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Section to display trending designs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Trending Designs</h2>
          {/* Display a carousel or slideshow of trending t-shirt designs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Map through the trending designs and display each design slide */}
            {trendingDesigns.map((design) => (
              <div key={design.id} className="bg-white p-4 rounded shadow">
                {/* Display the t-shirt design image */}
                <img
                  src={design.imageSrc}
                  alt={design.title}
                  className="w-full h-40 object-cover mb-2 rounded"
                />
                {/* Show the name or title of the design */}
                <h3 className="text-lg font-semibold mb-1">{design.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Section for user-submitted designs */}
        <div>
          <h2 className="text-2xl font-bold mb-4">User-Submitted Designs</h2>
          {/* Display a grid of user-submitted t-shirt designs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Map through the user-submitted designs and display each design card */}
            {userDesigns.map((design) => (
              <div key={design.id} className="bg-white p-4 rounded shadow">
                {/* Display the t-shirt design image */}
                <img
                  src={design.imageSrc}
                  alt={design.title}
                  className="w-full h-40 object-cover mb-2 rounded"
                />
                {/* Show the name or title of the design and the name of the user who submitted it */}
                <h3 className="text-lg font-semibold mb-1">{design.title}</h3>
                <p className="text-sm text-gray-600">
                  Submitted by: {design.submittedBy}
                </p>
                {/* Add a link to view more details about the design */}
                <a
                  href={`/designs/${design.id}`}
                  className="text-blue-500 hover:underline block mt-2"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
