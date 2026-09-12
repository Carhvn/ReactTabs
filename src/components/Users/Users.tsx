import { useGetUsersQuery } from "../../services/jsonPlaceholderApi";
import RequestStatus from "../RequestStatus/RequestStatus";
export default function Users() {


  const { data: users = [], isLoading, error } = useGetUsersQuery()
  return (
    <section>
      <h2>Пользователи</h2>
      <RequestStatus loading={isLoading} error={error ? "Error" : null} />
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
