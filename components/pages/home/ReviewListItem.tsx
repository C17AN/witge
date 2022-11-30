import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import StarRating from "../../common/StarRating";

const ReviewListItem = ({
  leaderName,
  userName,
  ratio,
  title,
  content,
}: ReviewListResopnseData) => {
  return (
    <Container>
      <div
        css={css`
          font-size: 18px;
          border-bottom: 1px solid #a0a0a0;
        `}
      >
        <span>{userName} 님</span>
        <span
          css={css`
            font-weight: 100;
          `}
        >
          {" "}
          ({leaderName} 리더님)
        </span>
      </div>
      <StarRating rating={ratio} />
      <span
        css={css`
          font-size: 22px;
          font-weight: 600;
          color: #244b94;
        `}
      >
        {title}
      </span>
      <span
        css={css`
          font-size: 14px;
          font-weight: 400;
          color: #333333;
        `}
      >
        {content}
      </span>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.15);
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export default ReviewListItem;
