import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import SuccessMotoboy from '../../assets/SuccessMotoboy.png';
import { Container, Details, Info } from "./styles";

const Success = () => {
    const theme = useTheme();

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
                                Entrega em <b>Rua Jhon Doe, 102</b>
                            </p>
                            <p>Bairro - Cidade, GO</p>
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
                            style={{ backgroundColor: theme["yellow-dark"] }}
                            size={32}
                        />
                        <span>
                            <p>Pagamento na entrega</p>
                            <p>
                                <b>Cartão de Crédito</b>
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
}

export default Success;
