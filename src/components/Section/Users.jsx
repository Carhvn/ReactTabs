import { useEffect, useState } from "react";

export default function Users() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  async function fetchUser() {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      if (!response.ok) {
        throw new Error("Ошибка загрузки данных");
      }
      const data = await response.json();

      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <section>
      <h2>Пользователи</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.name}
            <br />
            Email: {user.email}
            <br />
            Telephone: {user.phone}
            <br />
            Company: {user.company.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
