import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormInputs } from "..";
import { Radio } from "../../../components/Form/Radio";
import { Container, Description, PaymentErrorMessage, PaymentOptions } from "./styles";

type PaymentFormProps = {
    formRegister: UseFormRegister<FormInputs>;
    selectedPaymentMethod: "credit" | "debit" | "cash";
    errors: FieldErrors<FormInputs>;
}

const PaymentForm = ({ formRegister, selectedPaymentMethod, errors }: PaymentFormProps) => {
    return (
        <Container>
            <Description>
                <CurrencyDollar />
                <div>
                    <h3>Pagamento</h3>
                    <p>
                        O pagamento é feito na entrega. Escolha a forma que
                        deseja pagar
                    </p>
                </div>
            </Description>

            <PaymentOptions>
                <div>
                    <Radio
                        isSelected={selectedPaymentMethod === "credit"}
                        {...formRegister("paymentMethod")}
                        value="credit"
                    >
                        <CreditCard size={16} />
                        <span>Cartão de crédito</span>
                    </Radio>

                    <Radio
                        isSelected={selectedPaymentMethod === "debit"}
                        {...formRegister("paymentMethod")}
                        value="debit"
                    >
                        <Bank size={16} />
                        <span>Cartão de débito</span>
                    </Radio>

                    <Radio
                        isSelected={selectedPaymentMethod === "cash"}
                        {...formRegister("paymentMethod")}
                        value="cash"
                    >
                        <Money size={16} />
                        <span>Dinheiro</span>
                    </Radio>
                </div>

                {errors.paymentMethod ? (
                    <PaymentErrorMessage role="alert">
                        {errors.paymentMethod.message}
                    </PaymentErrorMessage>
                ) : null}
            </PaymentOptions>
        </Container>
    );
}

export default PaymentForm;