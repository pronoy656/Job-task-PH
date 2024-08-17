import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { userCreate, updateUserProfile } = useContext(AuthContext);

  //   success Message
  const [success, setSuccess] = useState("");
  // error message
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const PhotoUrl = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const allInputField = { name, PhotoUrl, email, password };
    console.log(allInputField);

    // success and error msg clear
    setSuccess("");
    setError("");

    userCreate(email, password)
      .then((createUser) => {
        const user = createUser.user;
        console.log(user);
        setSuccess("Account created Successfully");
        toast.success("account created successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.code;
        console.log(errorMessage, errorCode);
        setError("No account create");
        toast.error("already uuse this account");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
            <h1>
              Already have an account ? Please{" "}
              <Link to={"/logIn"}>
                <span className="text-red-500">Sign in</span>
              </Link>
            </h1>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
