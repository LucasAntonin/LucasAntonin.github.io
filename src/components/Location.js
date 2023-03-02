import { IoLocation } from "react-icons/io5";

function Location({ children, className }) {
  return (
    <div
      className={`${className} flex flex-row justify-center font-extrabold text-white text-2xl mb-5`}
    >
      <IoLocation />
      <p className="ml-1">{children}</p>
    </div>
  );
}

export default Location;
