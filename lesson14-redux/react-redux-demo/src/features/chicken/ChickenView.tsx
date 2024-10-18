import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../app/store";
import {order, restock} from "./chickenSlice";
import {useRef} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hook";

export default function ChickenView() {
    const {numOfChicken} = useAppSelector(state => state.chicken);
    const dispatch = useAppDispatch();

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <h1>Num of Chicken: {numOfChicken}</h1>
            <button onClick={() => dispatch(order())}>Order</button><br/>
            <input type="number" ref={inputRef} />
            <button onClick={() => dispatch(restock(Number(inputRef.current?.value)))}>Restock</button>
        </>
    )
}