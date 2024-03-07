import { useDispatch, useSelector } from 'react-redux';
import { selectWishlist } from '../redux/slices/wishlistSlice';
import { increment, decrement, remove } from '../redux/slices/wishlistSlice';
export default function Wishlist() {
    const dispatch = useDispatch();
    const wishlist = useSelector(selectWishlist);

    const handleIncrement = (event) => {
        dispatch(increment(event));
    };

    const handleDecrement = (event) => {
        dispatch(decrement(event));
    };
    const hadnleRemove = (event) => {
        dispatch(remove(event));
    };
    const total = wishlist.reduce((acc, curr) => acc + curr.nbParticipants * curr.price, 0);

    return (
        <div className='container'>
            {wishlist.map((event, index) => (
                <div className="wishlist-item" key={event.id}>
                    <h3>event: {index + 1}</h3>
                    <img
                        height={100}
                        src={"/images/" + event.img} alt={event.name} />
                    <h3>{event.name}</h3>
                    <p>{event.description}</p>
                    <p>Price: {event.price}</p>
                    <p>Available Tickets: {event.nbTickets}</p>
                    <div>
                        <label>Participants:</label>
                        <div>
                            <button onClick={() => handleDecrement(event)}>-</button>
                            <input
                                type="number"
                                value={event.nbParticipants}
                                readOnly
                            />
                            <button onClick={() => handleIncrement(event)}>+</button>
                        </div>
                        <button onClick={() => hadnleRemove(event)}>Remove</button>
                    </div>
                    <br />
                </div>
            ))}
            <h4>Total: {total}</h4>
        </div>
    );
}