// import { Avatar } from "@radix-ui/themes";

interface MobileNavbarProps {
  visible: boolean;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ visible }) => {
  return (
    <nav
      className={`z-50 flex justify-between fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white mt-5 px-5 py-4 shadow-md w-full transition-all duration-300 ${
        !visible ? "transform translate-y-[100px]" : ""
      }`}
    >
      <ul className="flex justify-around w-full">
        <li>
          <img
            className="rounded-full w-[50px] h-[50px] p-0 m-0"
            src="https://media.discordapp.net/attachments/950311940096393279/1221631429297836154/image_2024-03-25_064955835-removebg-preview.png?ex=661347ed&is=6600d2ed&hm=65e7822d9c19f0695abcc277e2b85f8314e0280ce9bb2b1152ddb65b764e0931&=&format=webp&quality=lossless&width=525&height=525"
            alt="A"
          />
        </li>
        <li>
          {/* <h4 className="text-pink-500 uppercase tracking-wide font-bold pl-2 my-auto">
            Moon
          </h4> */}
        </li>
      </ul>
      <ul className="flex justify-around w-full items-center">
        <li>
          {/* <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-small">
            Home
          </h5> */}
        </li>
        <li>
          <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium text-center">
            Me
          </h5>
        </li>
        <li>
          <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
            Portfolio
          </h5>
        </li>
        <li>
          <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
            Contact
          </h5>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
