import { MouseEvent } from "react";
import { Trash } from "@phosphor-icons/react";
import InputNumber from "../../../components/Form/InputNumber";
import { useCart } from "../../../contexts/CartContext";
import Button from "../../../components/Form/Button";
import { formatMoney } from "../../../utils";
import { Actions, Container, SelectedCoffee, Total, TotalRow } from "./styles";
import { CoffeeType } from "../../../@types/Coffee";

const SelectedCoffees = () => {
    const { cart, addItemToCart, removeQuantity, removeItemFromCart, getCartTotal } = useCart();

    function handleRemoveItemFromCart(
        event: MouseEvent<HTMLButtonElement>,
        id: string,
    ) {
        event.preventDefault();
        removeItemFromCart(id);
    }

    return (
        <Container>
            <h3>Cafés Selecionados</h3>

            <div>
                {cart.length > 0 &&
                    cart.map((cartItem) => (
                        <SelectedCoffee key={cartItem.id}>
                            <div>
                                <img
                                    src={cartItem.image}
                                    alt={cartItem.title}
                                />
                                <Actions>
                                    <p>{cartItem.title}</p>
                                    <div>
                                        <InputNumber
                                            quantity={cartItem.quantity}
                                            incrementQuantity={() =>
                                                addItemToCart(cartItem)
                                            }
                                            decrementQuantity={() =>
                                                removeQuantity(cartItem)
                                            }
                                        />
                                        <button
                                            onClick={(e) =>
                                                handleRemoveItemFromCart(
                                                    e,
                                                    cartItem.id,
                                                )
                                            }
                                        >
                                            <Trash /> Remover
                                        </button>
                                    </div>
                                </Actions>
                            </div>

                            <span>{formatMoney(cartItem.price)}</span>
                        </SelectedCoffee>
                    ))}

                <Total>
                    <TotalRow>
                        <span>Total de itens</span>
                        <span>{formatMoney(getCartTotal())}</span>
                    </TotalRow>
                    <TotalRow>
                        <span>Entrega</span>
                        <span>R$ 3,50</span>
                    </TotalRow>
                    <TotalRow>
                        <span>Total</span>
                        <span>{formatMoney(getCartTotal() + 3.5)}</span>
                    </TotalRow>
                </Total>

                <Button
                    label="Confirmar Pedidos"
                    variant="secondary"
                    type="submit"
                    form="order"
                />
            </div>
        </Container>
    );
};

export default SelectedCoffees;
