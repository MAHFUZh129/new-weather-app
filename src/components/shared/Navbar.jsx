import { useState } from "react";
import {
  CloudSun,
  Search,
  MapPin,
  Menu,
  X,
  Sun,
} from "lucide-react";
import { NavLink } from "react-router";
import Logo from "./Logo";
import SearchModal from "../SearchModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);


  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Forecast", path: "/forecast" },
    { name: "About", path: "/about" },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors ${isActive
      ? "text-blue-600"
      : "text-slate-600 hover:text-blue-600"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">

          {/* Logo */}
          <Logo></Logo>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={linkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:border-blue-300 hover:text-blue-600">
              <MapPin size={17} className="text-blue-500" />
              Dhaka, BD
            </button>

            <button
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-500 transition hover:bg-amber-100"
            >
              <Sun size={20} />
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700">
              <Search size={17} />
              Search City
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="rounded-xl bg-slate-100 p-2.5 text-slate-700 md:hidden"
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>


        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              <button
                onClick={() => {
                  setIsModalOpen(true),
                    () => setIsOpen(true)
                }
                }
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white">
                <Search size={18} />
                Search City
              </button>
            </div>

          </div>
        )}

      </header>
      {/* Search Modal */}
      {isModalOpen && <SearchModal onClose={() => setIsModalOpen(false)} />}
    </>


  );
};

export default Navbar;
