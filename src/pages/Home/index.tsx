import { useTheme } from 'styled-components';
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react';
import CoffeeDeliveryCup from '../../assets/CoffeeDeliveryCup.svg';
import BannerBackground from '../../assets/BannerBackground.svg';
import { Banner, BannerContent, Heading, Info } from "./styles";

const Home = () => {
    const theme = useTheme();

    return (
        <Banner>
            <BannerContent>
                <div>
                    <Heading>
                        <h1>
                            Encontre o café perfeito para qualquer hora do dia
                        </h1>
                        <span>
                            Com o Coffee Delivery você recebe seu café onde
                            estiver, a qualquer hora
                        </span>
                    </Heading>

                    <Info>
                        <div>
                            <ShoppingCart
                                size={32}
                                weight="fill"
                                color={theme.background}
                                style={{
                                    backgroundColor: theme["yellow-dark"],
                                }}
                            />
                            <span>Compra simples e segura</span>
                        </div>

                        <div>
                            <Package
                                size={32}
                                weight="fill"
                                color={theme.background}
                                style={{
                                    backgroundColor: theme["base-text"],
                                }}
                            />
                            <span>Embalagem mantém o café intacto</span>
                        </div>

                        <div>
                            <Timer
                                size={32}
                                weight="fill"
                                color={theme.background}
                                style={{ backgroundColor: theme.yellow }}
                            />
                            <span>Entrega rápida e rastreada</span>
                        </div>

                        <div>
                            <Coffee
                                size={32}
                                weight="fill"
                                color={theme.background}
                                style={{ backgroundColor: theme.purple }}
                            />
                            <span>O café chega fresquinho até você</span>
                        </div>
                    </Info>
                </div>

                <img
                    src={CoffeeDeliveryCup}
                    alt="Copo de café da Coffee Delivery"
                />
            </BannerContent>

            <img src={BannerBackground} id="banner-bg" alt="" />
        </Banner>
    );
}

export default Home;
