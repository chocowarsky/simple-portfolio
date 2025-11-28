import { Home, Briefcase, FolderGit2, Mail } from "lucide-react";
import { motion } from "framer-motion";

const MobileNavbar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "projects", icon: FolderGit2, label: "Projects" },
    { id: "experience", icon: Briefcase, label: "Exp" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50 lg:hidden">
      <div className="flex items-center justify-around bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl px-4 py-3 shadow-2xl">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className="relative flex flex-col items-center justify-center w-14 h-14"
          >
            {/* Background bundar saat aktif */}
            {activeSection === item.id && (
              <motion.div
                layoutId="mobile-active-pill"
                className="absolute inset-0 bg-white/10 rounded-xl"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Ikon */}
            <item.icon
              size={20}
              strokeWidth={2}
              className={`z-10 transition-colors duration-300 ${activeSection === item.id ? "text-white" : "text-gray-500"}`}
            />

            {/* Label Kecil */}
            <span className={`text-[10px] mt-1 z-10 font-medium ${activeSection === item.id ? "text-white" : "text-gray-500"}`}>
                {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
