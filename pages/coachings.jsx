import React from "react";
import Breadcrumb from "components/common/Breadcrumb";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const coachings = () => {
  return (
    <div>
      <TopBanner>
        <div
          css={css`
            margin-right: 32px;
            color: #ffffff;
          `}
        >
          <span
            css={css`
              font-weight: 600;
              font-size: 42px;
            `}
          >
            <span
              css={css`
                margin-right: 12px;
              `}
            >
              PERSONALIZED COACHING
            </span>
            <span
              css={css`
                color: #4affab;
              `}
            >
              FOR ME!
            </span>
          </span>
          <p
            css={css`
              margin-top: -0.5rem;
              margin-bottom: 0;
              font-weight: 300;
              font-size: 18px;
            `}
          >
            나와의 매칭력 99%! 내게 꼭 맞는 맞춤 코치를 만나 보세요.
          </p>
        </div>
      </TopBanner>
      <Breadcrumb
        currentPagePath="/"
        currentPageTitle="맞춤 코칭"
        pageDescription="코칭을 원하는 수강생의 목표와 스타일을 입력하여 자신에게 어울리는 리더를 추천받을 수 있습니다."
      />
      <Container>
        <Content></Content>
      </Container>
    </div>
  );
};

const TopBanner = styled.div`
  height: 160px;
  background-image: url(/title.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start !important;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 15vw;
  background-color: rgb(30, 84, 240);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(234, 239, 246);
`;

const Content = styled.div`
  padding: 32px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.15);
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: 48px;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 960px;
  height: 800px;

  &:last-of-type {
    margin-bottom: 48px;
  }
`;

export default coachings;
