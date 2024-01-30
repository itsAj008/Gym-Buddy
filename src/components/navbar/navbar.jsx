import "./navbar.css";
import { Link } from "react-router-dom";
import { CgGym } from "react-icons/cg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="searchbar">
        <Link to="/">
          <CgGym className="mainlogo" />
        </Link>
        <input type="search" placeholder="Search" id="searchfield" />
        <button id="searchbtn">search</button>
      </div>

      <ul className="navbaritems">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>friends</Link>{" "}
        </li>
        <li>
          <Link>messages</Link>{" "}
        </li>
        <li>
          <Link>notifications</Link>
        </li>
      </ul>
    </div>
  );
}
