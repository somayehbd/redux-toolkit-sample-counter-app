import { useDispatch } from 'react-redux';
import { incremented, decremented } from '../redux/counterSlice'
import { incrementedWithAction, decrementedWithAction } from '../redux/counterSliceWithAction'

function Home() {
    const dispatch = useDispatch();


    const styles = {
        display: 'inline-block',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f9ff89',
        padding: '20px',
        borderRadius: '5px',
        margin: '10px',
        fontSize: '24px',
        border: '#ffab33 2px solid',
        width: '80px'
    };
    return (
        <>
            <h3>Home Component</h3>
            <button style={styles} onClick={() => dispatch(decremented())}>-1</button>
            <button style={styles} onClick={() => dispatch(incremented())}>+1</button>
            <h3>Home Component</h3>
            <button style={styles} onClick={() => dispatch(decrementedWithAction(10))}>-10</button>
            <button style={styles} onClick={() => dispatch(incrementedWithAction(10))}>+10</button>
        </>
    )
}
export default Home;
