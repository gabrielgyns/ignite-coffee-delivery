import { NavLink } from "react-router-dom";
import LogoCoffeeDelivery from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { CartQuantityItems, HeaderContainer, Location } from "./styles";
import { useCart } from "../../contexts/CartContext";

const Header = () => {
    const { cart } = useCart();

    const cartHasItems = cart.length > -1;
    const cartQuantityItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
        <HeaderContainer>
            <NavLink to="/" title="Home">
                <img src={LogoCoffeeDelivery} alt="Logo Coffee Delivery" />
            </NavLink>

            <nav>
                <Location>
                    <MapPin size={22} weight="fill" />
                    <span>Goiânia, GO</span>
                </Location>

                <NavLink to="checkout" title="Checkout">
                    <ShoppingCart size={22} weight="fill" />
                    {cartHasItems && <CartQuantityItems>{cartQuantityItems}</CartQuantityItems>}
                </NavLink>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
