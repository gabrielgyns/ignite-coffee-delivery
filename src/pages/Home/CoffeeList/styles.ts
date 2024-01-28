import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const CoffeeListContainer = styled.div`
    h2 {
        ${mixins.fonts.titleL}
        color: ${({ theme }) => theme["base-subtitle"]};
        margin-bottom: 54px;
    }

    > div {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
    }
`;
