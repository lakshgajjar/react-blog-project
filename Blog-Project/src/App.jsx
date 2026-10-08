import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import BlogManage from "./components/BlogManage";
import Navbar from "./components/Navbar";

function App() {
  const [blogs, setBlogs] = useState(() => {
    try {
      const savedBlogs = localStorage.getItem("blogs");
      return savedBlogs ? JSON.parse(savedBlogs) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleSubmit = (blogData) => {
    if (blogData.id) {
      setBlogs(
        blogs.map((blog) =>
          blog.id === blogData.id ? blogData : blog,
        ),
      );
    } else {
      const newBlog = {
        ...blogData,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
      };

      setBlogs([newBlog, ...blogs]);
    }
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<BlogList blogs={blogs} />} />

        <Route
          path="/create"
          element={<BlogForm blogs={blogs} onSubmit={handleSubmit} />}
        />

        <Route
          path="/edit/:id"
          element={<BlogForm blogs={blogs} onSubmit={handleSubmit} />}
        />

        <Route
          path="/manage"
          element={<BlogManage blogs={blogs} onDelete={handleDelete} />}
        />
      </Routes>
    </>
  );
}

export default App;
