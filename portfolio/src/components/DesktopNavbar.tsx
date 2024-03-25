import { Avatar } from "@radix-ui/themes";

interface DesktopNavbarProps {
  visible: boolean;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ visible }) => {
  return (
    <nav
      className={`z-50 flex justify-between fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white mt-5 rounded-2xl px-5 py-4 shadow-md w-5/6 transition-all duration-300 ${
        !visible ? "transform -translate-y-[100px]" : ""
      }`}
    >
      <div className="flex flex-row">
        <Avatar
          className="rounded-full w-[35px] h-[35px] p-0 m-0"
          size="8"
          src="https://media.discordapp.net/attachments/950311940096393279/1221631429297836154/image_2024-03-25_064955835-removebg-preview.png?ex=661347ed&is=6600d2ed&hm=65e7822d9c19f0695abcc277e2b85f8314e0280ce9bb2b1152ddb65b764e0931&=&format=webp&quality=lossless&width=525&height=525"
          fallback="A"
        />
        <h4 className="text-pink-500 uppercase tracking-wide font-bold pl-2 my-auto hidden md:block">
          Moon
        </h4>
      </div>
      <div className="p-1">
        <ul className="flex justify-around">
          <li>
            <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
              Home
            </h5>
          </li>
          <li>
            <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
              About Me
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
      </div>
    </nav>
  );
};

export default DesktopNavbar;
