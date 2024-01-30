import "./about.css";
import { CgGym } from "react-icons/cg";

export default function About() {
  return (
    <div className="about">
      <div className="logo">
        <CgGym />
      </div>
      <div className="aboutContent">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, iure
          temporibus nulla quo perspiciatis sapiente ipsam velit doloribus
          facilis dicta, quae eaque delectus sit officia nam consectetur esse
          ipsa. Ad.
        </p>
      </div>
    </div>
  );
}
