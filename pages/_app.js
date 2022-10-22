import "../styles/globals.css";
import "../styles/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import styled from "@emotion/styled";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
      <Footer />
    </>
  );
}

const ContentWrapper = styled.div``;

export default MyApp;
