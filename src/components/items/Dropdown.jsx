import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const AsideDropdown = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const activeClass = isOpen ? "active" : "";

  return (
    <Dropdown isActive={isOpen}>
      <h5 className="nav-title" onClick={toggleDropDown}>
        {title}
      </h5>
      <ul className="list">
        {links.map((lesson) => (
          <AsideDropdownLink
            key={lesson.id}
            title={lesson.title}
            link={lesson.link}
          />
        ))}
      </ul>
    </Dropdown>
  );
};

const Dropdown = styled("div")`
  margin-bottom: 25px;
  ul {
    display: ${(props) => (props.isActive ? "flex" : "none")};
    flex-direction: column;
    padding: 20px 20px 20px;
    margin-top: 10px;
    background-color: #00000049;
  }
  li {
    display: block;
    list-style: none;
    margin-bottom: 10px;
  }
  a {
    display: block;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
  }
`;

const AsideDropdownLink = ({ title, link }) => {
  return (
    <li>
      <Link to={link}>{title}</Link>
    </li>
  );
};

export default AsideDropdown;
