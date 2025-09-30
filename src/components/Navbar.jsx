import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex gap-3 ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/users">Users</Link>
        <Link to="/settings">Settings</Link>
      </ul>
    </div>
  );
};

export default Navbar;
