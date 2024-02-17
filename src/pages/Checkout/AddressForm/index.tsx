import { MapPinLine } from "@phosphor-icons/react";
import { Container, Description, Form, Row } from "./styles";
import InputText from "../../../components/Form/InputText";
import { forwardRef } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormInputs } from "..";

type AddressFormProps = {
    formRegister: UseFormRegister<FormInputs>;
    errors: FieldErrors<FormInputs>;
}

// TODO: Check if it needs to have the forwardRef here
const AddressForm = forwardRef(({ formRegister, errors }: AddressFormProps, ref) => {
    return (
        <Container>
            <Description>
                <MapPinLine />
                <div>
                    <h3>Endereço de Entrega</h3>
                    <p>Informe o endereço onde desejar receber seu pedido</p>
                </div>
            </Description>

            <Form>
                <InputText
                    placeholder="CEP"
                    containerProps={{ style: { gridArea: "cep" }}}
                    error={errors.cep}
                    {...formRegister('cep', { valueAsNumber: true })}
                />

                <InputText
                    placeholder="Rua"
                    containerProps={{ style: { gridArea: "rua" }}}
                    error={errors.rua}
                    {...formRegister('rua')}
                />

                <InputText
                    placeholder="Número"
                    containerProps={{ style: { gridArea: "numero" }}}
                    error={errors.numero}
                    {...formRegister('numero')}
                />
                <InputText
                    placeholder="Complemento"
                    optional
                    containerProps={{ style: { gridArea: "complemento" }}}
                    error={errors.complemento}
                    {...formRegister('complemento')}
                />

                <InputText
                    placeholder="Bairro"
                    containerProps={{ style: { gridArea: "bairro" }}}
                    error={errors.bairro}
                    {...formRegister('bairro')}
                />
                <InputText
                    placeholder="Cidade"
                    containerProps={{ style: { gridArea: "cidade" }}}
                    error={errors.cidade}
                    {...formRegister('cidade')}
                />
                <InputText
                    placeholder="UF"
                    containerProps={{ style: { gridArea: "uf" }}}
                    error={errors.uf}
                    {...formRegister('uf')}
                />
            </Form>
        </Container>
    );
});

export default AddressForm;
