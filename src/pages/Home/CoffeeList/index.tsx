import Card from "../../../components/Card";
import { CoffeeListContainer } from "./styles";
import { coffees } from '../../../../data.json';

const CoffeeList = () => {
    

    return (
        <CoffeeListContainer>
            <h2>Nossos cafés</h2>

            <div>
                {coffees.map((coffee) => (
                    <Card {...coffee} />
                ))}
            </div>
        </CoffeeListContainer>
    );
}

export default CoffeeList;