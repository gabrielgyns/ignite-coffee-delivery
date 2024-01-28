import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CardContainer = styled.div`
    width: 256px;
    height: 310px;
    border-radius: 6px 36px;
    background-color: ${({ theme }) => theme["base-card"]};

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
        width: 120px;
        height: 120px;
        margin-top: -16px;
    }

    > h3 {
        ${mixins.fonts.titleS}
        color: ${({ theme }) => theme["base-subtitle"]};
    }

    > p {
        ${mixins.fonts.textS}
        color: ${({ theme }) => theme["base-label"]};
        margin: 8px 0 33px;
        padding: 0 20px;
    }
`;

export const Labels = styled.div`
    display: flex;
    gap: 4px;

    > span {
        ${mixins.fonts.tag}
        text-transform: uppercase;
        color: ${({ theme }) => theme["yellow-dark"]};
        background-color: ${({ theme }) => theme["yellow-light"]};
        padding: 4px 8px;
        border-radius: 100px;
        margin: 12px 0 16px;
    }
`;

export const PricingRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`;

export const Price = styled.div`
    ${mixins.fonts.titleM}
    color: ${({ theme }) => theme["base-text"]};

    span {
        ${mixins.fonts.textS}
        margin-right: 4px;
    }
`;

export const PricingRowActions = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    > div {
        height: 38px;
    }

    > button {
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        color: ${({ theme }) => theme.white};
        background-color: ${({ theme }) => theme["purple-dark"]};

        transition: opacity 0.2s;
        
        &:hover {
            opacity: 70%;
        }
    }
`;
