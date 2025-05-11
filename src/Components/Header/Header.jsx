import "./Header.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

const Header = (props) => {
  const {theme,setTheme} = props;

  const toggleTheme = () =>{
    if(theme==="light"){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }
  return (
    <header>
      <div className="logo">
        <h1>
          Task <span>Manager</span>
        </h1>
      </div>
      <div className="theme-container">
        <span>{theme === "light" ? "โหมดกลางวัน" : "โหมดกลางคืน"}</span>
        <span className="icon" onClick={toggleTheme}>
          {theme==="light"? <FaSun /> : <BsFillMoonStarsFill />}
        </span>
      </div>
    </header>
  );
};

export default Header;
