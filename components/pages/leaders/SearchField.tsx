import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

type Props = {};

const SearchField = (props: Props) => {
  return (
    <Container>
      <div
        css={css`
          margin-right: 32px;
        `}
      >
        <h2
          css={css`
            font-weight: 700;
            font-size: 48px;
          `}
        >
          Who Is My Leader?
        </h2>
        <p>당신이 원하는 리더를 찾아드립니다</p>
      </div>
      <SearchInput />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  background-color: rgb(30, 84, 240);
`;

const SearchInput = styled.input`
  border-radius: 24px;
  border: none;
  height: 48px;
  width: 400px;

  &:focus {
    outline: none;
  }
`;

export default SearchField;
