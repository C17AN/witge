import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import StarRating from "../../../common/StarRating";

type Props = {
  title: string;
  nickname: string;
  imgUrl: string;
  rating: number;
  date: string;
  description: string;
};

const ReviewListItem = ({
  title,
  imgUrl,
  nickname,
  rating,
  date,
  description,
}: Props) => {
  return (
    <div
      css={css`
        display: flex;
        font-size: 15px;
        font-weight: 300;
        margin-bottom: 25px;
      `}
    >
      <UserImage src={imgUrl} alt={nickname} />
      <>
        <StarRating rating={rating} />
        <div
          css={css`
            align-items: center;
            color: #1ce65f;
            font-weight: 700;
            margin-top: 3px;
            flex: 1;
          `}
        >
          {rating}
        </div>
      </>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex: 10;
        `}
      >
        <div
          css={css`
            display: flex;
            margin-bottom: 5px;
          `}
        >
          <div
            css={css`
              margin-right: 15px;
            `}
          >
            {nickname}
          </div>
          <div>{date}</div>
        </div>
        <div
          css={css`
            font-size: 20px;
            font-weight: 600;
            color: #244b94;
            margin-bottom: 5px;
          `}
        >
          {title}
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
};

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
`;
export default ReviewListItem;
