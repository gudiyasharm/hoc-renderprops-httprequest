import './App.css';
import CounterA from './components/renderProps/CounterA';
import CounterB from './components/renderProps/CounterB';
import Wrapper from './components/renderProps/Wrapper';

function RenderP() {
    return (
        <div className="App">
            <Wrapper count={(count, handleAdd, handleRemove) => {
                return(<CounterA count={count} handleAdd={handleAdd} handleRemove={handleRemove} />)
            }} />

            <Wrapper count={(count, handleAdd, handleRemove) => {
               return( <CounterB count={count} handleAdd={handleAdd} handleRemove={handleRemove} />)
            }} />
            {/* <CounterA />
    <CounterB /> */}
        </div>

    );
}

export default RenderP;
