import { useState } from 'react';
import InputNumber from '../Form/InputNumber';
import { ShoppingCart } from '@phosphor-icons/react';
import { useCart } from '../../contexts/CartContext';
import { formatMoney } from '../../utils';
import { CoffeeType } from '../../@types/Coffee';
import { CardContainer, Labels, Price, PricingRow, PricingRowActions } from "./styles";

type CardProps = CoffeeType;

const Card = ({
    id,
    title,
    description,
    tags,
    price,
    image
}: CardProps) => {
    const [quantity, setQuantity] = useState(0);

    const { addItemToCart } = useCart();

    const handleIncrementQuantity = () => setQuantity(quantity + 1);

    const handleDecrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    };

    function handleAddItemToCart() {
        addItemToCart({
            id,
            title,
            description,
            tags,
            price,
            image
        }, quantity);
        setQuantity(0);
    };

    return (
        <CardContainer>
            <img src={image} alt={title} />

            <Labels>
                {tags.map(tag => (<span key={tag}>{tag}</span>))}
            </Labels>

            <h3>{title}</h3>

            <p>{description}</p>

            <PricingRow>
                <Price>
                    <span>R$</span>
                    {formatMoney(price, false)}
                </Price>

                <PricingRowActions>
                    <InputNumber
                        quantity={quantity}
                        incrementQuantity={handleIncrementQuantity}
                        decrementQuantity={handleDecrementQuantity}
                    />
                    <button onClick={handleAddItemToCart}>
                        <ShoppingCart size={22} weight='fill' />
                    </button>
                </PricingRowActions>
            </PricingRow>
        </CardContainer>
    );
}

export default Card;