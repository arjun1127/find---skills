import { useRef } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import "./LoginSignup.css";

const NavBar = () => {
  const navBarRef = useRef(null);

  const closeNavBar = () => {
    if (navBarRef.current && navBarRef.current.classList.contains("show")) {
      navBarRef.current.classList.remove("show");
    }
  };

  const toggleNavBar = () => {
    if (navBarRef.current) {
      navBarRef.current.classList.toggle("show");
    }
  };

  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      const modalInstance = window.bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    };
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      alert(response.data.message || "Sign-up successful!");
      closeModal("signupModal");
      return; // Exit after success
    } catch (error) {
      alert(error.response?.data?.error || "Sign-up failed!");
      console.log(error);
    }
  };
  
  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      console.log(response);
      alert("Login successful!");
      closeModal("loginModal");
    } catch (error) {
      alert(error.response?.data?.error || "Login failed!");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeNavBar}>
          Find @ Skills
        </Link>

        <button className="navbar-toggler" type="button" onClick={toggleNavBar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={navBarRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/programming" onClick={closeNavBar}>
                Programming
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/japanese" onClick={closeNavBar}>
                Japanese
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/electronics" onClick={closeNavBar}>
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/helpMeRead" onClick={closeNavBar}>
                Help Me Read
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chat" onClick={closeNavBar}>
                Ask Expert
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/share" onClick={closeNavBar}>
                Share Anything
              </Link>
            </li>
          </ul>

          <div className="d-flex ms-auto">
            <button
              className="btn btn-outline-light me-2"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </button>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>


      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content login-modal-bg">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSignupSubmit} className="login-form">
                <div className="input-box">
                  <input type="text" name="username" placeholder="Username" required />
                </div>
                <div className="input-box">
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="input-box">
                  <input type="password" name="password" placeholder="Password" required />
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <button className="login-btn">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content login-modal-bg">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleLoginSubmit} className="login-form">
                <div className="input-box">
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="input-box">
                  <input type="password" name="password" placeholder="Password" required />
                </div>
                <button className="login-btn">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default NavBar;
