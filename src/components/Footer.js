import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-light text-muted pt-4 mt-5">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <img src={logo} alt="Logo Videobelajar" height={60} />
            <p className="mt-2 fw-bold">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>
            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p>+62–877–7123–1234</p>
          </Col>
          <Col md={2}>
            <h5>Kategori</h5>
            <ul className="list-unstyled">
              <li>Digital & Teknologi</li>
              <li>Pemasaran</li>
              <li>Manajemen Bisnis</li>
              <li>Pengembangan Diri</li>
              <li>Desain</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Perusahaan</h5>
            <ul className="list-unstyled">
              <li>Tentang Kami</li>
              <li>FAQ</li>
              <li>Kebijakan Privasi</li>
              <li>Ketentuan Layanan</li>
              <li>Bantuan</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Komunitas</h5>
            <ul className="list-unstyled">
              <li>Tips Sukses</li>
              <li>Blog</li>
            </ul>
          </Col>
        </Row>
        <Row className="border-top pt-3 align-items-center">
          <Col md={6}>
            <p>©2023 Gerobak Sayur All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <i className="fa-brands fa-linkedin-in me-3"></i>
            <i className="fa-brands fa-facebook-f me-3"></i>
            <i className="fa-brands fa-instagram me-3"></i>
            <i className="fa-brands fa-twitter"></i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;