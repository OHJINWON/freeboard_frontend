import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./BoardWrite.types";

export const Button = styled.button`
    background-color: ${(props:ISubmitButtonProps) => 
        props.isActive ? "rgba(255, 214, 0, 1)" : "none"};
    width: 179px;
    height: 52px;
    padding: 14px 60px;
    font-weight: 500;
    line-height: 23.68px;
    border: none;
`