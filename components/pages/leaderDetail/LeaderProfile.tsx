import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { Leader } from "../../../types/leader";
import StarRating from "../../common/StarRating";
import Textbutton from "../../common/TextButton";
import Link from "next/link";
import { FaRegHandPointer } from "react-icons/fa";
import SmallButton from "../../common/SmallButton";

type Props = {};

const LeaderProfile = ({
  id,
  userName,
  realName,
  phone,
  email,
  birthDate,
  gender,
  nickname,
  brand,
  branch,
  room,
  seatNumber,
  profileImgUrl,
  location,
  status,
  lastLoginAt,
  school,
  rank,
  groupList,
  darkMode,
}: LeaderResopnseData) => {
  return (
    <Container>
      <div
        css={css`
          display: flex;
        `}
      >
        <ProfileImage
          src={
            "http://file.mk.co.kr/meet/neds/2022/04/image_readtop_2022_330983_16498273855008255.jpg"
          }
          alt={realName}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-right: 200px;
          `}
        >
          <p
            css={css`
              font-size: 20px;
              font-weight: 700;
              color: #3e3ed4;
            `}
          >
            Lv. {4}
          </p>
          <p
            css={css`
              font-size: 24px;
              font-weight: 700;
            `}
          >
            {realName}
          </p>
          <p
            css={css`
              text-align: left;
              font-size: 15px;
              color: #3a3ac7;
            `}
          >
            {nickname}
          </p>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <>
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
                  margin-right: 50px;
                `}
              >
                <div
                  css={css`
                    margin-bottom: 4px;
                  `}
                >
                  <StarRating rating={4.5} />
                </div>
                <span
                  css={css`
                    color: #1ce65f;
                    margin: 0;
                    font-weight: 600;
                    margin-left: 4px;
                  `}
                >
                  {4.5}
                </span>
              </div>
            </>
            <>
              <span
                css={css`
                  margin-right: 4px;
                `}
              >
                누적 파티원 : {12} 명
              </span>
            </>
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <>
              <span
                css={css`
                  margin-right: 4px;
                `}
              >
                누적후기 :
              </span>
              <div
                css={css`
                  color: #3e3ed4;
                  margin-right: 50px;
                `}
              >
                {13}
                <Link href="/review">
                  <a
                    css={css`
                      all: unset;
                      cursor: pointer;
                    `}
                  >
                    (후기바로가기
                    <FaRegHandPointer
                      css={css`
                        transform: rotate(90deg);
                      `}
                    />
                    )
                  </a>
                </Link>
              </div>
            </>
            <>
              <span
                css={css`
                  margin-right: 4px;
                `}
              >
                누적 수강생 : {324} 명
              </span>
            </>
          </div>
          {/* <div
            css={css`
              margin-top: 10px;
            `}
          >
            {Object.entries(summary).map(([title, text], i) => (
              <Textbutton
                key={i}
                title={title === "country" ? "" : `${title}: `}
                text={text}
              />
            ))}
          </div> */}
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
          `}
        >
          <SmallButton
            icon="BsFillChatFill"
            value="문의하기"
            theme="gradation"
          />
          <SmallButton
            icon="BsBookmarkStarFill"
            value="스크랩하기"
            theme="light"
          />
          <SmallButton icon="BsShareFill" value="공유하기" theme="light" />
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
