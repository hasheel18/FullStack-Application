import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
    let navigate = useNavigate();
    const [user, setUser] = useState({ name: "", username: "", email: "" });
    const { name, username, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate("/");
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem"
        }}>
            <div
                style={{
                    background: "#f7faff",
                    borderRadius: "20px",
                    boxShadow: "0 10px 32px #e0e6ed, 0 2px 8px #fff",
                    padding: "2.5rem 2.5rem",
                    width: 420,
                    animation: "adduser-fade-in 0.7s cubic-bezier(.68,-0.55,.27,1.55)"
                }}
            >
                <h2 style={{
                    textAlign: "center",
                    color: "#2645ea",
                    fontWeight: 700,
                    marginBottom: "2rem"
                }}>
                    Register User
                </h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Name" style={{
                            color: "#45507a",
                            fontWeight: 700,
                            fontSize: "1.08rem",
                            letterSpacing: "0.02em",
                            marginBottom: 7
                        }}>
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            style={{
                                borderRadius: 12,
                                border: "1px solid #bed5fd",
                                marginTop: 6
                            }}
                            name="name"
                            value={name}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Username" style={{
                            color: "#45507a",
                            fontWeight: 700,
                            fontSize: "1.08rem",
                            letterSpacing: "0.02em",
                            marginBottom: 7
                        }}>
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            style={{
                                borderRadius: 12,
                                border: "1px solid #bed5fd",
                                marginTop: 6
                            }}
                            name="username"
                            value={username}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" style={{
                            color: "#45507a",
                            fontWeight: 700,
                            fontSize: "1.08rem",
                            letterSpacing: "0.02em",
                            marginBottom: 7
                        }}>
                            E-mail
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            style={{
                                borderRadius: 12,
                                border: "1px solid #bed5fd",
                                marginTop: 6
                            }}
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            background: "linear-gradient(90deg,#2753f3 50%, #5998ff 100%)",
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "1.13rem",
                            border: "none",
                            borderRadius: "14px",
                            padding: "12px 0",
                            marginBottom: 10,
                            marginTop: 8,
                            boxShadow: "0 2px 12px #b6cbe7aa",
                            transition: "background 0.23s"
                        }}
                    >
                        Submit
                    </button>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <button
                            type="button"
                            style={{
                                width: "100%",
                                background: "#b5179e",
                                color: "#fff",
                                fontWeight: 600,
                                fontSize: "1.13rem",
                                border: "none",
                                borderRadius: "14px",
                                padding: "12px 0",
                                boxShadow: "0 2px 12px #e6b6d0aa",
                                transition: "background 0.23s"
                            }}
                        >
                            Cancel
                        </button>
                    </Link>
                </form>
            </div>
            <style>
                {`
        @keyframes adduser-fade-in {
          from { opacity: 0; transform: translateY(40px) scale(0.98);}
          to   { opacity: 1; transform: none; }
        }
        `}
            </style>
        </div>
    );
}
