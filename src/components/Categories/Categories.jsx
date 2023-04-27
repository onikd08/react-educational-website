import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Web Development",
      description: "This is web development",
      img: "assets/images/web-dev.jpg",
    },
    {
      id: 2,
      name: "Machine Learning",
      description: "This is ML",
      img: "assets/images/machine-learning.jpg",
    },
    {
      id: 3,
      name: "Artificial Intelligence",
      description: "This is AI",
      img: "assets/images/web-dev.jpg",
    },
    {
      id: 4,
      name: "DevOps",
      description: "This is AI",
      img: "assets/images/web-dev.jpg",
    },
  ];
  return (
    <>
      <h3 className="m-4 text-5xl underline hover:decoration-4">
        Choose your path
      </h3>
      <div className="grid gap-x-5 gap-y-7 grid-cols-1 md:grid-cols-3 m-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </>
  );
};

export default Categories;
