import React from 'react';
import './form.css'; // Ensure this path is correct for your CSS file

const Form = () => {
  return (
    <section class="vh-100">
      <div class="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="mobile.jpg" class="img-fluid" alt="Sample" />
          </div>

          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="sign">Sign in with</p>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid name"
                />
                <label className="form-label" htmlFor="form3Example3"></label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="form3Example4"></label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example5"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" htmlFor="form3Example5"></label>
              </div>

              <div className="d-flex align-items-center">
                <div class='inline'>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label id="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <div class='inline'>
                  <a href="#!" id="text-body">Forgot password?</a>
                </div>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0" style={{ color: 'black' }}>
                  Don't have an account? <a href="#!" className="link-danger">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Form;
