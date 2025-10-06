import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/Appcontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RecruiterLogin = () => {
  const navigate = useNavigate();
  const [state, setState] = useState('Login');
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);

  const { setShowRecruiterLogin, backendUrl, setCompanyToken, setCompanyData } =
    useContext(AppContext);

  const onsubmithandler = async (e) => {
    e.preventDefault();

    // Step 1 of Sign Up (text fields only)
    if (state === 'Sign Up' && !isTextDataSubmited) {
      setIsTextDataSubmited(true);
      return;
    }

    try {
      let response;
      let data;

      if (state === 'Login') {
        response = await axios.post(`${backendUrl}/api/company/login`, {
          email,
          password,
        });
        data = response.data;
      } else if (state === 'Sign Up' && isTextDataSubmited) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        if (image) formData.append('image', image);

        response = await axios.post(`${backendUrl}/api/company/register`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        data = response.data;
      }

      if (data?.success) {
        setCompanyData(data.company);
        setCompanyToken(data.token);
        localStorage.setItem('companyToken', data.token);
        setShowRecruiterLogin(false);
        navigate('/dashboard');
        toast.success(`Welcome ${data.company?.name || 'back'}!`);
      } else {
        toast.error(data?.message || 'Action failed');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 backdrop-blur flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-96 max-w-md relative shadow-lg">
        {/* Close button */}
        <button
          onClick={() => setShowRecruiterLogin(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <img src={assets.cross_icon} alt="Close" className="w-5 h-5" />
        </button>

        <form onSubmit={onsubmithandler} className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Recruiter {state}
            </h1>
            <p className="text-gray-600 text-sm">
              {state === 'Login'
                ? 'Welcome back! Please sign in to continue'
                : 'Create your recruiter account'}
            </p>
          </div>

          {state === 'Sign Up' && isTextDataSubmited ? (
            <div className="text-center space-y-4">
              <label htmlFor="image" className="cursor-pointer block">
                <div className="w-24 h-24 mx-auto border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 overflow-hidden">
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <img
                      src={assets.upload_area}
                      alt="Upload area"
                      className="w-10 opacity-60"
                    />
                  )}
                </div>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  className="hidden"
                  accept="image/*"
                />
              </label>
              <p className="text-sm text-gray-600">Upload company logo</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state !== 'Login' && (
                <div className="relative">
                  <img
                    src={assets.person_icon}
                    alt=""
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  />
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Company Name"
                    type="text"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              )}

              <div className="relative">
                <img
                  src={assets.email_icon}
                  alt=""
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email Id"
                  type="email"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              <div className="relative">
                <img
                  src={assets.lock_icon}
                  alt=""
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  type="password"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              {state === 'Login' && (
                <p className="text-blue-600 text-sm cursor-pointer hover:underline">
                  Forgot password?
                </p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors capitalize"
          >
            {state === 'Login'
              ? 'Login'
              : isTextDataSubmited
              ? 'Create Account'
              : 'Next'}
          </button>

          <div className="text-center text-sm text-gray-600">
            {state === 'Login' ? (
              <p>
                Don't have an account?{' '}
                <span
                  onClick={() => setState('Sign Up')}
                  className="text-blue-600 cursor-pointer hover:underline font-medium"
                >
                  Sign Up
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <span
                  onClick={() => {
                    setState('Login');
                    setIsTextDataSubmited(false);
                  }}
                  className="text-blue-600 cursor-pointer hover:underline font-medium"
                >
                  Login
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecruiterLogin;
