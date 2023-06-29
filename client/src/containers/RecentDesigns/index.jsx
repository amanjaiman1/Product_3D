import React from "react";
import RecentDesignCard from "../../components/RecentDesignCard";

function RecentDesigns() {
  const data = [
    {
      id: "qwerthsjd",
      title: "t-shirt design for kids 1",
      lastEdit: "08/03/2002",
    },
    {
      id: "qwerthsjd",
      title: "design 2",
      lastEdit: "08/03/2002",
    },
    {
      id: "qwerthsjd",
      title: "design 3",
      lastEdit: "08/03/2002",
    },
    {
      id: "qwerthsjd",
      title: "design 4",
      lastEdit: "08/03/2002",
    },
    {
      id: "qwerthsjd",
      title: "design 5",
      lastEdit: "08/03/2002",
    },
    {
      id: "qwerthsjd",
      title: "design 6",
      lastEdit: "08/03/2002",
    },
    {
      id: "qwerthsjd",
      title: "design 7",
      lastEdit: "08/03/2002",
    },
    {
      id: "qwerthsjd",
      title: "design 7",
      lastEdit: "08/03/2002",
    },
    {
      id: "qwerthsjd",
      title: "design 8",
      lastEdit: "08/03/2002",
    },
    {
      id: "qwerthsjd",
      title: "design 9",
      lastEdit: "08/03/2002",
    },
    {
      id: "qwerthsjd",
      title: "design 10",
      lastEdit: "08/03/2002",
    },
    {
      id: "qwerthsjd",
      title: "design 11",
      lastEdit: "08/03/2002",
    },
  ];
  return (
    <div className="flex space-x-1 flex-wrap p-4 items-center">
      {[...data, ...data]?.map((item) => (
        <RecentDesignCard data={item} />
      ))}
    </div>
  );
}

export default RecentDesigns;
