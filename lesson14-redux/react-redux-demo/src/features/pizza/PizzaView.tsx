import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../app/store";
import {order, restock} from "./pizzaSlice";
import {useAppDispatch, useAppSelector} from "../../app/hook";

export default function PizzaView() {

    const {numOfPizza} = useAppSelector(state => state.pizza);
    const dispatch = useAppDispatch();

    return (
        <>
            <h1>Num of Pizza: {numOfPizza}</h1>
            <button onClick={() => dispatch(order())}>Order</button><br/>
            <button onClick={() => dispatch(restock(5))}>Restock</button>
        </>
    )
}