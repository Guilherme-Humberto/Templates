import Image from "next/image";
import {
  Container,
  Header,
  ImageBox,
  Texts,
  AboutClass,
} from "../../../styles/Class/styles";
import NavBar from "../../components/NavBar/index";

export default function ClassPage() {
  return (
    <Container>
      <NavBar />
      <Header>
        <ImageBox>
          <Image
            src="https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            layout="fill"
            className="img"
            objectPosition="center"
            objectFit="cover"
          />
          <Texts>
            <p>Nossas Aulas</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              sapiente temporibus sit ab modi quo necessitatibus at ipsa
              voluptatem tenetur.
            </p>
          </Texts>
        </ImageBox>
      </Header>

      <AboutClass>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quia, non rerum ipsum porro vitae inventore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsam
          beatae nam, sapiente eum eligendi odio quae molestias doloremque
          minima provident ducimus vero, consequatur blanditiis deserunt fuga
          accusamus vel! Dignissimos tempora quasi minus ad reprehenderit.
        </p>
      </AboutClass>
      
      <AboutClass secundary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          autem repudiandae omnis. Excepturi, libero id ratione eos tenetur
          error. Perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsam
          beatae nam, sapiente eum eligendi odio quae molestias doloremque
          minima provident ducimus vero, consequatur blanditiis deserunt fuga
          accusamus vel! Dignissimos tempora quasi minus ad reprehenderit.
        </p>
      </AboutClass>
    </Container>
  );
}
