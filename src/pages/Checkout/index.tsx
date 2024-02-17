import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import SelectedCoffees from "./SelectedCoffees";
import { CheckoutContainer, CompleteOrder } from "./styles";

export type FormInputs = {
    cep: number;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    paymentMethod: "credit" | "debit" | "cash";
};

const newOrder = z.object({
    cep: z.number({ invalid_type_error: "Informe o CEP" }),
    rua: z.string().min(1, "Informe a rua"),
    numero: z.string().min(1, "Informe o número"),
    complemento: z.string(),
    bairro: z.string().min(1, "Informe o bairro"),
    cidade: z.string().min(1, "Informe a cidade"),
    uf: z.string().min(1, "Informe a UF"),
    paymentMethod: z.enum(["credit", "debit", "cash"], {
        invalid_type_error: "Informe um método de pagamento",
    }),
});

export type OrderInfo = z.infer<typeof newOrder>;

const Checkout = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: zodResolver(newOrder),
    });

    const selectedPaymentMethod = watch('paymentMethod');

    const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
        // if (cart.length === 0) {
        //   return alert('É preciso ter pelo menos um item no carrinho')
        // }
    
        // checkout(data)
        console.log('GSS', data)
      }

    return (
        <CheckoutContainer id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
            <CompleteOrder>
                <h3>Complete seu pedido</h3>
                <AddressForm formRegister={register} errors={errors} />
                <PaymentForm formRegister={register} selectedPaymentMethod={selectedPaymentMethod} errors={errors} />
            </CompleteOrder>

            <SelectedCoffees />
        </CheckoutContainer>
    );
};

export default Checkout;
