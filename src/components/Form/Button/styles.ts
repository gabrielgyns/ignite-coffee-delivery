import styled, { css } from "styled-components";
import { ButtonVariants } from ".";
import { mixins } from "../../../styles/mixins";

export const ButtonStyled = styled.button<{ variant: ButtonVariants }>`
    ${({ variant }) =>
        variant === "secondary" &&
        css`
            width: 100%;
            height: 100%;
            background-color: ${({ theme }) => theme.yellow};
            color: ${({ theme }) => theme.white};
            text-transform: uppercase;
            ${mixins.fonts.buttonG}
            border-radius: 6px;
            border: none;
            padding: 12px;
            transition: opacity 0.2s;

            &:hover {
                opacity: 0.7;
            }
        `}
`;
