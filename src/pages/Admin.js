import React, { useState, useEffect } from "react";
import { Container, Form, Button, ListGroup, Row, Col, InputGroup } from "react-bootstrap";
import { getCourses, addCourse, updateCourse, deleteCourse } from "../services/api/api";
import Header from "../components/Header";

function Admin() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    id: null,
    tite: "",
    subtitle: "",
    price: "",
    description: ""
  });

  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  // Load data products dari API
  const loadCourses = async () => {
    setLoading(true);
    try {
      const data = await getCourses();
      setCourses(data);
      setFilteredCourses(data);
    } catch (error) {
      alert("Gagal load data");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  // Filter realtime berdasarkan search
  useEffect(() => {
    if (!search) {
      setFilteredCourses(courses);
    } else {
      const lowerSearch = search.toLowerCase();
      setFilteredCourses(
        courses.filter(
          (c) =>
            c.tite.toLowerCase().includes(lowerSearch) ||
            c.subtitle.toLowerCase().includes(lowerSearch) ||
            c.description.toLowerCase().includes(lowerSearch)
        )
      );
    }
  }, [search, courses]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.tite || !formData.subtitle || !formData.price) {
      alert("Judul, subjudul, dan harga wajib diisi");
      return;
    }

    try {
      if (formData.id) {
        // Update existing course
        await updateCourse(formData.id, formData);
        alert("Produk berhasil diperbarui");
      } else {
        // Add new course
        await addCourse(formData);
        alert("Produk berhasil ditambahkan");
      }
      setFormData({ id: null, tite: "", subtitle: "", price: "", description: "" });
      await loadCourses();
    } catch (error) {
      alert("Gagal menyimpan data");
    }
  };

  const handleEdit = (course) => {
    setFormData({
      id: course.id,
      tite: course.tite,
      subtitle: course.subtitle,
      price: course.price,
      description: course.description || ""
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus produk ini?")) return;
    try {
      await deleteCourse(id);
      alert("Produk berhasil dihapus");
      await loadCourses();
    } catch (error) {
      alert("Gagal menghapus produk");
    }
  };

  return (
    <>
      <Header showCategory />
      <Container style={{ maxWidth: 600, marginTop: "2rem" }}>
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
          {/* Optional: description */}
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              as="textarea"
              placeholder="Deskripsi (opsional)"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            {formData.id ? "Update Produk" : "Tambah Produk"}
          </Button>
        </Form>

        <Form.Control
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-3"
        />

        <ListGroup>
          {loading && <div className="text-center">Loading...</div>}
          {!loading && filteredCourses.length === 0 && (
            <div className="text-center">Tidak ada produk ditemukan.</div>
          )}
          {!loading &&
            filteredCourses.map((course) => (
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
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(course.id)}
                  >
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