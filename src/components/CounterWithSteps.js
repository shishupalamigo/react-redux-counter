import { connect } from "react-redux";
import { increment, decrement, reset } from "../store/action";
import Max from "./Max";
import Steps from "./Steps";

function Counter(props) {
  
  // console.log(props, "from counter" );

  return (
    <article className="flex flex-col justify-center items-center mt-20">
      <h2 className="text-6xl font-bold counter-value">{props.value}</h2>
      <div className="flex justify-between">
      <Steps />
      <Max />
      </div>
      <div className="mt-10">
        <button className="bg-green-800 text-white px-3 py-2 rounded-md mx-5" onClick={props.value + props.step <= props.max ? (() => props.dispatch(increment())) : () => null}>
          + Increment
        </button>
        <button className="bg-green-800 text-white px-3 py-2 rounded-md mx-5" onClick={() => props.dispatch(decrement())}>
          - Decrement
        </button>
        <button className="bg-green-800 text-white px-3 py-2 rounded-md mx-5 " onClick={() => props.dispatch(reset())}>
          Reset
        </button>
      </div>
    </article>
  );
}
function mapStateToProps(state) {
  return {
    value : state.value,
    max : state.max,
    step : state.step
  }
}

export default connect(mapStateToProps)(Counter);
