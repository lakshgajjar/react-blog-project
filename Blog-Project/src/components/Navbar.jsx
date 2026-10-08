import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-semibold transition ${
      isActive
        ? "bg-amber-400 text-slate-950 shadow-sm"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-lg font-black text-slate-950">
            B
          </span>
          <span className="text-xl font-bold tracking-tight text-white">
            Bright<span className="text-amber-400">Blog</span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/create" className={linkStyle}>
            Write
          </NavLink>

          <NavLink to="/manage" className={linkStyle}>
            Manage
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
