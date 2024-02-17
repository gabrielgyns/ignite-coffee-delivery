import { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";
import { ButtonStyled } from "./styles";

const variants = [
    'primary',
    'secondary',
] as const;

export type ButtonVariants = (typeof variants)[number]

type ButtonStyledProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    variant?: ButtonVariants;
}

const Button = ({ label, variant = 'primary', ...rest }: ButtonStyledProps) => {


    return (
        <ButtonStyled variant={variant} {...rest}>
            {label}
        </ButtonStyled>
    );
}

export default Button;