import Image from "next/image";

import { Container, Texts, Title, Desc, Line, ImageBox } from "./styles";

export default function Section3() {
  return (
    <Container>
      <Texts>
        <Title>Lorem Ipsum é simplesmente uma simulação</Title>
        <Line />
        <Desc>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido
        </Desc>
      </Texts>
      <ImageBox>
        <Image
          className="img"
          src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          layout="fill"
        />
      </ImageBox>
    </Container>
  );
}
