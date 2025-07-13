import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import Header from "../components/Header";
import GoogleButton from "../components/GoogleButton";

function Login() {
  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <Card style={{ maxWidth: 400, width: "100%" }} className="p-4 shadow-sm">
          <h2>Masuk ke Akun</h2>
          <p className="text-muted mb-4">Yuk, lanjutin belajarmu di videobelajar.</p>
          <Form>
            <Form.Group className="mb-3" controlId="emailLogin">
              <Form.Label>
                E-Mail <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="passwordLogin">
              <Form.Label>
                Kata Sandi <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
            <div className="mb-3 text-end">
              <a href="#" className="text-decoration-none">
                Lupa Password?
              </a>
            </div>
            <div className="d-grid gap-2 mb-3">
              <Button variant="primary" href="/beranda">
                Masuk
              </Button>
              <Button variant="outline-secondary" href="/register">
                Daftar
              </Button>
            </div>
          </Form>
          <div className="text-center mb-0">
            <div className="divider mb-3" style={{ position: "relative" }}>
              <span style={{ position: "relative", backgroundColor: "white", padding: "0 10px" }}>atau</span>
              <hr />
            </div>
            <GoogleButton>Masuk dengan Google</GoogleButton>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default Login;