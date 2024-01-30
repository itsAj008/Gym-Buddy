import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CgGym } from "react-icons/cg";

export default function Login() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    // isAdmin: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission ..... ?username=${formData.userName}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isAdmin);
    if (isAdmin) {
      navigate("/admin");
    } else {
      navigate("/main");
    }
  };

  return (
    <div className="main-background-formate">
      <div className="main">
        <div className="logo">
          <CgGym />
        </div>

        <div className="loginform">
          <div className="welcomecmt">
            <p>Welcome to your </p>
            <p className="gymm"> gym</p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              className="inputfield"
              type="text"
              placeholder="UserName"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
            ></input>
            <br></br>
            <div>
              <input
                className="inputfield"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              ></input>

              {/* <div className="admincheckbox">
                <input type="checkbox" />
                <span>show password</span>
              </div> */}
            </div>

            <br></br>
            <div className="admincheckbox">
              <input
                type="checkbox"
                onChange={() => {
                  setIsAdmin(!isAdmin);
                }}
                checked={isAdmin}
              />
              <span>log in as admin</span>
            </div>

            <input id="login" type="submit" value="Log in"></input>
          </form>
        </div>
      </div>
    </div>
  );
}
