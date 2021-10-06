// import the useReducer 
import React,{useState,useReducer} from "react";
import "./style.css";

const Reducer = (state,action)=>{
   // increment the value
    if(action.type === "Increment"){
      state = state + 1;
    }
     // decrement the value
    if(state > 0 && action.type === "Decrement"){
      state = state - 1;
    }
     // this return statement is option 
    return state;
};

const UseReducer = () => {
    const initialDate = 15;
     
       // declare the useReducer function
   const [state,dispatch] = useReducer(Reducer,initialDate)
   // reducer means decrement the value is belong to dispatch
  

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
          {/* increment the value */}
        <div class="button2" onClick={() =>dispatch({type:"Increment"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Increment
        </div>
        <div
          class="button2"
           // decrement the Value
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