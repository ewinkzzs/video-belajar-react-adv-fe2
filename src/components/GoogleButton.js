import React from "react";
import { Button, Image } from "react-bootstrap";

function GoogleButton({ children, onClick }) {
  return (
    <Button variant="outline-danger" className="w-100 d-flex align-items-center justify-content-center" onClick={onClick}>
      <Image
        src="https://www.svgrepo.com/show/355037/google.svg"
        alt="Google icon"
        height={22}
        className="me-2"
      />
      {children}
    </Button>
  );
}

export default GoogleButton;