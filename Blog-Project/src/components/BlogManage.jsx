import { Link } from "react-router-dom";

function BlogManage({ blogs, onDelete }) {
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to Delete This Blog?",
    );

    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#f6f3ed] px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <section className="mb-8 flex flex-col gap-5 rounded-[2rem] bg-slate-950 p-7 text-white sm:flex-row sm:items-end sm:justify-between sm:p-9">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-amber-400">
              Dashboard
            </p>

            <h1 className="text-4xl font-black">Manage your stories</h1>

            <p className="mt-3 text-sm text-slate-400">
              Edit or remove your published articles.
            </p>
          </div>

          <Link
            to="/create"
            className="rounded-xl bg-amber-400 px-5 py-3 text-center text-sm font-black text-slate-950 transition hover:bg-amber-300"
          >
            + New blog
          </Link>
        </section>

        <div className="mb-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Total blogs
            </p>

            <p className="mt-2 text-3xl font-black text-slate-950">
              {blogs.length}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Status
            </p>

            <p className="mt-2 text-lg font-black text-slate-950">
              {blogs.length ? "Publishing active" : "Ready to publish"}
            </p>
          </div>
        </div>

        {blogs.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-2xl font-black text-amber-400">
              B
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              No blogs available
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Create your first blog to start managing posts.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-4">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-20 w-24 shrink-0 rounded-xl object-cover"
                      />
                    ) : (
                      <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-400">
                        No image
                      </div>
                    )}

                    <div className="min-w-0">
                      <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                        {blog.category}
                      </span>

                      <h2 className="mt-2 truncate font-bold text-slate-900">
                        {blog.title}
                      </h2>

                      <p className="mt-1 text-sm text-slate-400">
                        By {blog.author} · {blog.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    <Link
                      to={`/edit/${blog.id}`}
                      className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="rounded-xl bg-red-50 px-4 py-2.5 text-sm font-bold text-red-600 transition hover:bg-red-100"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default BlogManage;
