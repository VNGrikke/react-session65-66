import { useDispatch, useSelector } from 'react-redux';


export default function RandomNumber() {
    const randomNumbers = useSelector((state: any) => state.randomNumbers.numbers);
    const dispatch = useDispatch();

    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        dispatch({
            type: 'ADD_RANDOM_NUMBER',
            payload: randomNumber,
        });
    };
    const formatRandomNumbers = () => {
        return randomNumbers.join(', ');
      };

    return (
        <div>
            <h2>[{formatRandomNumbers()}]</h2>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
        </div>
    );
};

