import PropTypes from "prop-types";
import "./member_data.css";

export default function Member_data({ data }) {
  return (
    <ol className="memberlist">
      {data.map((item, index) => (
        <li key={index}>
          {item.username}
          {item.userdetails && item.userdetails.length > 0 && (
            <ul className="mem_data">
              {item.userdetails.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

Member_data.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      userdetails: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};
