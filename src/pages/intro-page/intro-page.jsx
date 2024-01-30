import "../intro-page/intro-page.css";
import { CgGym } from "react-icons/cg";
// import { GiGymBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Intro_page() {
  const navigate = useNavigate();

  return (
    <>
      <div className="intropage">
        <div className="intro-navbar">
          <ul>
            <li className="logo">
              <Link to="/">
                <CgGym />
              </Link>
            </li>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/get-info">Get info</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button className="loginbtn" onClick={() => navigate("/login")}>
                log in
              </button>
            </li>
          </ul>
        </div>
        <div className="content">
          <p className="title1">SHAPE YOUR BODY</p>
          <br />
          <p className="title2">
            BE <span> STRONG</span>
          </p>
          <br />
          <p className="title3">TRAIN HARD</p>
          <br />
          <button className="joinbtn" onClick={() => navigate("/signup")}>
            Join
          </button>
        </div>
      </div>
    </>
  );
}
