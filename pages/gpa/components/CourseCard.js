import { GRADES } from "../utils/grades";
const CourseCard = (props) => {
  const NumbertoString = () => GRADES.find((value) => props.gradee == value.value).name
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2 shadow-sm p-3 mb-3 bg-white rounded">
        <div>
          <h4 className="text-dark my-1 fst-italic">course name : {props.name}</h4>
          <h5 className="text-muted my-1">course code : {props.code}</h5>
          <h5 className="text-muted my-1">credit : {props.creditt}</h5>
          <h3 className="text-dark my-1 fst-italic ">course grade : {props.gradee == 'W' ? 'W' : NumbertoString()  }</h3>
        </div>
        <span onClick={() => props.onDeleteCourse(props.code)} className="text-danger fs-4"><i class="fa fa-backspace"></i></span>
    </li>
  );
};

export default CourseCard;
