import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'next/image';
import { css } from "@emotion/react";
import SmallButton from "../common/SmallButton"

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark"
      css={css`
          background-color: #030318 !important;
          font-size: 18px !important;
      `}
    >
      <Nav
        css={css`
          justify-content: space-between !important;
          width: 100%;
          padding: 0 15vw;
          a, button {
            margin: auto 0;
          }
        `}
      >
        <Link href="/" passHref>
          <Navbar.Brand href="#home"
            css={css`
              margin: 0 !important;
              flex: 1;
            `}
          >
            <Image src="/logo.svg" alt="witg logo" width={130} height={45}/>
          </Navbar.Brand>
        </Link>
        <div
          css={css`
            display: flex;
            justify-content: space-between !important;
            flex: 2;
          `}
        >
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
          <SmallButton icon="BsLock" value="LOGIN" theme="none"/>
        </div>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
