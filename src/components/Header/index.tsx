import { NavLink } from "react-router-dom";
import LogoCoffeeDelivery from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { HeaderContainer, Location } from "./styles";

const Header = () => {
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
                </NavLink>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
