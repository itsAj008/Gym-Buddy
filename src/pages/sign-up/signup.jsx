import "./signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CgGym } from "react-icons/cg";
import data from "../../components/member_data/data";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    Month: "",
    days: "",
    year: "",
    plan: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function calculateExpirationDate(durationInDays) {
    // Create a new Date object for the current date and time
    const currentDate = new Date();

    // Calculate the expiration date by adding the duration in milliseconds
    const expirationDate = new Date(
      currentDate.getTime() + durationInDays * 24 * 60 * 60 * 1000
    );

    return expirationDate;
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let planindays;
    const userdetails = [];

    if (formData.plan === "1 month") {
      planindays = 31;
    } else if (formData.plan === "3month") {
      planindays = 90;
    } else if (formData.plan === "6months") {
      planindays = 180;
    } else {
      planindays = 365;
    }

    const expirationDate = calculateExpirationDate(planindays);
    const currentDateString = new Date().toLocaleDateString();
    const expirationDateString = expirationDate.toLocaleDateString();

    userdetails.push(formData.plan);
    userdetails.push(expirationDateString);
    userdetails.push(formData.email);

    const userdata = {
      username: formData.userName,
      userdetails: userdetails,
    };

    data.push(userdata);

    navigate(`/main`);
  };

  return (
    <div className="main-background-formate">
      <div className="main">
        <div className="logo">
          <CgGym />
        </div>

        <div className="signupform">
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
            <input
              className="inputfield"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            ></input>
            <br></br>
            <input
              className="inputfield"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            ></input>
            <br></br>
            <div className="dob">
              <select
                name="Month"
                value={formData.Month}
                onChange={handleInputChange}
              >
                <option value="month">Month</option>
                <option value="jan">January</option>
                <option value="feb">February</option>
                <option value="march">March</option>
              </select>
              <select
                name="days"
                // value={formData.days}
                // onChange={handleInputChange}
              >
                <option value="days">days</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
              >
                <option value="year">Year</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
              </select>
            </div>
            <div className="plan">
              <label>Choose plan :</label>
              <select
                name="plan"
                className="chooseplan"
                value={formData.plan}
                onChange={handleInputChange}
              >
                <option value="">plan</option>
                <option value="1month">1 month</option>
                <option value="3months">3 months</option>
                <option value="6months">6 months</option>
                <option value="1year">year</option>
              </select>
            </div>

            <br></br>

            <input id="signup" type="submit" value="Sign-up"></input>
            <p>Already have an account?</p>
            <button
              onClick={() => {
                navigate("/login");
              }}
              id="login"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
