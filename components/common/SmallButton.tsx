import styled from "@emotion/styled";
import * as Icons from "react-icons/bs";
import { css } from "@emotion/react";

type IconType =
  | "BsFillChatFill"
  | "BsBookmarkStarFill"
  | "BsShareFill"
  | "BsLock";

interface Props {
  icon: IconType;
  value: string;
  theme: string;
}

interface buttonThemeType {
  [key: string]: string;
}

const buttonTheme: buttonThemeType = {
  none: `
        color: #22BA73;
        background-color: transparent;
        border: 1px solid #C8CFD8;
        svg {
            fill: #FFFFFF;
        }
    `,
  light: `
        color: #A8B0BA;
        background-color: #FFFFFF;
        border: 1px solid #C8CFD8;
    `,
  gradation: `
        color: #FFFFFF;
        background: linear-gradient(270deg, #2AF498 6.77%, #00CCFF 53.65%, #0078FF 100%);
        box-shadow: inset -6px -9px 10px rgba(0, 0, 0, 0.1);
        border: none;
    `,
};

const SmallButton = ({ icon, value, theme }: Props) => {
  const Icon = Icons[icon];
  return (
    <Button
      css={css`
        ${buttonTheme[theme]}
      `}
    >
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#2AF498" offset="-9.99%" />
          <stop stopColor="#00CCFF" offset="35.15%" />
          <stop stopColor="#0078FF" offset="83.21%" />
        </linearGradient>
      </svg>
      <Icon
        css={css`
          margin-right: 10px;
        `}
        style={theme === "light" ? { fill: "url(#blue-gradient)" } : undefined}
      />
      {value}
    </Button>
  );
};

const Button = styled.button`
  display: inline-block;
  border-radius: 30px;
  padding: 5px 6px;
  width: 120px;
  font-size: 15px;
  margin: 10px 0;
`;

export default SmallButton;
