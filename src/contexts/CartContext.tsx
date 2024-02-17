import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";
import { CoffeeType } from "../@types/Coffee";

type CartContextType = {
    cart: CartItemsProps[];
    cartHasItems: boolean;
    addItemToCart: (item: CoffeeType, quantity?: number) => void;
    removeQuantity: (item: CoffeeType, quantity?: number) => void;
    removeItemFromCart: (id: string) => void;
    getCartTotal: () => number;
};

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode;
}

interface CartItemsProps extends CoffeeType {
    quantity: number;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, setCart] = useState<CartItemsProps[]>(() => {
        const storedStateAsJSON = localStorage.getItem(
            '@coffee-delivery:cart-state-1.0.0',
          )
    
          if (storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON);
          }
    
          return [];
    });

    useEffect(() => {
        if (cart) {
          const stateJSON = JSON.stringify(cart)
    
          localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
        }
      }, [cart])

    function addItemToCart(item: CoffeeType, quantity = 1) {
        const itemExists = cart.find((cartItem) => cartItem.id === item.id);

        // Update item in the cart if already exists.
        if (!!itemExists) {
            const newCart = cart.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + quantity,
                    };
                }

                return cartItem;
            });

            setCart(newCart);
        } else {
            // Add new item to cart
            const newCart = [
                ...cart,
                {
                    ...item,
                    quantity,
                },
            ];

            setCart(newCart);

            console.log(newCart)
        }
    }

    function removeQuantity(item: CoffeeType, quantity = 1) {
        const itemExists = cart.find((cartItem) => cartItem.id === item.id);

        if (!itemExists) return;

        const newCart = cart.map((cartItem) => {
            if (cartItem.id === item.id) {
                if (cartItem.quantity === 1) return cartItem;

                return {
                    ...cartItem,
                    quantity: cartItem.quantity - quantity,
                };
            }

            return cartItem;
        });

        setCart(newCart);
    }

    function removeItemFromCart(id: string) {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    }

    function getCartTotal() {
        return cart.reduce((accumulator, current) => accumulator + (current.price * current.quantity), 0);
    }

    const cartHasItems = cart.length > 0;

    return (
        <CartContext.Provider
            value={{
                cart,
                cartHasItems,
                addItemToCart,
                removeItemFromCart,
                removeQuantity,
                getCartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    return context;
}
