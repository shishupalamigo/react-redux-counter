import Counter from './Counter';
import { Provider } from 'react-redux';
import store from '../store';
import CounterWithSteps from './CounterWithSteps';

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl text-center mt-10 mb-10 font-bold text-gray-700">
        Redux Counter App
      </h1>
      <Provider store={store}>
        {/* <Counter /> */}
        <CounterWithSteps />
      </Provider>
    </div>
  );
}

export default App;
