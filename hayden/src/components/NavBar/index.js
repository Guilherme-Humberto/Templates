import { Container, NavBarLinks, IconMenu } from "./styles";

export default function NavBar({ elementRef }) {
  
  return (
    <>
      <Container elementRef={elementRef}>
        <p>Hyden</p>
        <IconMenu />
        <NavBarLinks>
          <a href="">Trabalhos</a>
          <a href="">Quem somos</a>
          <a href="">Blog</a>
          <button>Contate-nos</button>
        </NavBarLinks>
      </Container>
    </>
  );
}
