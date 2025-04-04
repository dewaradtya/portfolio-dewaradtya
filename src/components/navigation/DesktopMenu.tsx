const DesktopMenu = ({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) => {
  return (
    <div className="hidden md:flex space-x-8 items-center">
      {["Home", "About", "Portfolio", "FAQ"].map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item.toLowerCase())}
          className="text-sm text-gray-800 font-medium hover:text-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full"
        >
          {item}
        </button>
      ))}
      <a
        href="https://wa.me/6281332611178?text=Halo,%20saya%20tertarik%20dengan%20portofolio%20Anda!"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white text-sm font-medium px-5 py-2 rounded-full hover:shadow-md transition-all duration-200 hover:bg-gray-900"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default DesktopMenu;
