import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 8px;

    border-radius: 6px;
    background-color: ${({ theme }) => theme["base-button"]};

    > span {
        ${mixins.fonts.textM}
        color: ${({ theme }) => theme["base-title"]};
        width: 30px;
    }

    > button {
        display: flex;
        background: none;
        color: ${({ theme }) => theme.purple};

        transition: opacity .2s;

        &:hover {
            opacity: 60%;
        }
    }
`;
