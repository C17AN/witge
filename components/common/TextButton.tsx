import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface TextButtonProps {
  title: string;
  text: string | number;
}

const Textbutton = ({ title, text }: TextButtonProps) => {
  return (
    <Container>
      {title}
      <span
        css={css`
          font-weight: 600;
        `}
      >
        {text}
      </span>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  color: #666666;
  background-color: #ffffff;
  border: 1px solid #c8cfd8;
  font-size: 14px;
  padding: 0px 6px;
  margin-right: 5px;
  border-radius: 5px;
`;

export default Textbutton;
