import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import LeaderList from "./LeaderList";

type Props = {};

const RecommendedLeader = (props: Props) => {
  return (
    <Container>
      <Content>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={css`
              font-weight: 700;
              font-size: 24px;
              color: rgb(47, 34, 202);
              margin-right: 20px;
            `}
          >
            추천 리더
          </div>
          <p
            css={css`
              margin-bottom: 0;
              font-size: 15px;
              color: rgb(174, 175, 178);
            `}
          >
            BEST LEADER FOR YOU
          </p>
        </div>
      </Content>
      <LeaderList />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  background-color: rgb(234, 239, 246);
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
`;

export default RecommendedLeader;
