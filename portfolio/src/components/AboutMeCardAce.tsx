import { FollowerPointerCard } from "./ui/following-pointer";

export function AboutMeCard() {
  return (
    <div className="w-80 mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-gray-900 hover:shadow-xl border border-gray-900">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-900 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <img
              src="https://i.pinimg.com/736x/5e/cf/65/5ecf65ce06fdecff4ed19d9556149b58.jpg"
              alt="thumbnail"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-100">
              {blogContent.title}
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-300">
              {blogContent.description}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">{blogContent.data}</span>
              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                <a
                  className="cursor-none"
                  href="https://github.com/atharva00721"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="relative z-10 px-5 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                <a
                  className="cursor-none"
                  href="https://www.linkedin.com/in/atharvarajthakur/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </div>
              <div className="relative z-10 px-4 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                <a
                  className="cursor-none"
                  href="https://www.instagram.com/dumbdumpssss"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Atharva",
  // date: "28th March, 2023",
  title: "Who am I?",
  description:
    "Hello! I'm Atharva Raj Singh Thakur, a passionate Programmer based in Indore. With a keen eye for detail and a love for creativity, I strive to [Briefly describe your mission or goal]",
  image: "/demo/thumbnail.png",
  authorAvatar: "/manu.png",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);