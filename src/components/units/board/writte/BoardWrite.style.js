import styled from "@emotion/styled";

export const Button = styled.button`
    background-color: ${(props) => props.name && props.title && props.content && props.password ? "rgba(255, 214, 0, 1)" : ""};
    width: 179px;
    height: 52px;
    padding: 14px 60px;
    font-weight: 500;
    line-height: 23.68px;
    border: none;
`