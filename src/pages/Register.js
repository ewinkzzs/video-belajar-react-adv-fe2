import React from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import GoogleButton from "../components/GoogleButton";

function Register() {
  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <Card style={{ maxWidth: 450, width: "100%" }} className="p-4 shadow-sm">
          <h2>Pendaftaran Akun</h2>
          <p className="text-muted mb-4">Yuk, daftarkan akunmu sekarang juga!</p>
          <Form>
            <Form.Group className="mb-3" controlId="fullname">
              <Form.Label>
                Nama Lengkap <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailRegister">
              <Form.Label>
                E-Mail <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="phone">
              <Form.Label column sm={12}>
                No. Hp <span className="text-danger">*</span>
              </Form.Label>
              <Col sm={4}>
                <Form.Select required>
                  <option value="+62">🇮🇩 +62</option>
                  {/* Tambah kode negara lain */}
                </Form.Select>
              </Col>
              <Col sm={8}>
                <Form.Control type="tel" required />
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="passwordRegister">
              <Form.Label>
                Kata Sandi <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="********" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>
                Konfirmasi Kata Sandi <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="********" required />
            </Form.Group>
            <div className="mb-3 text-end">
              <a href="#" className="text-decoration-none">
                Lupa Password?
              </a>
            </div>
            <div className="d-grid gap-2 mb-3">
              <Button variant="primary" type="submit">
                Daftar
              </Button>
              <Button variant="outline-secondary" href="/login">
                Masuk
              </Button>
            </div>
          </Form>
          <div className="text-center mb-0">
            <div className="divider mb-3" style={{ position: "relative" }}>
              <span style={{ position: "relative", backgroundColor: "white", padding: "0 10px" }}>atau</span>
              <hr />
            </div>
            <GoogleButton>Daftar dengan Google</GoogleButton>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default Register;