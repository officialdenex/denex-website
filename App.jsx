I'mimport "./App.css";

function App() {
  return (
    <div className="app">

      {/* HERO SECTION */}
      <section className="hero">
        <h1 className="logo">DENEX</h1>

        <p className="bio">
          Rap artist creating emotional music with powerful storytelling
          and heavy beats inspired by hustle, ambition, survival,
          and street energy.
        </p>

        <button className="stream-btn">
          NEW MUSIC SOON
        </button>

        <img
          src="/file_00000000d954720a87b57161e98a89e2.png"
          alt="DENEX"
          className="hero-image"
        />
      </section>

      {/* ARTIST INFO */}
      <section className="info-section">
        <h2>Artist Info</h2>

        <div className="info-box">
          <p><strong>Name:</strong> DENEX</p>
          <p><strong>Genre:</strong> Rap / Emotional Trap</p>
          <p><strong>Role:</strong> Rapper • Artist • Creator</p>
          <p><strong>Country:</strong> Nigeria</p>
          <p><strong>Status:</strong> Independent Artist</p>
        </div>
      </section>

       {/* photo */}
  <section className="gallery-section">
  <h2>Photo Gallery</h2>

  <div className="gallery-grid">
    <img src="/photo1.jpg" alt="Denex" />
    <img src="/photo2.jpg" alt="Denex" />
    <img src="/photo3.jpg" alt="Denex" />
    <img src="/photo4.jpg" alt="Denex" />
  </div>
</section>

      {/* MUSIC SECTION */}
      <section className="music-section">
        <h2>Latest Release</h2>

        <div className="song-card">
          <img
            src="/file_00000000d954720a87b57161e98a89e2.png"
            alt="Song Cover"
            className="song-cover"
          />

          <h3>COMING SOON</h3>

          <p>Debut single loading...</p>

          <audio controls className="music-player">
            <source src="/song.mp3" type="audio/mp3" />
          </audio>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="socials-section">
        <h2>Connect With DENEX</h2>

        <div className="socials">

          <a
            href="https://www.instagram.com/denexworld?igsh=MXZyNzZtMGNkYjJleQ=="
            target="_blank"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@iamdenex"
            target="_blank"
          >
            TikTok
          </a>

          <a
            href="https://www.youtube.com/@denexmusic"
            target="_blank"
          >
            YouTube
          </a>

          <a
            href="https://open.spotify.com/user/31ddbjfv7qpimv3jjvqqlpwsg22m?si=QcZs5Wh4TRasjfC0IIqf7g"
            target="_blank"
          >
            Spotify
          </a>

          <a
            href="https://on.soundcloud.com/B6ldvkeuogc3kZeCCs"
            target="_blank"
          >
            SoundCloud
          </a>

          <a
            href="https://audiomack.com/thatsdenex"
            target="_blank"
          >
            Audiomack
          </a>

          <a
            href="https://whatsapp.com/channel/0029Vb6IS9mGehETfsuX350h"
            target="_blank"
          >
            WhatsApp Channel
          </a>

        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <h2>Bookings & Collaborations</h2>

        <p className="contact-email">
          officialdenex@gmail.com
        </p>
      </section>

    </div>
  );
}

export default App;