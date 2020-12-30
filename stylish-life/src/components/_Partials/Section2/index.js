import Image from "next/image";
import {
  Container,
  Title,
  Card,
  ImageBox,
  BoxCards,
  DateText,
  TitleCard,
  Line,
  SubjectProduct,
} from "./styles";

export default function Section2() {
  return (
    <Container>
      <Title>Tudo em "comidas e bebidas"</Title>

      <BoxCards>
        <Card>
          <ImageBox>
            <Image
              className="img"
              src="https://images.pexels.com/photos/5945630/pexels-photo-5945630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              layout="fill"
            />
          </ImageBox>
          <DateText>Feb/10</DateText>
          <TitleCard>Lorem Ipsum é simplesmente</TitleCard>
          <Line />
          <SubjectProduct>Comidas e Bebidas</SubjectProduct>
        </Card>
        <Card>
          <ImageBox>
            <Image
              className="img"
              src="https://images.pexels.com/photos/5945603/pexels-photo-5945603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              layout="fill"
            />
          </ImageBox>
          <DateText>Feb/10</DateText>
          <TitleCard>Lorem Ipsum é simplesmente</TitleCard>
          <Line />
          <SubjectProduct>Comidas e Bebidas</SubjectProduct>
        </Card>
        <Card>
          <ImageBox>
            <Image
              className="img"
              src="https://images.pexels.com/photos/916925/pexels-photo-916925.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              layout="fill"
            />
          </ImageBox>
          <DateText>Feb/10</DateText>
          <TitleCard>Lorem Ipsum é simplesmente</TitleCard>
          <Line />
          <SubjectProduct>Comidas e Bebidas</SubjectProduct>
        </Card>
        <Card>
          <ImageBox>
            <Image
              className="img"
              src="https://images.pexels.com/photos/2862154/pexels-photo-2862154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              layout="fill"
            />
          </ImageBox>
          <DateText>Feb/10</DateText>
          <TitleCard>Lorem Ipsum é simplesmente</TitleCard>
          <Line />
          <SubjectProduct>Comidas e Bebidas</SubjectProduct>
        </Card>

        <Card>
          <ImageBox>
            <Image
              className="img"
              src="https://images.pexels.com/photos/949069/pexels-photo-949069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              layout="fill"
            />
          </ImageBox>
          <DateText>Feb/10</DateText>
          <TitleCard>Lorem Ipsum é simplesmente</TitleCard>
          <Line />
          <SubjectProduct>Comidas e Bebidas</SubjectProduct>
        </Card>
        <Card>
          <ImageBox>
            <Image
              className="img"
              src="https://images.pexels.com/photos/4113831/pexels-photo-4113831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              layout="fill"
            />
          </ImageBox>
          <DateText>Feb/10</DateText>
          <TitleCard>Lorem Ipsum é simplesmente</TitleCard>
          <Line />
          <SubjectProduct>Comidas e Bebidas</SubjectProduct>
        </Card>
        <Card>
          <ImageBox>
            <Image
              className="img"
              src="https://images.pexels.com/photos/4021695/pexels-photo-4021695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              layout="fill"
            />
          </ImageBox>
          <DateText>Feb/10</DateText>
          <TitleCard>Lorem Ipsum é simplesmente</TitleCard>
          <Line />
          <SubjectProduct>Comidas e Bebidas</SubjectProduct>
        </Card>
        <Card>
          <ImageBox>
            <Image
              className="img"
              src="https://images.pexels.com/photos/4397748/pexels-photo-4397748.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              layout="fill"
            />
          </ImageBox>
          <DateText>Feb/10</DateText>
          <TitleCard>Lorem Ipsum é simplesmente</TitleCard>
          <Line />
          <SubjectProduct>Comidas e Bebidas</SubjectProduct>
        </Card>
      </BoxCards>
    </Container>
  );
}
