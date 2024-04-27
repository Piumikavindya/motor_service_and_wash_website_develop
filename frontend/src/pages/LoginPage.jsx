import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountId, setAccountId] = useState("");
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Call login function and pass email, password, and accountId
      await login(email, password, accountId);
      
      // Navigate to home page with the accountId
      navigate(`/home/${accountId}`);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  const handleClick = () => {
    logout();
    navigate('/'); 
  };
  
  return (
    <div class="bg-blue-100 text-black flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <a href="#">
      <div
          className="navigation fixed top-0 left-0 w-full z-30 duration-300 bg-white"
          style={{ height: "80px" }}
        >
          <div className="container">
            <nav className="navbar py-2 navbar-expand-lg flex justify-between items-center relative duration-300">
              <a className="navbar-brand" href="index.html">
                <img
                  src="assets/img/new.png"
                  alt="Logo"
                  width="100"
                  height="50"
                />
              </a>
              <button
                className="navbar-toggler focus:outline-none block lg:hidden"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse hidden lg:block duration-300 shadow absolute top-100 left-0 mt-full bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto justify-center items-center lg:flex">
                  <li className="nav-item">
                    <a
                      className="page-scroll active text-white font-bold"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="/service"
                    >
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="/about"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="/network"
                    >
                      Network
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="/offers"
                    >
                      Offers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll text-white font-bold"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>   
            </nav>
          </div>
        </div>
        
      </a>
     
      <div class=" relative mt-12 w-full max-w-lg sm:mt-10">
        <div class="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
        <div class="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div class="flex flex-col p-6 bg-white">
            <h3 class="text-xl font-semibold leading-6 tracking-tighter">Login</h3>
            <p class="mt-1.5 text-sm font-medium text-white/50">Welcome back, enter your credentials to continue.</p>
          </div>
          <div class="p-6 pt-0 bg-white">
            <form onSubmit={handleLogin}>
              <div>
                <div>
                  <div class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div class="flex justify-between">
                      <label class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Email Address</label>
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email Address"
                      class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                      autoFocus
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <div>
                  <div class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div class="flex justify-between">
                      <label class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Account Number</label>
                    </div>
                    <input
                      type="accountId"
                      value={accountId}
                      onChange={(e) => setAccountId(e.target.value)}
                      placeholder="Enter Account Number"
                      class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <div>
                  <div class="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div class="flex justify-between">
                      <label class="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Password</label>
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Password"
                      minLength="6"
                      class="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="mt-4 flex items-center justify-between">
               
                <Link to="/forgot-password" class="text-sm font-medium text-foreground underline">Forgot password?</Link>
              </div>
              <div class="mt-4 flex items-center justify-end gap-x-2">
                <Link to="/signup" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200">Register</Link>
                <button
                  disabled={isLoading}
                  type="submit"
                  class="btn btn-primary"
                >
                  Log in
                </button>
              </div>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
