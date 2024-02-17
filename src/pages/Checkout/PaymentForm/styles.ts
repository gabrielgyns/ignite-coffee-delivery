import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const Container = styled.div`
    min-height: 207px;
    background-color: ${({ theme }) => theme["base-card"]};
    border-radius: 6px;
    padding: 40px;

    display: flex;
    flex-direction: column;
`;

export const Description = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;

    > svg {
        color: ${({ theme }) => theme.purple};
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

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`;

export const PaymentErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`;
