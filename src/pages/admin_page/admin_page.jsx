import { Link } from "react-router-dom";
import { CgGym } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import "./admin_page.css";
import Member_data from "../../components/member_data/member_data";
import data from "../../components/member_data/data";

export default function Admin_usr_page() {
  const navigate = useNavigate();

  return (
    <div className="admin_page">
      <div className="admin_navbar">
        <div className="navcontent">
          <Link to="/">
            <CgGym className="mainlogo" />
          </Link>
          <h1>
            Welcome <span>bad gay</span> balaji
          </h1>
        </div>

        <button
          className="logoutbtn"
          onClick={() => {
            navigate("/");
          }}
        >
          Log out
        </button>
      </div>
      <div className="memberlistdiv">
        <Member_data data={data} />
      </div>
    </div>
  );
}
