import Link from 'next/link'
import { Container, NavBarLinks, IconMenu } from "./styles";

export default function NavBar() {
  
  return (
    <>
      <Container>
        <Link href="/">Colima</Link>
        <IconMenu />
        <NavBarLinks className="linkContainer">
          <Link href="About">Sobre</Link>
          <Link href="Instructors">Nossos Instrutores</Link>
          <Link href="ClassPage">Aulas</Link>
          <button>Reserve uma aula</button>
        </NavBarLinks>
      </Container>
    </>
  );
}
