import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginDetails = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redirect to the login page or homepage after logout
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="card bg-white shadow-xl p-8 max-w-md w-full text-gray-900">
        <h1 className="text-4xl font-bold text-center mb-4">Welcome Back!</h1>
        <p className="text-center text-gray-700 mb-6">
          You have successfully logged in to your account.
        </p>
        <div className="flex flex-col space-y-4">
          <button
            className="btn btn-primary bg-blue-600 text-white hover:bg-blue-700 py-2"
            onClick={() => navigate('/profile')}
          >
            View Profile
          </button>
          <button
            className="btn btn-secondary bg-gray-800 text-white hover:bg-gray-900 py-2"
            onClick={() => navigate('/dashboard')}
          >
            Go to Dashboard
          </button>
          <button
            className="btn btn-danger bg-red-600 text-white hover:bg-red-700 py-2"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
    className="btn btn-primary bg-blue-600 text-white hover:bg-blue-700 py-2"
    onClick={() => navigate('/advisor-scheduling')}
>
    Advisor Scheduling
</button>

        </div>
      </div>
    </div>
  );
};

export default LoginDetails;