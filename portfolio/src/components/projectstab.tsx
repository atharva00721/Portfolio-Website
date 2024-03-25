// import { Button } from "../components/ui/button";
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

export function TabsDemo() {
  return (
    <Tabs defaultValue="project1" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="project1">Project 1</TabsTrigger>
        <TabsTrigger value="project2">Project 2</TabsTrigger>
      </TabsList>
      <TabsContent value="project1">
        <Card>
          <CardHeader>
            <CardTitle>Pwd gnrtor</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <img
              src="https://media.discordapp.net/attachments/950311940096393279/1221606926614269972/image.png?ex=6613311b&is=6600bc1b&hm=3459dfff0f6c02ad90af777960f2b2a43d04227ea4c8ce7594a74f9a4a295ced&=&format=webp&quality=lossless&width=1152&height=570"
              alt="test"
              className="rounded-xl"
            />
          </CardContent>
          <CardFooter>
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
        <Card>
          <CardHeader>
            <CardTitle>Car(cat)</CardTitle>
            <CardDescription>
              get a dog and a cat
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <img
              src="https://media.discordapp.net/attachments/950311940096393279/1221487173212311625/upscaler-image_2024-03-24_212309931-2x.jpg?ex=6612c194&is=66004c94&hm=317c389065cbc02cea5e2549f03c20d6405d630ca777e2afc763d07f83995028&=&format=webp&width=1053&height=624"
              alt="test2"
              className="rounded-xl"
            />
          </CardContent>
          <CardFooter>
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
