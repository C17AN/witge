import React from "react";
import { Slot } from "../../../types/slot";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const PartySlotItem = ({
  thumbnailUrl,
  author,
  author_id,
  description,
}: Slot) => {
  return (
    <Container>
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-bottom: 18px;
        `}
      >
        <img
          src={thumbnailUrl}
          alt={author}
          css={css`
            width: 64px;
            height: 64px;
            border-radius: 50%;
            margin-right: 12px;
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              font-weight: 700;
              font-size: 20px;
            `}
          >
            {author}
          </div>
          <div
            css={css`
              color: purple;
            `}
          >
            {author_id}
          </div>
        </div>
      </div>
      <div
        css={css`
          max-width: 300px;
        `}
      >
        {description}
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.15);
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin: 48px 0;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export default PartySlotItem;
