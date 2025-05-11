import "./Item.css";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

const Item = (props) => {
  const { data, deleteTask, editTask } = props;
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <BsTrash className="btn" onClick={() => deleteTask(data.id)} />
        <FaRegEdit className="btn" onClick={() => editTask(data.id)}/>
      </div>
    </div>
  );
};

export default Item;
