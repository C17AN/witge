import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Textbutton = () => {
  return (
    <Container>
      WIN:  
      <span
        css={css`
          font-weight: 600;
        `}
      >
      4,954
      </span>
    </Container>
  );  
};

const Container = styled.div`
  display: inline-block;
  color: #666666;
  background-color: #FFFFFF;
  border: 1px solid #C8CFD8;
  font-size: 14px;
  padding: 0px 6px;
`;

export default Textbutton;