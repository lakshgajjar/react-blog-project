import BlogCard from "./BlogCard";

function BlogList({ blogs }) {
  return (
    <main className="min-h-screen bg-[#f6f3ed] px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <section className="mb-12 overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-white shadow-xl sm:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
              The Bright Blog
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-6xl">
              Ideas worth
              <span className="block text-amber-400">reading.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Discover stories, practical knowledge, and fresh perspectives
              from our latest blog posts.
            </p>
          </div>
        </section>

        {blogs.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-2xl font-black text-amber-400">
              B
            </div>

            <h2 className="text-2xl font-bold text-slate-900">No blogs yet</h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Create your first blog post and it will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default BlogList;
