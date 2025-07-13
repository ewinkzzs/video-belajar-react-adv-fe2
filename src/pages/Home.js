import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { getCourses } from "../services/api/api";

function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (e) {
        alert("Gagal mengambil data");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <Header showCategory />
      <section className="hero bg-light p-5 text-center">
        <Container>
          <h1>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
          <p>
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran
            berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan
            interaktif yang akan meningkatkan pemahaman Anda.
          </p>
          <Button variant="success" size="lg">
            Temukan Video Course-mu di videobelajar!
          </Button>
        </Container>
      </section>

      <section className="kategori text-center my-5">
        <Container>
          <h2>Koleksi Video Pembelajaran Unggulan</h2>
          <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Materi Terverifikasi</p>
          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <Button variant="outline-primary" active>
              Semua Kelas
            </Button>
            <Button variant="outline-primary">Pemasaran</Button>
            <Button variant="outline-primary">Desain</Button>
            <Button variant="outline-primary">Pengembangan Diri</Button>
            <Button variant="outline-primary">Bisnis</Button>
          </div>
        </Container>
      </section>

      <section className="cards py-4">
        <Container>
          {loading ? (
            <div className="text-center"><Spinner animation="border" /></div>
          ) : courses.length > 0 ? (
            <Row>
              {courses.map((course) => (
                <Col md={4} key={course.id}>
                  <CourseCard
                    course={{
                      image: course.photos,
                      title: course.tite,
                      description: course.description,
                      price: course.price,
                      instructor: {
                        name: course.mentor,
                        role: course.rolementor,
                        avatar: course.avatar
                      }
                    }}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <p className="text-center">Tidak ada data course.</p>
          )}
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Home;