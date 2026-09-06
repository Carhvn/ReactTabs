import type { User } from "../../Types/api";
import useFetch from "../../hooks/useFetch";
import RequestStatus from "../RequestStatus/RequestStatus";
export default function Users() {
  
  const userRequest = useFetch<User[]>(
     "https://jsonplaceholder.typicode.com/users",
    []
  )

  const users = userRequest.data;
  const loading = userRequest.loading;
  const error = userRequest.error

  return (
    <section>
      <h2>Пользователи</h2>
      <RequestStatus loading={loading} error={error}/>
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
