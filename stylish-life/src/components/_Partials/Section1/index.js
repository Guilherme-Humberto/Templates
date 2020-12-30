import Image from "next/image";
import { FiChevronsRight } from "react-icons/fi";
import { Container, ImageBox, Texts, Title, Desc, Text } from "./styles";

export default function Section1() {
  return (
    <Container>
      <ImageBox>
        <Image
          className="img"
          src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          layout="fill"
        />
      </ImageBox>
      <Texts>
        <Title>Lorem Ipsum é simplesmente uma simulação</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          ullam quo corrupti ad molestiae nobis? Aspernatur dolores nobis
          placeat debitis velit porro adipisci consequatur eligendi!
        </Desc>
        <Text>
          Saiba Mais
          <FiChevronsRight className="icon" size={35} />
        </Text>
      </Texts>
    </Container>
  );
}
