import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({ name: "", username: "", email: "" });
    const { name, username, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
            <div className="neu-card" style={{ width: 420 }}>
                <h2 style={{ textAlign: "center", color: "#222b45", fontWeight: 700, marginBottom: "2rem" }}>
                    Edit User
                </h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="label-title">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Username" className="label-title">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="label-title">
                            E-mail
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="neu-btn"
                        style={{
                            width: "100%",
                            marginBottom: 10,
                            background: "#2753f3",
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "1.12rem",
                            borderRadius: "18px"
                        }}
                    >
                        Submit
                    </button>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <button
                            className="neu-btn secondary"
                            type="button"
                            style={{
                                width: "100%",
                                background: "#b5179e",
                                color: "#fff"
                            }}
                        >
                            Cancel
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
