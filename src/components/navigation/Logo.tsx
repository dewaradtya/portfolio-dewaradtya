const Logo = () => {
    return (
      <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z"
            fill="white"
          />
          <path d="M12 8L8 12L12 16L16 12L12 8Z" fill="white" />
        </svg>
      </div>
    );
  };
  
  export default Logo;