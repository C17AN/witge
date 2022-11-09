import Link from "next/link";
import { Breadcrumb as BootStrapBreadcrumb } from "react-bootstrap";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Breadcrumb = ({ currentPageTitle, currentPagePath, pageDescription }) => {
  return (
    <Container
      css={css`
        .breadcrumb {
          flex: 1;
          margin-bottom: 0;
          justify-content: space-around;

          p {
            margin-bottom: 0;
          }
        }
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <Link href="/" passHref>
          <BootStrapBreadcrumb.Item
            css={css`
              a {
                color: rgb(175, 175, 175) !important;
                font-weight: 700;
                text-decoration: none;
              }
            `}
          >
            홈
          </BootStrapBreadcrumb.Item>
        </Link>
        <Link href={currentPagePath} passHref>
          <BootStrapBreadcrumb.Item
            css={css`
              a {
                color: rgb(47, 34, 202) !important;
                font-weight: 700;
                text-decoration: none;
              }
            `}
          >
            {currentPageTitle}
          </BootStrapBreadcrumb.Item>
        </Link>
      </div>
      <p
        css={css`
          color: rgb(144, 144, 144) !important;
          font-weight: 300;
          text-decoration: none;
        `}
      >
        {pageDescription}
      </p>
    </Container>
  );
};

const Container = styled(BootStrapBreadcrumb)`
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
`;

export default Breadcrumb;
