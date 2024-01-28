import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Banner = styled.section`
    img#banner-bg {
        position: absolute;
        top: 104px; // 104px = header height
        left: 0;
        max-height: 544px;
        width: 100vw;
        object-fit: cover;
        filter: blur(80px);
    }
`;

export const BannerContent = styled.div`
    width: 100%;
    padding: 94px 0;

    display: flex;
    gap: 56px;

    img {
        width: 476px;
        height: 360px;
    }
`;

export const Heading = styled.div`
    h1 {
        ${mixins.fonts.titleXL}
        color: ${({ theme }) => theme["base-title"]};
    }

    span {
        ${mixins.fonts.textL}
        color: ${({ theme }) => theme["base-subtitle"]};
    }
`;

export const Info = styled.div`
    margin-top: 66px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;

    > div {
        display: flex;
        align-items: center;
        gap: 12px;

        svg {
            padding: 8px;
            border-radius: 50%;
        }

        span {
            ${mixins.fonts.textM}
            color: ${({ theme }) => theme["base-text"]};
        }
    }
`;
