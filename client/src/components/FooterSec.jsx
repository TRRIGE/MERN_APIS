import React from "react";

const FooterSec = () => {
  return (
    <footer className="text-center bg-body-tertiary fixed-bottom">
      <div className="text-center p-3 bg-secondary">
        © {new Date().getFullYear()} Copyright
        <a className="text-body ms-2" href="/">
          Pratik Samarth
        </a>
      </div>
    </footer>
  );
};

export default FooterSec;
