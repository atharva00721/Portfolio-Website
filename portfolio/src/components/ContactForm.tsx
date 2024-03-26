import { Button } from "../components/ui/button";
import { Separator } from "./SeparatorBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export function CardWithForm() {
  return (
    <div className="w-[90%] mx-auto pb-20">
      <h2 id="contact" className="pt-4 md:pt-10 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 md:text-6xl">
        Contact
      </h2>
      <Separator />
      <div className="mb-10"></div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 max-lg:h-1/2">
          <Card className="mx-auto bg-gray-900 border-0 p-5 lg:rounded-l-3xl lg:rounded-r-none rounded-t-3xl rounded-b-none ">
            <CardHeader className="text-5xl text-white">
              <CardTitle className="font-bold tracking-wide">
                Get in Touch!
              </CardTitle>
              <CardDescription className="text-zinc-200">Hello</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name" className="text-white">
                      Name
                    </Label>
                    <Input id="name" placeholder="" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input id="email" placeholder="" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="Message" className="text-white">
                      Message
                    </Label>
                    <Input id="Message" placeholder="Say Hi!" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              {/* <Button variant="outline">Cancel</Button> */}
              <Button variant="outline" className="border-1 border-cyan-300">
                Send
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="max-lg:h-[200px] lg:w-1/2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden lg:h-[467px] lg:rounded-r-3xl lg:rounded-l-none rounded-b-3xl rounded-t-none">
          <BackgroundGradientAnimation />
        </div>
      </div>
    </div>
  );
}
