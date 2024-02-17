import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Container = styled.label`
    border: ${({ theme }) => theme["base-button"]} 1px solid;
    background-color: ${({ theme }) => theme["base-input"]};
    border-radius: 4px;
    padding: 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: all 0.2s;

    &:focus-within {
        border-color: ${({ theme }) => theme["yellow-dark"]};
    }

    > input {
        background-color: transparent;
        border: none;
        outline: none;

        ${mixins.fonts.textS}
        color: ${({ theme }) => theme["base-text"]};
        width: 100%;

        &::placeholder {
            color: ${({ theme }) => theme["base-label"]};
        }
    }

    > span {
        ${mixins.fonts.textS};
        font-style: italic;
        padding-right: 12px;
        color: ${({ theme }) => theme["base-label"]};
    }
`;

export const ErrorMessage = styled.span`
    ${mixins.fonts.textXS};
    font-weight: 400;
    color: red;
`;
