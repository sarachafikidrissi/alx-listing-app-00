import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, isSelected, onClick }) => {
    return (
      <button
        className={`m-2 px-4 py-2 rounded-full border-2 ${
          isSelected ? 'border-teal-500 text-teal-500' : 'border-gray-500 text-gray-700'
        }`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
export default Pill;