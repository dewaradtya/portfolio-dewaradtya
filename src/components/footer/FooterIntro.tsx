const FooterIntro = () => {
    return (
      <div className="flex flex-col items-start">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z"
              fill="black"
            />
            <path d="M12 8L8 12L12 16L16 12L12 8Z" fill="black" />
          </svg>
        </div>
        <p className="mt-3 text-gray-400 text-sm leading-relaxed">
          Let's Create A Custom Photo <br className="hidden md:block" />
          Portfolio Just For You.
        </p>
      </div>
    );
  };

  export default FooterIntro;