import AddForm from "./Components/AddForm/AddForm";
import Header from "./Components/Header/Header";
import Item from "./Components/Item/Item";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id) => {
    const result = tasks.filter((item) => item.id !== id);
    setTasks(result);
  };

  const editTask = (id) => {
    setEditId(id);
    const editTask = tasks.find((item) => item.id === id);
    setTitle(editTask.title);
  };

  const saveTask = (e) => {
    e.preventDefault();
    if (!title) {
      alert("ป้อนข้อมูล");
    } else if (editId) {
      const updateTask = tasks.map((item) => {
        if (item.id === editId) {
          return { ...item, title: title };
        }
        return item;
      });
      setTasks(updateTask);
      setTitle("");
      setEditId(null);
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  };

  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          editId={editId}
        />
        <section>
          {tasks.map((data) => (
            <Item
              key={data.id}
              data={data}
              setTask={setTasks}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
