import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, signIn, signOut } from './actions';

function App() {
    const currentCount = useSelector((state) => state.currentCount);

    const loggedIn = useSelector((state) => state.loggedIn);

    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Counter: {currentCount}</h1>
            <button onClick={() => dispatch(increment(5))}>+5</button>
            <button onClick={() => dispatch(decrement(3))}>-3</button>
            {loggedIn ? <h3>Logged In!</h3> : <h3>Logged Out!</h3>}
            <button onClick={() => dispatch(signIn())} disabled={loggedIn}>
                sign in
            </button>
            <button onClick={() => dispatch(signOut())} disabled={!loggedIn}>
                sign out
            </button>
        </div>
    );
}

export default App;
