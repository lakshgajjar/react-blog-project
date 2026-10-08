import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BlogForm({ blogs, onSubmit }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    if (id) {
      const existingBlog = blogs.find((item) => String(item.id) === id);

      if (existingBlog) {
        setBlog(existingBlog);
      }
    }
  }, [id, blogs]);

  const handleChange = (event) => {
    setBlog({
      ...blog,
      [event.target.name]: event.target.value,
    });
  };

  const handleImage = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setBlog({
        ...blog,
        image: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !blog.title.trim() ||
      !blog.author.trim() ||
      !blog.category.trim() ||
      !blog.content.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    onSubmit(blog);
    navigate("/");
  };

  const isEditing = Boolean(id);

  return (
    <main className="min-h-screen bg-[#f6f3ed] px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-amber-600">
            {isEditing ? "Edit article" : "Create article"}
          </p>

          <h1 className="text-4xl font-black tracking-tight text-slate-950">
            {isEditing ? "Refine your story." : "Write something worth sharing."}
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            {isEditing
              ? "Update the details of your existing blog post."
              : "Add a title, image, and your thoughts to publish a new post."}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.08)] sm:p-9"
        >
          <div className="mb-7">
            <label className="mb-2 block text-sm font-bold text-slate-800">
              Blog title
            </label>

            <input
              type="text"
              name="title"
              value={blog.title}
              onChange={handleChange}
              placeholder="Give your article a strong title"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
            />
          </div>

          <div className="mb-7 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Author
              </label>

              <input
                type="text"
                name="author"
                value={blog.author}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-800">
                Category
              </label>

              <input
                type="text"
                name="category"
                value={blog.category}
                onChange={handleChange}
                placeholder="Technology"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
              />
            </div>
          </div>

          <div className="mb-7">
            <label className="mb-2 block text-sm font-bold text-slate-800">
              Cover image
            </label>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="w-full cursor-pointer rounded-xl border border-slate-200 bg-white p-2 text-sm text-slate-500 file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-slate-950 file:px-4 file:py-2.5 file:text-sm file:font-bold file:text-white hover:file:bg-slate-800"
              />

              {blog.image && (
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <img
                    src={blog.image}
                    alt="Preview"
                    className="h-56 w-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mb-8">
            <label className="mb-2 block text-sm font-bold text-slate-800">
              Blog content
            </label>

            <textarea
              name="content"
              value={blog.content}
              onChange={handleChange}
              placeholder="Start writing your story..."
              className="h-64 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              {isEditing ? "Update blog" : "Publish blog"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="rounded-xl border border-slate-200 px-7 py-3.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default BlogForm;
