import DashboardLayout from "../../layouts/DashboardLayout";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <h2 className="text-xl font-bold">Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </DashboardLayout>
  );
};

export default Profile;