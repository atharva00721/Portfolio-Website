import React, { useState } from "react";
import { Flex, Text, Box, Container, Button } from "@radix-ui/themes";
import "./Home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

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
        className="bg"
        style={{ maxWidth: "100%", padding: 0 }}
      >
        <Flex justify={"between"}>
          <Container style={{ margin: "15% 0", width: "55%" }}>
            <h1 className="left-align pds-50">
              <Text weight="bold" style={{ color: "#fff" }}>
                Welcome to My Portfolio
              </Text>
            </h1>
            <p className="left-align pds-50">
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero in justo ultricies, nec ultricies justo
                ultricies.
              </Text>
            </p>
            <div
              style={{
                padding: "0 40px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Button
                className="custom-button left-align"
                disabled={isLoading}
                onClick={handleClick}
                size="2"
                variant="soft"
                color="white"
              >
                {isLoading ? (
                  <span style={{ color: "white" }}>
                    Hello Welcome to my site
                  </span>
                ) : (
                  "Click Me"
                )}
              </Button>
            </div>
          </Container>
          <Container style={{ padding: "100px 50px 0 0", width: "45%" }}>
            <img
              src="https://media.discordapp.net/attachments/950311940096393279/1221508254622814238/life-art.png?ex=6612d536&is=66006036&hm=c9d8dbaf33b69780d84100220ff8eaedc535889bfcf75172e0629acaebc0b6f7&=&format=webp&quality=lossless&width=583&height=525"
              alt=""
              srcset=""
            />
          </Container>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
