import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Alert } from "./Alert";

export function Login() {
  const navigate = useNavigate();
  const { login, loginWithGoogle, resetPassword } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("Please enter your email");

    try {
      await resetPassword(user.email);
      setError("Hemos enviado un correo para reestalezca tu contrasenia.")
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            onChange={handleChange}
            className="shadow appearance-none border border-red-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fouces:outline-noen focus:shadow-outline"
        >
          Login
        </button>
      </form>
      <a href="#!" onClick={() => handleResetPassword()}>
        Forgot Password?
      </a>
      <button
        className="bg-slate-50 hover:bg-slate-100 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4"
        onClick={handleGoogleSignIn}
      >
        Google Login
      </button>
    </div>
  );
}
