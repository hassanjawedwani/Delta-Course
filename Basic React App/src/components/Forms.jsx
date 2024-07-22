import { useEffect, useState } from "react";

export default function Forms() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log("useEffect called on password");
  }, []);
  
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="enter username"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleInput}
      />
      <label htmlFor="password">Username</label>
      <input
        type="text"
        placeholder="enter password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInput}
      />
    </div>
  );
}
