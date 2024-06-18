import { useDispatch, useSelector } from 'react-redux';
export default function ChangeState() {
    const company = useSelector((state: any) => state.company.company);
    const dispatch = useDispatch();

    const changeCompany = () => {
        dispatch({
            type: 'CHANGE_COMPANY',
            payload: 'RikkeiSoft',
        });
    };

    return (
        <div>
            <h2>Company: {company}</h2>
            <button onClick={changeCompany}>Change state</button>
        </div>
    );
};

