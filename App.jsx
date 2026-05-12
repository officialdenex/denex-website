toimport "./App.css";

function App() {
  return (
    <div className="app">

      <section className="hero">

        <h1>Denex</h1>

        <p className="genre">
          Rap • Trap • Hip-Hop • Drill Artist
        </p>

        <p className="bio">
          Port Harcourt-born rap, trap, hip-hop, and drill artist
          delivering hard-hitting flows, dark vibes, and authentic
          street energy. Denex blends raw emotion, powerful storytelling,
          and heavy beats to create music that reflects hustle, pain,
          ambition, survival, and the mindset of a fearless new generation.
        </p>

        <button className="stream-btn">
          Stream Latest Release
        </button>

        <img
  src="/file_00000000d954720a87b57161e98.jpg"
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

  <a
    href="https://www.instagram.com/denexworld?igsh=MXZyNzZtMGNkYjJleQ=="
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>

  <a
    href="https://tiktok.com/@iamdenex"
    target="_blank"
    rel="noopener noreferrer"
  >
    TikTok
  </a>

  <a
    href="https://www.facebook.com/share/1D3Pw6Nem7/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Facebook
  </a>

  <a
    href="https://www.youtube.com/@denexmusic"
    target="_blank"
    rel="noopener noreferrer"
  >
    YouTube
  </a>

  <a
    href="https://open.spotify.com/user/31ddbjfv7qpimv3jjvqqlpwsg22m?si=QcZs5Wh4TRasjfC0IIqf7g"
    target="_blank"
    rel="noopener noreferrer"
  >
    Spotify
  </a>

  <a
    href="https://on.soundcloud.com/B6ldvkeuogc3kZeCCs"
    target="_blank"
    rel="noopener noreferrer"
  >
    SoundCloud
  </a>

</div>
</section>

    </div>
  );
}

export default App;