import { useSelector } from 'react-redux';

function ShoppingCartIcons() {

    const styles = {
        textAlign: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#e1e1e1',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(255, 192, 203, 0.5)',
        margin: '10px auto',
        fontSize: '24px',
        border: '1px solid #bbb'
    };
    const counter = useSelector(state => state.counterSlice.value);

    return (
        <>
            <h3>Shopping Card Icon</h3>
            <div style={styles}>{counter}</div>
        </>
    )
}
export default ShoppingCartIcons;