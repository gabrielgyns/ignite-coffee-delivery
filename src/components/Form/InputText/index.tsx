import { FocusEvent, HTMLAttributes, InputHTMLAttributes, LegacyRef, forwardRef } from "react";
import { Box, Container, ErrorMessage } from "./styles";
import { FieldError } from "react-hook-form";

type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
    optional?: boolean;
    containerProps?: HTMLAttributes<HTMLDivElement>;
    error?: FieldError;
};

// Box: Hold the custom input and the error message when we have.
// Container: Our custom input
const InputText = forwardRef(
    ({ optional = false, containerProps, error, ...rest }: InputTextProps, ref: LegacyRef<HTMLInputElement>) => {
        return (
            <Box {...containerProps}>
                <Container>
                    <input type="text" ref={ref} {...rest} />

                    {optional && <span>Opcional</span>}
                </Container>

                {error?.message && (<ErrorMessage>{error.message}</ErrorMessage>)}
            </Box>
        );
    },
);

export default InputText;
