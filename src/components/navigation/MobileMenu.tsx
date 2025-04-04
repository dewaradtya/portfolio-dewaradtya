const MobileMenu = ({ isOpen, setIsOpen, scrollToSection }: any) => {
  return (
    <div
      className={`absolute top-full left-0 right-0 mt-2 mx-4 p-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg transition-all duration-300 md:hidden ${
        isOpen
          ? "opacity-100 visible transform translate-y-0"
          : "opacity-0 invisible transform -translate-y-4"
      }`}
    >
      <div className="flex flex-col space-y-4">
        {["Home", "About", "Portfolio", "FAQ"].map((item) => (
          <button
            key={item}
            onClick={() => {
              scrollToSection(item.toLowerCase());
              setIsOpen(false);
            }}
            className="text-sm text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {item}
          </button>
        ))}
        <a
          href="https://wa.me/6281332611178?text=Halo,%20saya%20tertarik%20dengan%20portofolio%20Anda!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white text-sm font-medium py-3 rounded-lg hover:bg-gray-900 transition-colors mt-2"
        >
          Let's Talk
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
