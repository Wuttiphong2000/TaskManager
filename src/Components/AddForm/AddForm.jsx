import "./AddForm.css";
import React from "react";

const AddForm = (props) => {
  const { title, setTitle, saveTask, editId } = props;
  return (
    <section>
      <h2>รายการบริหารงาน</h2>
      <form className="form-group" onSubmit={saveTask}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {editId ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddForm;
