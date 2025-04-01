import { useAuth } from "../context/AuthContext";

export function Home() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  console.log(user);

  if (loading) return <h1>Loading</h1>;

  return (
    <div>
      <h1>Welcome {user.displayName || user.email}</h1>
      <img src={user.photoURL} alt="Foto de Perfil" />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
