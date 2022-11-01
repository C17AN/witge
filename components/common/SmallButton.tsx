import styled from "@emotion/styled";
import * as Icons from "react-icons/bs";

type IconType = "BsFillChatFill" | "BsBookmarkStarFill" | "BsShareFill";

interface Props {
    icon: IconType;
    value: string
}

const SmallButton = (props: Props) => {
    const Icon = Icons[props.icon];
    return (
        <Button><Icon/>{props.value}</Button>
    );
}

const Button = styled.button`
    display: inline-block;
    color: #A8B0BA;
    background-color: #FFFFFF;
    border: 1px solid #C8CFD8;
    border-radius: 30px;
    padding: 2px 6px;
    width: 120px;
    font-size: 15px;
`;

export default SmallButton;