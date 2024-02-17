import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import SuccessMotoboy from "../../assets/SuccessMotoboy.png";
import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { Container, Details, Info } from "./styles";

const Success = () => {
    const theme = useTheme();
    const { orders } = useCart();
    const { orderId } = useParams();
    const orderInfo = orders.find((order) => Number(order.id) === Number(orderId));
    const paymentMethod = {
        credit: "Cartão de crédito",
        debit: "Cartão de débito",
        cash: "Dinheiro",
    };

    if (!orderInfo?.id) {
        return null;
    }

    console.log(orderId, orders, orderInfo);

    return (
        <Container>
            <Info>
                <h2>Uhu! Pedido confirmado</h2>
                <span>
                    Agora é só aguardar que logo o café chegará até você
                </span>

                <Details>
                    <section>
                        <div>
                            <MapPin
                                color={theme.white}
                                style={{ backgroundColor: theme.purple }}
                                size={32}
                            />
                            <span>
                                <p>
                                    Entrega em <b>{orderInfo?.rua}</b>
                                </p>
                                <p>
                                    {orderInfo?.bairro} - {orderInfo?.cidade},{" "}
                                    {orderInfo?.uf}
                                </p>
                            </span>
                        </div>

                        <div>
                            <Timer
                                color={theme.white}
                                style={{ backgroundColor: theme.yellow }}
                                size={32}
                            />
                            <span>
                                <p>Previsão de entrega</p>
                                <p>
                                    <b>20 min - 30 min</b>
                                </p>
                            </span>
                        </div>

                        <div>
                            <CurrencyDollar
                                color={theme.white}
                                style={{
                                    backgroundColor: theme["yellow-dark"],
                                }}
                                size={32}
                            />
                            <span>
                                <p>Pagamento na entrega</p>
                                <p>
                                    <b>
                                        {
                                            paymentMethod[
                                                orderInfo?.paymentMethod
                                            ]
                                        }
                                    </b>
                                </p>
                            </span>
                        </div>
                    </section>
                </Details>
            </Info>

            <img
                src={SuccessMotoboy}
                alt="A guy delivery the coffee by motorcycle"
            />
        </Container>
    );
};

export default Success;
