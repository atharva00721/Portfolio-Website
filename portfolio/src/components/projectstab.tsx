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

export function Tab() {
  return (
    <Tabs defaultValue="project1" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
        <TabsTrigger value="project1">Project 1</TabsTrigger>
        <TabsTrigger value="project2">Project 2</TabsTrigger>
        <TabsTrigger value="project3" className="hidden md:block">
          Project 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="project1">
        <Card className="bg-gray-900 border-0">
          <CardHeader className="text-4xl text-white">
            <CardTitle className="font-bold tracking-wide">Veronica</CardTitle>
            <CardDescription className="text-zinc-300">
              An AI Assistant to help the specially-abled.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <img
              src="https://assets.devfolio.co/hackathons/f1a79bba9fec4817af48a38440ecd984/projects/c819d49fa9a84babb25a2a62d8d04ad7/518149a8-df77-4bd3-b685-88a05e0c1b2c.jpeg"
              alt="Veronica"
              className="rounded-xl mx-auto"
            />
          </CardContent>
          <CardFooter className="pl-10">
            <a href="/">
              <img
                src="https://media.discordapp.net/attachments/950311940096393279/1221948123832909915/github-icons.png?ex=66146edf&is=6601f9df&hm=8226c7140335ccd9e3e58a1c6628f52bc7ab945ed3a179c1e041f4066f5b2bad&=&format=webp&quality=lossless&width=72&height=72"
                alt=""
              />
            </a>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="project2">
        <Card className="bg-gray-900 border-0">
          <CardHeader className="text-4xl text-white">
            <CardTitle className="font-bold tracking-wide">Car(cat)</CardTitle>
            <CardDescription className="text-zinc-300">
              get a dog and a cat
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <img
              src="https://media.discordapp.net/attachments/950311940096393279/1222102042751926352/92298f2357e9c17376d8166d82520bb4.jpg?ex=6614fe38&is=66028938&hm=ea0da89b1a292b67d0a91909eecb0b9871d2b410db641b00cffd0fa512d602cb&=&format=webp&width=1111&height=625"
              alt="test2"
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
      </TabsContent>
      <TabsContent value="project3">
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
      </TabsContent>
    </Tabs>
  );
}
