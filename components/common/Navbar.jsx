import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Link href="/" passHref>
            <Navbar.Brand href="#home">WitG</Navbar.Brand>
          </Link>
          <Link href="/parties" passHref>
            <Nav.Link>파티 참여</Nav.Link>
          </Link>
          <Link href="/leaders" passHref>
            <Nav.Link>리더 찾기</Nav.Link>
          </Link>
          <Link href="/coachings" passHref>
            <Nav.Link>맞춤 코칭</Nav.Link>
          </Link>
          <Link href="/inquiries" passHref>
            <Nav.Link>1:1 문의</Nav.Link>
          </Link>
          <Link href="/apply" passHref>
            <Nav.Link>리더 지원</Nav.Link>
          </Link>
          <button>LOGIN</button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
