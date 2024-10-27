import { useState } from "react";
import Link from "../Link/Link";
import { BsMenuButtonWide } from "react-icons/bs";
import { FcCloseUpMode } from "react-icons/fc";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:id", name: "User Profile" },
  ];

  return (
    <nav className="text-black p-6 bg-white">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open == true ? (
          <FcCloseUpMode></FcCloseUpMode>
        ) : (
          <BsMenuButtonWide className="text-xl "></BsMenuButtonWide>
        )}
      </div>
      <ul className={`md:flex duration-1000 absolute md:static
        ${open ? 'top-12' : '-top-60'}
        bg-purple-600 text-white px-6`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
