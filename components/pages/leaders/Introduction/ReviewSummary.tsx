import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import StarRating from "../../../common/StarRating";
import RatingChart from "./RatingChart";

type Props = {};

const ReviewSummary = (props: Props) => {
  return (
    <Container>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={css`
              font-size: 15px;
              margin-right: 24px;
            `}
          >
            참여자 총 평점
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <StarRating rating={5} />
            <div>
              <span
                css={css`
                  color: #1ce65f;
                  font-weight: 700;
                `}
              >
                4.5{" "}
              </span>
              / 5
            </div>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={css`
              font-size: 15px;
              margin-right: 24px;
            `}
          >
            전체 리뷰 수
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-top: 30px;
            `}
          >
            <div
              css={css`
                color: #1ce65f;
                font-weight: 700;
                font-size: 24px;
              `}
            >
              54
            </div>
            <p
              css={css`
                font-size: 12px;
              `}
            >
              (최근 리뷰 : 2022.09.13)
            </p>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={css`
              font-size: 15px;
              margin-right: 24px;
            `}
          >
            평점 비율
          </div>
          <RatingChart ratingCount={[65, 59, 80, 81, 56]}></RatingChart>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 180px;
  background-color: rgb(246, 247, 250);
  padding: 32px 24px;
  border-radius: 10px;
`;

export default ReviewSummary;
