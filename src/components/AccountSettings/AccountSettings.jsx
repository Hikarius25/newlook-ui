import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AccountSettings() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token"); // ✅ Fix đúng key

                console.log("Token:", token);
                if (!token) {
                    console.error("No token found!");
                    alert("Bạn chưa đăng nhập. Vui lòng đăng nhập lại.");
                    return;
                }

                const response = await axios.get("http://localhost:10000/user/me", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log("User Data:", response.data);


                setUser(response.data.result);
            } catch (error) {
                console.error("Error fetching user data:", error);
                if (error.response) {
                    console.error("Response data:", error.response.data);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Account Settings</h2>
            {user ? (
                <div>
                    <p>Email: {user.email}</p>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Date of Birth: {user.dateOfBirth}</p>
                    <p>Roles: {user.roles.join(", ")}</p>
                    <p>Credit: {user.credit}</p>
                </div>
            ) : (
                <p>User not found</p>
            )}
        </div>
    );
}
