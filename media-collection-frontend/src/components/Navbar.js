import { Link, useLocation } from "react-router-dom";
import { Search, Bell } from "lucide-react";

const Navbar = () => {
    const location = useLocation();

    const navItems = [
        { label: "Home", path: "/" },
        { label: "Movies & Shows", path: "/media" },
        { label: "Support", path: "/support" },
        { label: "Subscriptions", path: "/subscriptions" },
    ];


    return (
        <div className="relative flex items-center justify-center w-full h-[120px] bg-black">
            {/* Center pill-shaped nav container */}
            <div className="flex items-center bg-[#121212] border border-[#2c2c2c] rounded-full px-6 py-3 space-x-6">
                {navItems.map(({ label, path }) => {
                    const isActive = location.pathname === path;
                    return (
                        <Link
                            key={path}
                            to={path}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                                isActive
                                    ? "bg-[#1f1f1f] text-white"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>

            {/* Search and Bell icons on right */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 flex space-x-6">
                <Search className="text-white w-5 h-5 cursor-pointer" />
                <Bell className="text-white w-5 h-5 cursor-pointer" />
            </div>
        </div>
    );
};

export default Navbar;
