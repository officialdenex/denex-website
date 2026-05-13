import "./App.css";

function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="overlay">
          <h1 className="artist-name">DENEX</h1>

          <p className="artist-bio">
            Rap artist creating emotional music with powerful
            storytelling and heavy beats inspired by hustle, ambition,
            survival, and street energy.
          </p>

          <button className="stream-btn">
            Stream Latest Release
          </button>

          <img
  src="/file_00000000d954720a87b57161e98a89e2.png"
  alt="Denex"
  className="hero-image"
/>
          <h2 className="latest-title">
            Latest Release
          </h2>

          <audio controls className="music-player">
            <source src="/song.mp3" type="audio/mp3" />
          </audio> 

          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;