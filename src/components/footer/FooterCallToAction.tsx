import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const FooterCallToAction = () => {
  return (
    <div className="w-full mt-24">
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl">Ready To Elevate</h2>
            <h2 className="text-3xl md:text-5xl mb-2">Your Website?</h2>
            <p className="text-3xl md:text-5xl text-gray-400">
              Let&#39;s Work Together!
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
            <Image
              src="/person1.jpg"
              alt="Profile"
              width={48}
              height={48}
              className="object-cover"
            />
            <div className="flex flex-col items-center mt-16">
              {/* Bagian Teks dan Ikon */}
              <div className="flex items-center">
                <span className="text-lg md:text-2xl mr-20">
                  dewarochman.com
                </span>
                <FaArrowRight className="w-6 h-6 text-white" />
              </div>

              {/* Garis Pemisah di Bawah */}
              <hr className="w-full h-px bg-gray-400 mt-2" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-24">
          <a
            href="mailto:owwstudio@gmail.com"
            className="text-white hover:text-gray-300 text-lg md:text-2xl transition-colors"
          >
            dewarochman26@gmail.com
          </a>
          <FaArrowRight className="w-8 h-8 border border-white p-2 rounded-full" />

          <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
            01
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCallToAction;
