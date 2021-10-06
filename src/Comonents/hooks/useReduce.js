import React,{useState,useReducer} from "react";
import "./style.css";

const Reducer = (state,action)=>{
    if(action.type === "Increment"){
      state = state + 1;
    }
    if(state > 0 && action.type === "Decrement"){
      state = state - 1;
    }
    return state;
};

const UseReducer = () => {
    const initialDate = 15;
   const [state,dispatch] = useReducer(Reducer,initialDate)
  
  // const [myNum, setMyNum] = useState(0); 

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() =>dispatch({type:"Increment"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Increment
        </div>
        <div
          class="button2"
          onClick={() =>dispatch({type:"Decrement"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Decrement
        </div>
      </div>
    </>
  );
};

export default UseReducer;