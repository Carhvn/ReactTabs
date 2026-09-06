import Button from "../components/Button/Button";
import { useNavigate } from "react-router";
import "./WelcomePage.css";
export default function WelcomePage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/content");
  }

  return (
    <main className="welcome">
      <Button onClick={handleClick}>Начать</Button>
    </main>
  );
}
