import { connect } from "react-redux";
import { increment, decrement, reset } from "../store/action";

function Counter(props) {
  
  // console.log(props);

  return (
    <article className="flex flex-col justify-center items-center">
      <h2 className="text-6xl font-bold counter-value">{props.value}</h2>
      <div className="mt-10">
        <button className="bg-green-800 text-white px-3 py-2 rounded-md mx-5" onClick={() => props.dispatch(increment())}>
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
  }
}

export default connect(mapStateToProps)(Counter);
