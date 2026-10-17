
import "./App.css";
import painting from "./assets/painting.jpeg";
import { useNavigate } from "react-router-dom";

function Page1() {
  const navigate = useNavigate();

  return (
    <main className="landing-page">
      <section className="card-stage">

        {/* Card 1: Info card */}
        <article className="card card-red">
          <div className="red-heading">
            <h1>Samiksha Paramesh</h1>
            <p className="subtitle">Artist</p>
          </div>

          <div className="red-details">
            <p onClick={() => navigate("/home")}>
              Home
            </p>

            <p onClick={() => navigate("/about")}>
              About
            </p>

            <p onClick={() => navigate("/works")}>
              My Works
            </p>
          </div>
        </article>

        {/* Card 2: Painting */}
        <article className="card card-art">
          <img
            src={painting}
            alt="My custom painting"
            className="painting"
          />

          <div className="art-caption">
            <h2>Samiksha Paramesh</h2>
            <p>Artist</p>
          </div>
        </article>

      </section>
    </main>
  );
}

export default Page1;
