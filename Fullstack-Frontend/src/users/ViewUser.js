import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({ name: "", username: "", email: "" });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  
  const getInitials = (name) =>
    name
      ? name
        .split(" ")
        .map(word => word[0].toUpperCase())
        .join("")
        .slice(0, 2)
      : "";

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
      <div className="neu-card" style={{ width: 420 }}>
        <h2 style={{ textAlign: "center", color: "#3a416f", fontWeight: 700, marginBottom: "2.3rem" }}>
          User Details
        </h2>
        <div className="user-avatar">
          <div className="user-avatar-inner">
            {getInitials(user.name)}
          </div>
        </div>
        <div>
          <div className="label-title">Name</div>
          <div className="value-info">{user.name}</div>
        </div>
        <hr className="section-divider" />
        <div>
          <div className="label-title">Username</div>
          <div className="value-info">@{user.username}</div>
        </div>
        <hr className="section-divider" />
        <div>
          <div className="label-title">E-mail</div>
          <div className="value-info">{user.email}</div>
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button
            className="neu-btn"
            style={{
              width: "100%",
              background: "#2753f3",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.12rem",
              borderRadius: "18px"
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
