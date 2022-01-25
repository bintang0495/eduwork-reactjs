import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./index.scss";

const ValidateForm = () => {
  const initialValues = {
    username: "",
    nama_depan: "",
    nama_belakang: "",
    alamat: "",
    email: "",
    password: "",
    cpassword: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert(
        `
            Login Berhasil!!!

          Username : ` +
          formValues.username +
          `
          Nama : ` +
          formValues.nama_depan +
          ` ` +
          formValues.nama_belakang +
          `
          Alamat : ` +
          (formValues.alamat.length === 0 ? ` - ` : formValues.alamat) +
          `
          Password : ` +
          formValues.password
      );
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.username) {
      errors.username = "Username tidak boleh kosong";
    }
    if (!values.nama_depan) {
      errors.nama_depan = "Nama depan tidak boleh kosong";
    }
    if (!values.email) {
      errors.email = "Email tidak boleh kosong";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Format email salah";
    }
    if (!values.password) {
      errors.password = "Password tidak boleh kosong";
    } else if (values.password.length < 4) {
      errors.password = "Password tidak boleh kurang dari 4 karakter";
    }
    if (!(values.password === values.cpassword)) {
      errors.cpassword = "Password & Konfirmasi Password tidak sama";
    }
    return errors;
  };

  return (
    <div className="container-reg">
      <div className="card">
        <h1 className="card-title text-center">Form Registrasi</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Username <span className="required">* </span>{" "}
            </label>
            <input
              type="text"
              className="form"
              placeholder="Username"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
            <br />
            <p className="required">{formErrors.username}</p>
          </div>
          <div className="form-group">
            <label>
              Nama Depan <span className="required">* </span>
            </label>
            <input
              type="text"
              className="form"
              placeholder="Nama Depan"
              name="nama_depan"
              value={formValues.nama_depan}
              onChange={handleChange}
            />
            <br />
            <p className="required">{formErrors.nama_depan}</p>
          </div>
          <div className="form-group">
            <label>Nama Belakang </label>
            <input
              type="text"
              className="form"
              placeholder="Nama Belakang"
              name="nama_belakang"
              value={formValues.nama_belakang}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Alamat </label>
            <textarea
              className="form"
              placeholder="Alamat"
              name="alamat"
              value={formValues.alamat}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>
              Email <span className="required">* </span>
            </label>
            <input
              type="text"
              className="form"
              placeholder="example@something.com"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <br />
            <p className="required">{formErrors.email}</p>
          </div>
          <div className="form-group">
            <label>
              Password <span className="required">* </span>
            </label>
            <input
              type="password"
              className="form"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <br />
            <p className="required">{formErrors.password}</p>
          </div>
          <div className="form-group">
            <label>Konfirmasi Password</label>
            <input
              type="password"
              className="form"
              name="cpassword"
              value={formValues.cpassword}
              onChange={handleChange}
            />
            <br />
            <p className="required">{formErrors.cpassword}</p>
          </div>
          <div className="text-center">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ValidateForm;
