function BlogCard({ blog }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
      <div className="relative overflow-hidden bg-slate-100">
        {blog.image ? (
          <img
            src={blog.image}
            alt={blog.title}
            className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-60 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-sm font-medium text-slate-400">
            No image
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
          {blog.category}
        </span>
      </div>

      <div className="p-6">
        <h2 className="line-clamp-2 text-2xl font-bold leading-tight text-slate-900">
          {blog.title}
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
          {blog.content}
        </p>

        <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-black text-amber-400">
            {blog.author.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="text-sm font-bold text-slate-800">{blog.author}</p>
            <p className="text-xs text-slate-400">{blog.date}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
