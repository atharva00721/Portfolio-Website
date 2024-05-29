import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Github } from "lucide-react";
import { Separator } from "./SeparatorBar";

export function Tab() {
  return (
    <Tabs defaultValue="project1" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="project1">AETHER CONNECT</TabsTrigger>
        <TabsTrigger value="project2">TODO'S</TabsTrigger>
        {/* <TabsTrigger value="project3" className="hidden md:block"> 
          Project 3
        </TabsTrigger>*/}
      </TabsList>
      <TabsContent value="project1">
        <Card className="bg-gray-900 border-0 md:flex gap-2">
          <CardHeader className="text-4xl text-white">
            <CardTitle className="font-bold tracking-wide mb-3">
              AETHER CONNECT
            </CardTitle>
            <hr className="!w-[50%] border-2 rounded-md  border-pink-500" />
            <CardDescription className="text-zinc-300 mt-2">
              A Video Calling app made with Next.js.
            </CardDescription>
            <a
              href="https://github.com/atharva00721/AetherConnect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button isIconOnly className="bg-[#ec4899] max-md:hidden">
                <Github />
              </Button>
            </a>
            <a
              href="https://aetherconnect.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#ec4899] max-md:hidden">Visit Site</Button>
            </a>
          </CardHeader>
          <CardContent className="md:p-4">
            <img
              src="/images/Aetherconnect.png"
              alt="Aether Connect"
              className="rounded-xl mx-auto"
            />
          </CardContent>
          <CardFooter className="max-md:pl-10 md:hidden flex flex-row gap-2 justify-center">
            <a
              className="cursor-none"
              href="https://github.com/atharva00721/AetherConnect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button isIconOnly className="bg-[#ec4899]">
                <Github />
              </Button>
            </a>
            <a
              className="cursor-none"
              href="https://aetherconnect.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#ec4899]">Visit Site</Button>
            </a>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="project2">
        <Card className="bg-gray-900 border-0 md:flex gap-2">
          <CardHeader className="text-4xl text-white">
            <CardTitle className="font-bold tracking-wide mb-3">TODO'S</CardTitle>
            <hr className="!w-[50%] border-2 rounded-md  border-pink-500" />
            <CardDescription className="text-zinc-300 mb-2">
              A Simple Todo app made
            </CardDescription>
            <ButtonGroup className="justify-start pt-4 max-md:hidden">
              <a
                className="cursor-none"
                href="https://github.com/atharva00721/ToDo-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button isIconOnly className="bg-[#ec4899]">
                  <Github />
                </Button>
              </a>
            </ButtonGroup>
          </CardHeader>
          <CardContent className="md:p-4">
            <img
              src="/images/Todos.png"
              alt="Aether Connect"
              className="rounded-xl mx-auto"
            />
          </CardContent>
          <CardFooter className="max-md:pl-10 md:hidden flex justify-center">
            <a
              className="cursor-none"
              href="https://github.com/atharva00721/ToDo-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button isIconOnly className="bg-[#ec4899]">
                <Github />
              </Button>
            </a>
          </CardFooter>
        </Card>
      </TabsContent>
      {/* <TabsContent value="project3">
        <Card className="bg-gray-900 border-0">
          <CardHeader className="text-4xl text-white">
            <CardTitle className="font-bold tracking-wide">
              Hie pookie
            </CardTitle>
            <CardDescription className="text-zinc-300">ayee</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <img
              src="https://media.discordapp.net/attachments/950311940096393279/1222102042995331122/c8c02530ebb2f21782cea7ca5e190e86.jpg?ex=6614fe38&is=66028938&hm=6981ca6c1893b2c70ebcc01da01cbffda322a95d20a6e75622ce28113a6555be&=&format=webp&width=1152&height=532"
              alt="test"
              className="rounded-xl mx-auto"
            />
          </CardContent>
          <CardFooter className="ml-10">
            <a href="/">
              <img
                src="https://media.discordapp.net/attachments/950311940096393279/1221948123832909915/github-icons.png?ex=66146edf&is=6601f9df&hm=8226c7140335ccd9e3e58a1c6628f52bc7ab945ed3a179c1e041f4066f5b2bad&=&format=webp&quality=lossless&width=72&height=72"
                alt=""
              />
            </a>
          </CardFooter>
        </Card>
      </TabsContent> */}
    </Tabs>
  );
}
