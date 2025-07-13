import React, { useEffect, useState } from "react";
import { Container, Form, Button, ListGroup, Row, Col } from "react-bootstrap";
import useCourseStore from "../store/store";
import Header from "../components/Header";

function Admin() {
  const {
    courses,
    fetchCourses,
    addCourse,
    updateCourse,
    deleteCourse,
    loading,
  } = useCourseStore();

  const [formData, setFormData] = useState({
    id: null,
    tite: "",
    subtitle: "",
    price: "",
    description: ""
  });

  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  useEffect(() => {
    if (search === "") setFilteredCourses(courses);
    else {
      const lower = search.toLowerCase();
      setFilteredCourses(
        courses.filter(
          (c) =>
            c.tite.toLowerCase().includes(lower) ||
            c.subtitle.toLowerCase().includes(lower) ||
            c.description.toLowerCase().includes(lower)
        )
      );
    }
  }, [search, courses]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.tite || !formData.subtitle || !formData.price) {
      alert("Isi semua field wajib");
      return;
    }

    try {
      if (formData.id) {
        await updateCourse(formData.id, formData);
        alert("Produk berhasil diperbarui");
      } else {
        await addCourse(formData);
        alert("Produk berhasil ditambahkan");
      }
      setFormData({ id: null, tite: "", subtitle: "", price: "", description: "" });
    } catch (error) {
      alert("Gagal menyimpan data");
    }
  };

  const handleEdit = (course) => {
    setFormData(course);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin hapus produk ini?")) return;
    try {
      await deleteCourse(id);
      alert("Produk berhasil dihapus");
    } catch {
      alert("Gagal menghapus produk");
    }
  };

  return (
    <>
      <Header showCategory />
      <Container style={{ maxWidth: 600, marginTop: 32 }}>
        <h3 className="mb-4 text-center">Admin Produk</h3>

        <Form onSubmit={handleSubmit} className="mb-4">
          <Form.Group className="mb-3" controlId="tite">
            <Form.Control
              placeholder="Judul Produk"
              name="tite"
              value={formData.tite}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subtitle">
            <Form.Control
              placeholder="Subjudul"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Control
              placeholder="Harga"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              as="textarea"
              placeholder="Deskripsi (opsional)"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100" disabled={loading}>
            {formData.id ? "Update Produk" : "Tambah Produk"}
          </Button>
        </Form>

        <Form.Control
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-3"
        />

        {loading && <p>Loading...</p>}

        <ListGroup>
          {filteredCourses.map((course) => (
            <ListGroup.Item
              key={course.id}
              className="d-flex justify-content-between align-items-start"
            >
              <div style={{ flex: "1 1 auto" }}>
                <h5>{course.tite}</h5>
                <div>{course.subtitle}</div>
                <div style={{ color: "green", fontWeight: "600" }}>
                  Rp{parseFloat(course.price).toFixed(2)}
                </div>
              </div>
              <div>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEdit(course)}
                >
                  Edit
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(course.id)}>
                  Hapus
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
}

export default Admin;