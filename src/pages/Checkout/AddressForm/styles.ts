import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const Container = styled.div`
    min-height: 207px;
    background-color: ${({ theme }) => theme["base-card"]};
    border-radius: 6px;
    padding: 40px;

    display: flex;
    flex-direction: column;

    margin-bottom: 12px;
`;

export const Description = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;

    > svg {
        color: ${({ theme }) => theme["yellow-dark"]};
        height: 22px;
        width: 22px;
    }

    > div {
        margin-bottom: 32px;

        > h3 {
            ${mixins.fonts.textM}
            color: ${({ theme }) => theme["base-subtitle"]};
        }

        > p {
            ${mixins.fonts.textS}
            color: ${({ theme }) => theme["base-text"]};
        }
    }
`;

export const Form = styled.div`
    display: grid;
    grid-template-areas:
        "cep . ."
        "rua rua rua"
        "numero complemento complemento"
        "bairro cidade uf";
    grid-template-columns: 200px 1fr 60px;
    grid-gap: 16px 12px;
`;

export const Row = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 10px;
    width: 100%;
`;
