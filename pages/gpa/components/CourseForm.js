import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useState, useReducer } from "react";
import {eieiContext } from "../index";


const CourseForm = () => {
  const initInputData = { name: '', code: '', creditt: ' ', gradee: '0.00' }
  const Context = useContext(eieiContext)
  // const [inputData, setInputData] = useState({ name: '', code: '', creditt: ' ', gradee: '0.00' });
  const [state, dispatch] = useReducer((prevState,action) => { 
    switch(action.type){
      case 'setName' :
        return {...prevState, name: action.value}
      case 'setCode' :
        return {...prevState, code: action.value}
      case 'setCredit' :
        return {...prevState, creditt: action.value}
      case 'setGrade' :
        return {...prevState, gradee: action.value}
      default :
        throw new Error("Error eiei");
    }
  }, initInputData)
  
  const renderGrade = () => {
    return (
      GRADES.map((item) => (<option key={item.name} value={item.value}>{item.name}</option>))
    )
  }

  const renderCredit = () => {
    return (
      CREDITS.map((item) => (<option key={item} value={item}>{item}</option>))
    )
  }

  return (
    <form>
      <div className="row">
        <div className="col">
          <label className="text-label" for="name">Name</label> <br />
          <input className="inputBotton" id="name" type="text"
            value={state.name}
            onChange={(e) => {
              dispatch({type: 'setName',value:e.target.value})
              // setInputData({ ...inputData, name: e.target.value })
            }}
          />
        </div>
        <div className="col">
          <label className="text-label" for="code">Code</label><br />
          <input className="inputBotton" id="code" type="text"
            value={state.code}
            onChange={(e) => {
              dispatch({type: 'setCode',value:e.target.value})
              // setInputData({ ...inputData, code: e.target.value })
            }}
          />
        </div>
        <div className="col">
          <label className="text-label">Credit</label><br />
          <select name="credit" className="inputBotton"
            value={state.creditt}
            onChange={(e) => {
              dispatch({type: 'setCredit',value:e.target.value})
              // setInputData({ ...inputData, creditt: e.target.value })
            }}>
            <option selected class="italic">Choose credit</option>
            {renderCredit()}
          </select>
        </div>
        <div className="col">
          <label className="text-label">Grade</label><br />
          <select name="grade" className="inputBotton"
            onChange={(e) => {
              dispatch({type: 'setGrade',value:e.target.value})
              // setInputData({ ...inputData, gradee: e.target.value })
            }}>
            <option selected className="italic">Choose grade</option>
            {renderGrade()}
          </select>
        </div>
        <div className="col" onClick={() => Context.addCourse(state)}>
          {/* <span className="text-buttom text-success fs-2"><i class="fas fa-plus-circle"></i></span> */}
            <button className="button-gpa" style={{color:" #04ff0c"}}>add</button>
        </div>
      </div>
    </form>
  );
};

export default CourseForm;
