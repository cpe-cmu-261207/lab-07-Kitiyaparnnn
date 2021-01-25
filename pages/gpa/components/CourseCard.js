import { GRADES } from "../utils/grades";


const CourseCard = (props) => {
  const NumbertoString = () => GRADES.find((value) => props.gradee == value.value).name
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2 shadow-sm p-3 mb-3 bg-white rounded">
        <div>
          <h4 className="text-coursecard">course name :{props.name}</h4>
          <h5 className="text-muted my-1">course code : {props.code}</h5>
          <h5 className="text-muted my-1">credit : {props.creditt}</h5>
          <h3 className="text-coursecard">course grade : {props.gradee == 'W' ? 'W' : NumbertoString()  }</h3>
        </div>
        <span onClick={() => props.onDeleteCourse(props.code)}><p className="delete">delete</p></span>
    </li>
  );
};

export default CourseCard;
