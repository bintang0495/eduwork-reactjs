import "./index.css";
import { IoIosHome } from "react-icons/io";
import { MdContactMail } from "react-icons/md";
import { ImWrench } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { BsExclamationDiamond } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <IoIosHome /> Home
      </Link>
      <Link to="/services">
        <ImWrench /> Services
      </Link>
      <Link to="/clients">
        <FaUserFriends /> Clients
      </Link>
      <Link to="/contact">
        <MdContactMail /> Contact
      </Link>
      <Link to="/about">
        <BsExclamationDiamond /> About
      </Link>
    </div>
  );
};

export default Navigation;
