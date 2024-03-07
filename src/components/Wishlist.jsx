import { useDispatch, useSelector } from 'react-redux';
import { selectWishlist } from '../redux/slices/wishlistSlice';
import { increment, decrement } from '../redux/slices/wishlistSlice';
export default function Wishlist() {
    const dispatch = useDispatch();
    const wishlist = useSelector(selectWishlist);

    const handleIncrement = (event) => {
        dispatch(increment(event));
    };

    const handleDecrement = (event) => {
        dispatch(decrement(event));
    };

    return (
        <div>
            {wishlist.map(event => (
                <div className="wishlist-item" key={event.id}>
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
                    </div>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};
