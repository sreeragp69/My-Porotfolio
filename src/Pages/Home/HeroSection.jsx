export default function HeroSection() {



  const newTab = url =>{
    window.open(url)
  }
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section-title">Hey, I'm Sreerag</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Full Stack</span>
            {""}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
          Hard-working web developer with a flair for creating elegant solutions in the least amount of time.
          </p>
        </div>
        <button onClick={()=> newTab('https://drive.google.com/file/d/17kGGMsg6XxjVrno1oJB9pkRMiYZkKmhb/view?usp=sharing')}   className="btn btn-primary"  >Download CV</button>
      </div>


      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="" />
      </div>
    </section>
  );
}
