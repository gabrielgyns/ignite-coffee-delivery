import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const Container = styled.div`
    > h3 {
        ${mixins.fonts.titleXS}
        color: ${({ theme }) => theme["base-subtitle"]};
    }

    > div {
        margin-top: 15px;
        width: 448px;
        background-color: ${({ theme }) => theme["base-card"]};
        border-radius: 6px 44px;
        padding: 40px;

        > button {
            height: 46px;
            margin-top: 24px;
        }
    }
`;

export const SelectedCoffee = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 24px;
    border-bottom: ${({ theme }) => theme["base-button"]} 1px solid;

    & + div {
        margin-top: 24px;
    }

    > div {
        display: flex;

        > img {
            width: 64px;
            height: 64px;
            margin-right: 20px;
        }
    }

    > span {
        ${mixins.fonts.textM}
        font-weight: bold;
        color: ${({ theme }) => theme["base-text"]};
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: column;

    > p {
        ${mixins.fonts.textM}
        color: ${({ theme }) => theme["base-subtitle"]};
    }

    > div {
        display: flex;
        gap: 8px;
        margin-top: 8px;
        height: 32px;


        > div {
            max-width: 75px;
        }

        button {
            width: 92px;
            border-radius: 6px;
            padding: 6.5px 8px;
            ${mixins.fonts.buttonM}
            text-transform: uppercase;
            color: ${({ theme }) => theme["base-text"]};
            background-color: ${({ theme }) => theme["base-button"]};

            display: flex;
            align-items: center;
            gap: 4px;

            > svg {
                color: ${({ theme }) => theme.purple};
            }
        }
    }
`;

export const Total = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;

    div:last-child { // I could pass a variable to the component, but to keep it simple just got the last child.
        ${mixins.fonts.textL}
        font-weight: bold;
        color: ${({ theme }) => theme["base-subtitle"]};
    }
`;

export const TotalRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mixins.fonts.textS}
    color: ${({ theme }) => theme["base-text"]};
`;
