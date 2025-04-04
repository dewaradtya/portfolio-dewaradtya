import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

const FooterSocialLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-36">
      <div className="col-span-1">
        <ul>
          <li className="mb-1">
            <p>
              <a>Data Privacy</a>
            </p>
          </li>
          <li className="mb-1">
            <p>
              <a>Privacy Policy</a>
            </p>
          </li>
          <li className="mb-1">
            <p>
              <a>Impressum</a>
            </p>
          </li>
          <li>
            <p>
              <a>Product</a>
            </p>
          </li>
        </ul>
      </div>

      <div className="col-span-1 flex justify-center">
        <p className="text-gray-400">
          From zero to hero!
          <br />
          Keep going, never give up, 
          <br />
          and achieve your dreams!
        </p>
      </div>

      <div className="col-span-1 flex justify-end">
        <div className="flex space-x-4">
          <a
            href="https://instagram.com/dewaradtya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-10 h-10 md:w-12 md:h-12 border border-white p-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition" />
          </a>
          <a
            href="https://github.com/dewaradtya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-10 h-10 md:w-12 md:h-12 border border-white p-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition" />
          </a>
          <a
            href="https://twitter.com/dewaradtya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="w-10 h-10 md:w-12 md:h-12 border border-white p-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
