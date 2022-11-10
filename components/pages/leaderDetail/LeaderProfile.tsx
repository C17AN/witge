import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { Leader } from "../../../types/leader";
import StarRating from "../../common/StarRating";
import Textbutton from "../../common/TextButton";

type Props = {};

const LeaderProfile = ({
  id,
  name,
  nickname,
  reviewCount,
  level,
  imageUrl,
  score,
  status,
}: Leader) => {
  return (
    <Container>
      <div
        css={css`
          display: flex;
        `}
      >
        <ProfileImage src={imageUrl} alt={name} />
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <p
            css={css`
              font-size: 20px;
              font-weight: 700;
              color: rgb(128, 125, 218);
            `}
          >
            LV. {level}
          </p>
          <p
            css={css`
              font-size: 24px;
              font-weight: 700;
            `}
          >
            {name}
          </p>
          <p
            css={css`
              text-align: left;
              font-size: 15px;
            `}
          >
            {nickname}
          </p>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <span
              css={css`
                margin-right: 4px;
              `}
            >
              평점 평균 :
            </span>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <div
                css={css`
                  margin-bottom: 4px;
                `}
              >
                <StarRating rating={score} />
              </div>
              <span
                css={css`
                  color: #1ce65f;
                  margin: 0;
                  font-weight: 600;
                  margin-left: 4px;
                `}
              >
                {score}
              </span>
            </div>
          </div>
        </div>
      </div>
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

  p {
    margin: 0;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 40px;
`;

export default LeaderProfile;
