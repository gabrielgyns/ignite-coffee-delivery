import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 80px;

    > img {
        margin-top: 110px;
    }
`;

export const Info = styled.div`
    h2 {
        ${mixins.fonts.titleL}
        color: ${({ theme }) => theme["yellow-dark"]};
    }

    > span {
        ${mixins.fonts.textL}
        color: ${({ theme }) => theme["base-subtitle"]};
    }

`;

export const Details = styled.div`
    margin-top: 40px;
    border: 1px solid;
    border-radius: 6px 36px;
    width: 100%;

    border-color: transparent;
    background-origin: border-box;
    background-image: ${({ theme }) =>
        `linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})`};

    > section {
        padding: 40px;
        border-radius: 6px 36px;
        background-color: ${({ theme }) => theme.background};

        div + div {
            margin-top: 32px;
        }

        > div {
            display: flex;
            align-items: center;
            gap: 12px;

            > svg {
                padding: 8px;
                border-radius: 50%;
            }

            span p {
                ${mixins.fonts.textM}
                color: ${({ theme }) => theme["base-text"]};
            }
        }
    }
`;
