import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsSliders } from "react-icons/bs";

type Props = {};

const SearchField = (props: Props) => {
  return (
    <Container>
      <div
        css={css`
          margin-right: 32px;
          color: #FFFFFF;
        `}
      >
        <span
          css={css`
            font-weight: 600;
            font-size: 42px;
          `}
        >
          <span css={css`color: #4AFFAB;`}>WHO</span> IS MY LEADER?
        </span>
        <p 
          css={css`
            margin-top: -0.5rem;
            margin-bottom: 0;
            font-weight: 300;
            font-size: 18px;
          `}
        >
          당신이 원하는 리더를 찾아드립니다
        </p>
      </div>
      <SearchInputWrapper>
        <SearchInput />
          <FaSearch size={25} css={css`fill: #3E3ED4;`}/>
      </SearchInputWrapper>
      <Slider>
        <BsSliders style = {{transform: 'rotate(270deg)', margin: 'auto'} } size={30} css={css`fill: #FFFFFF;`}/>
      </Slider>
    </Container>
  );
};

const Container = styled.div`
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

const SearchInputWrapper = styled.div`
  border-radius: 24px;
  border: none;
  background-color: #FFFFFF;
  height: 48px;
  width: 400px;
`;

const SearchInput = styled.input`
  border: none;
  height: 48px;
  width: 350px;
  background-color: transparent;
  color: #000000;
  padding: 0 20px;
  &:focus {
    outline: none;
  }
`;

const Slider = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-left: 15px;
  background: #3E3ED4;
  box-shadow: 2.6px 4.3px 5px rgba(62, 62, 212, 0.2);
`;

export default SearchField;
