import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {users.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div className="neu-card">
              <div className="neu-title">{user.name}</div>
              <div className="neu-username">@{user.username}</div>
              <div style={{ marginBottom: "0.75rem" }}>{user.email}</div>
              <Link to={`/viewUser/${user.id}`}>
                <button className="neu-btn">View</button>
              </Link>
              <Link to={`/editUser/${user.id}`}>
                <button className="neu-btn secondary">Edit</button>
              </Link>
              <button
                className="neu-btn danger"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
