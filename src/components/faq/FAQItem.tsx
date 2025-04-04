import { FaPlus, FaMinus } from "react-icons/fa6";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800 py-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
        <h3 className="text-2xl md:text-4xl font-medium text-black">{question}</h3>
        <button className="text-black focus:outline-none">
          {isOpen ? <FaMinus className="w-5 h-5 md:w-8 md:h-8" /> : <FaPlus className="w-5 h-5 md:w-8 md:h-8" />}
        </button>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className="text-xl md:text-2xl text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
