import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getAllUsers } from "../../api/user.api";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllUsers();
      setUsers(data.users);
    };
    fetch();
  }, []);

  return (
    <DashboardLayout>
      <h2 className="text-xl font-bold mb-4">Manage Users</h2>
      {users.map((user) => (
        <div key={user._id}>{user.name} - {user.email}</div>
      ))}
    </DashboardLayout>
  );
};

export default ManageUsers;