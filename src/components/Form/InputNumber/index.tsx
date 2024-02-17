import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "./styles";
import { FormEvent, MouseEvent } from "react";

type InputNumberProps = {
    quantity: number
    incrementQuantity: () => void
    decrementQuantity: () => void
  }

const InputNumber = ({
    quantity,
    incrementQuantity,
    decrementQuantity,
}: InputNumberProps) => {
    function handleIncrement(event: FormEvent<HTMLButtonElement>) {
        event.preventDefault();
        incrementQuantity();
    }

    function handleDecrement(event: FormEvent<HTMLButtonElement>) {
        event.preventDefault();
        decrementQuantity();
    }

    return (
        <Container>
            <button onClick={handleDecrement}>
                <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>
                <Plus size={14} />
            </button>
        </Container>
    );
};

export default InputNumber;