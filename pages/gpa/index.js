import { createContext, useReducer, useState, useEffect } from "react";
import CourseCard from "./components/CourseCard.js";
import CourseForm from "./components/CourseForm";

export const eieiContext = createContext()

const GPA = () =>{

  const [myCourses, setMyCourse] = useState([]);

  //ทำงานเมื่อตัวแปรที่ใส่ใน array มีค่าเปลี่ยนไป ใช้กับ localStorage เพื่อเก็บข้อมูลเก่าไว้
  useEffect(() => {
    const previous = localStorage.getItem('data')
    if (previous !== null) {
      setMyCourse(JSON.parse(previous))
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(myCourses))
    console.log(JSON.stringify(myCourses))
  }, [myCourses])

  const renderCourseCard = () => {
    return (
      myCourses.map((course) => <CourseCard {...course} onDeleteCourse={onDeleteCourse} />)
    )
  }

  const addCourse = (data) => {
    // TODO
    // alert("eiei")
    const add_course = [...myCourses, data]
    if (data.name == "" || data.code == "" || data.creditt == "" || data.gradee == "") { alert("Please input course information") }
    else if (data.code.length != 6) {
      alert("course code must has 6 character")
    }
    else {
      setMyCourse(add_course)
    }
  }

  const onDeleteCourse = (code) => {
    const decourse = myCourses.filter(function (objj) {
      return objj.code != code;
    });
    setMyCourse(decourse)
  }

  const calculateGPA = () => {
    var calcredit = 0
    var result = 0
    myCourses.forEach((objjj) => {
      console.log(objjj.gradee)
      if (objjj.gradee !== 'W') {
        calcredit += Number(objjj.creditt)
        result += (objjj.gradee * objjj.creditt)
      }
    });
    if (myCourses.length === 0) {
      return 0
    }
    else {
      return result / calcredit
    }

  }

  return (
    <eieiContext.Provider value={{ addCourse }}>
      <div className="container mx-center h-screen">
        <div className="temp badge bg-warning text-wrap">
          <h1>
            GPA CALCULATOR
        </h1>
        </div>

        {/* TODO ADD UI */}
        <div className="space-x-4 mine">
          <div>
            <ul className="list-group my-4">
              <h2 className="temp text-2xl my-3">My courses</h2>
              {renderCourseCard()}
            </ul>

          </div>
          <div className="grade">
            <h2 className="temp">GPA : {calculateGPA().toFixed(2)}</h2>
          </div>
        </div>
        <div className="container mx-center h-screen">
          <CourseForm />
        </div>
      </div>
    </eieiContext.Provider>
  );
}

export default GPA;
