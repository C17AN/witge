import styled from "@emotion/styled";
import * as Icons from "react-icons/bs";
import { css } from "@emotion/react";

type IconType = "BsFillChatFill" | "BsBookmarkStarFill" | "BsShareFill" | "BsLock";

interface Props {
    icon: IconType;
    value: string;
    theme: string;
}

interface buttonThemeType {
    [key: string]: string;
}

const buttonTheme: buttonThemeType = {
    none : `
        color: #22BA73;
        background-color: transparent;
        border: 1px solid #C8CFD8;
        svg {
            fill: #FFFFFF;
        }
    `,
    light : `
        color: #A8B0BA;
        background-color: transparent;
        border: 1px solid #C8CFD8;
    `,
    gradation : `
        color: #FFFFFF;
        background: linear-gradient(270deg, #2AF498 6.77%, #00CCFF 53.65%, #0078FF 100%);
        box-shadow: inset -6px -9px 10px rgba(0, 0, 0, 0.1);
        border: none;
    `,
}

const SmallButton = ({icon, value, theme}: Props) => {
    const Icon = Icons[icon];
    return (
        <Button css={css`${buttonTheme[theme]}`}>
            <Icon/>
            {value}
        </Button>
    );
}

const Button = styled.button`
    display: inline-block;
    border-radius: 30px;
    padding: 5px 6px;
    width: 120px;
    font-size: 15px;
`;

export default SmallButton;