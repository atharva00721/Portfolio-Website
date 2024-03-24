"use client";
import React, { useState } from "react";
import { Box, Container, Button } from "@radix-ui/themes";
import { CardStackDemo } from "./cards";
// import { HoverBorderGradientDemo } from "./hovereffButton";
// import "./Home.css";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Box style={{ width: "100%", maxWidth: "100vw" }}>
      <Container
        size="1"
        className="bg-sexyBlack"
        style={{ maxWidth: "100%", padding: 0 }}
      >
        <div className="flex flex-row p-20">
          <Container className="p-20  w-1/2 flex-row">
            <h1 className="text-white font-extrabold text-6xl">Hi Pookies!</h1>
            <p className="text-white py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero in justo ultricies, nec ultricies justo
              ultricies.
            </p>
            <div className="flex justify-start text-white">
              <Button
                className="bg-pink-900 px-5 py-2 rounded-xl"
                disabled={isLoading}
                onClick={handleClick}
                size="2"
                variant="soft"
              >
                {isLoading ? (
                  <span>Hello Welcome to my site Pookie💖</span>
                ) : (
                  "Click Me"
                )}
              </Button>

            </div>
          </Container>
          <Container className="p-10 w-1/2">
            <img
              src="https://media.discordapp.net/attachments/950311940096393279/1221508254622814238/life-art.png?ex=6612d536&is=66006036&hm=c9d8dbaf33b69780d84100220ff8eaedc535889bfcf75172e0629acaebc0b6f7&=&format=webp&quality=lossless&width=583&height=525"
              alt=""
              className="w-full"
            />
          </Container>
        </div>
      </Container>
      <CardStackDemo />
    </Box>
  );
};

export default Home;
