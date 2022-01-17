import React from "react";

const Footer = (props) => (
  <footer className="main-footer">
    <strong>Copyright &copy; {new Date().getFullYear()}</strong>
    <a href="https://github.com/marcosesares/" target="_blank" rel="noreferrer">
      {" "}
      Marcos César
    </a>
  </footer>
);

export default Footer;
