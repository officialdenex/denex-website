import "./App.css";

function App() {
  return (
    <div className="app">

      <section className="hero">

        <h1 className="logo">DENEX</h1>

        <p className="artist-bio">
          Rap artist creating emotional music with powerful storytelling
          and heavy beats inspired by hustle, ambition, survival, and street energy.
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

          <a href="https://www.instagram.com/denexworld?igsh=MXZyNzZtMGNkYjJleQ==">
            Instagram
          </a>

          <a href="https://tiktok.com/@iamdenex">
            TikTok
          </a>

          <a href="https://www.youtube.com/@denexmusic">
            YouTube
          </a>

          <a href="https://open.spotify.com/user/31ddbjfv7qpimv3jjvqqlpwsg22m?si=QcZs5Wh4TRasjfC0IIqf7g">
            Spotify
          </a>

          <a href="https://on.soundcloud.com/B6ldvkeuogc3kZeCCs">
            SoundCloud
          </a>

          <a href="https://audiomack.com/thatsdenex">
            Audiomack
          </a>

          <a href="https://whatsapp.com/channel/0029Vb6IS9mGehETfsuX350h">
            WhatsApp Channel
          </a>

        </div>

      </section>

    </div>
  );
}

export default App;