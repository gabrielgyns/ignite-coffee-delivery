import { useState } from 'react';
import InputNumber from '../Form/InputNumber';
import { CardContainer, Labels, Price, PricingRow, PricingRowActions } from "./styles";
import { ShoppingCart } from '@phosphor-icons/react';
import { useCart } from '../../contexts/CartContext';
import { CoffeeType } from '../../@types/Coffee';

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
                {tags.map(tag => (<span>{tag}</span>))}
            </Labels>

            <h3>{title}</h3>

            <p>{description}</p>

            <PricingRow>
                <Price>
                    <span>R$</span>
                    {price}
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