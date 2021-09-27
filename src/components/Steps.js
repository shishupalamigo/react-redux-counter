import { connect } from 'react-redux';
import "../index.css";
import { updateState} from "../store/action";

function Steps(props) {
  function handleClick(steps) {
    props.dispatch(updateState(steps))
  }
  // console.log(props);
  return (
    <div className="mt-10">
    <h3 className="text-center mb-5 text-xl ">Steps</h3>
    <button className={props.step === 5 ? "px-3 py-2 rounded-md mx-5 bg-red-400 text-white" : "bg-yellow-800 text-white px-3 py-2 rounded-md mx-5"} onClick={ () => handleClick(5)} >
      5
    </button>
    <button className={props.step === 10 ? "px-3 py-2 rounded-md mx-5 bg-red-400 text-white" : "bg-yellow-800 text-white px-3 py-2 rounded-md mx-5"} onClick={ () => handleClick(10)} >
      10
    </button>
    <button className={props.step === 15 ? "px-3 py-2 rounded-md mx-5 bg-red-400 text-white" : "bg-yellow-800 text-white px-3 py-2 rounded-md mx-5"} onClick={ () => handleClick(15)} >
      15
    </button>
  </div>
  )
}
function mapStateToProps(state) {
  return {
    step : state.step,
  }
}

export default connect(mapStateToProps)(Steps);
