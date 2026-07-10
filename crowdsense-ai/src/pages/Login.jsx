import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter Email and Password");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="bg-slate-900 border border-cyan-500 rounded-3xl p-10 w-full max-w-md shadow-2xl">

        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-3">
          CrowdSense AI
        </h1>

        <p className="text-center text-gray-400 mb-8">
          FIFA World Cup 2026 Crowd Monitoring
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-5 px-4 py-3 rounded-xl bg-slate-800 text-white border border-slate-700 outline-none focus:border-cyan-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-3 rounded-xl bg-slate-800 text-white border border-slate-700 outline-none focus:border-cyan-400"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-500 hover:bg-cyan-400 transition py-3 rounded-xl font-bold"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;