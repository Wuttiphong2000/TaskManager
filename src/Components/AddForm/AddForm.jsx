import "./AddForm.css";
import React from "react";

const AddForm = (props) => {
  const { title, setTitle, saveTask, editId } = props;
  return (
    <section className="text">
      <h2>งานที่ต้องจัดการ</h2>
      <form className="form-group" onSubmit={saveTask}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {editId ? "อัพเดท" : "เพิ่ม"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddForm;
