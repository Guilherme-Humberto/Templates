import { Container, NavBarLinks, IconMenu } from "./styles";

export default function NavBar({ elementRef }) {
  
  return (
    <>
      <Container elementRef={elementRef}>
        <p>Colima</p>
        <IconMenu />
        <NavBarLinks className="linkContainer">
          <a href="">Sobre</a>
          <a href="">Nossos Instrutores</a>
          <a href="">Aulas</a>
          <button>Reserve uma aula</button>
        </NavBarLinks>
      </Container>
    </>
  );
}
