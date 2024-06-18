import { useDispatch, useSelector } from 'react-redux';

export default function Counter() {
    const stateCount = useSelector((state: any) => state.count);

    const dispatch = useDispatch();

    const increase = () => {
        dispatch({
            type: "INCREASE",
        });
    }
    const decrease = () => {
        dispatch({
            type: "DECREASE",
        });
    }

    return (
        <div>
            <h2>Count</h2>
            <p>Giá trị: {stateCount}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}

