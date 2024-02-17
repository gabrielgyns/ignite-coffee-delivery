import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CheckoutContainer = styled.form`
    width: 100%;
    display: flex;
    gap: 32px;
`;

export const CompleteOrder = styled.div`
    width: 100%;
    h3 {
        ${mixins.fonts.titleXS}
        color: ${({ theme }) => theme["base-subtitle"]};
        margin-bottom: 15px;
    }
`;
