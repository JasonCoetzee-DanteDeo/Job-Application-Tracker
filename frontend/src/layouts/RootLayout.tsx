import { Link, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <nav className="bg-[#6b2b3a]">
        <Link to="/" className="p-2 hover:bg-white hover:text-[#6b2b3a]">
          Dashboard
        </Link>
        <Link to="/login" className="p-2 hover:bg-white hover:text-[#6b2b3a]">
          Login
        </Link>
        <Link to="/sign-up" className="p-2 hover:bg-white hover:text-[#6b2b3a]">
          Sign-up
        </Link>
        <Link
          to="/applications"
          className="p-2 hover:bg-white hover:text-[#6b2b3a]"
        >
          Applications
        </Link>
        <Link
          to="/applications/new"
          className="p-2 hover:bg-white hover:text-[#6b2b3a]"
        >
          Add Application
        </Link>
        <Link
          to="/applications/application-1"
          className="p-2 hover:bg-white hover:text-[#6b2b3a]"
        >
          Application Detail
        </Link>
        <Link
          to="/applications/application-1/edit"
          className="p-2 hover:bg-white hover:text-[#6b2b3a]"
        >
          Edit Application
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
