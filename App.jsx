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
          src="/denex-banner.jpg"
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

          <a href="https://instagram.com/" target="_blank">
            Instagram
          </a>

          <a href="https://tiktok.com/" target="_blank">
            TikTok
          </a>

          <a href="https://facebook.com/" target="_blank">
            Facebook
          </a>

          <a href="https://twitter.com/" target="_blank">
            X / Twitter
          </a>

          <a href="https://youtube.com/" target="_blank">
            YouTube
          </a>

          <a href="https://spotify.com/" target="_blank">
            Spotify
          </a>

          <a href="https://audiomack.com/" target="_blank">
            Audiomack
          </a>

          <a href="https://soundcloud.com/" target="_blank">
            SoundCloud
          </a>

        </div>

      </section>

    </div>
  );
}

export default App;