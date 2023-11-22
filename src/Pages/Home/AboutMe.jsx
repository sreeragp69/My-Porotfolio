export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section-img">
        <img src="./img/about-me.png" alt="Aboutme" />
      </div>

      <div className="hero--section-content-box about--section--box">
        <div className="hero--section-content">
          <p className="section-title">About</p>
          <h1 className="skills--section--heading">About me</h1>
          <p className="hero--section--description">
            Hello, I'm Sreerag.
            I hold a degree in computer science from Emea College, Kondotty,
            and currently, I'm aWeb Developer Intern at {" "}
            <a
              style={{ textDecorationLine: "none", color: "#561128" }}
              href="https://www.luminartechnolab.com/"
            >
              Luminar techno Lab Calicalut
            </a>
          </p>

          <p className="hero--section--description">
            Apart from coding, some other activities that I love to do!
            <ul>
              <li> Playing Games</li>
              <li> Travelling</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}
