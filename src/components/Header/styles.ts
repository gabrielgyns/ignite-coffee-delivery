import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 104px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a img {
        width: 85px;
        height: 40px;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 10px;

        // ShoppingCart
        a {
            // Using display flex with align-items to keep the svg centered in the box (background color).
            display: flex;
            align-items: center;
            padding: 8px;
            border-radius: 6px;
            background-color: ${({ theme }) => theme["yellow-light"]};

            svg {
                color: ${({ theme }) => theme["yellow-dark"]};
            }
        }
    }
`;

export const Location = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    padding: 8px;
    border-radius: 6px;
    color: ${({ theme }) => theme["purple-dark"]};
    background-color: ${({ theme }) => theme["purple-light"]};

    svg {
        color: ${({ theme }) => theme["purple"]};
    }
`;
