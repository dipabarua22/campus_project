import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Show success modal
    Swal.fire({
      title: 'Success!',
      text: 'You have successfully logged in.',
      icon: 'success',
      confirmButtonText: 'Okay'
    }).then((result) => {
      if (result.isConfirmed) {
        // Set redirect to true
        setRedirect(true);
      }
    });
  };

  // Redirect if redirect state is true
  if (redirect) {
    return <Navigate to="/login_details" />;
  }

  return (
    <div className='text-black'>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provide your Valid Email and Password
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered text-black" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered text-black" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;