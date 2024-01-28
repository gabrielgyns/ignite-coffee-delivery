import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "./styles";

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
    return (
        <Container>
            <button onClick={decrementQuantity}>
                <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
                <Plus size={14} />
            </button>
        </Container>
    );
};

export default InputNumber;