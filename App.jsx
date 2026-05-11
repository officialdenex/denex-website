const buttonStyle = {
  color: "white",
  textDecoration: "none",
  backgroundColor: "#1a1a1a",
  padding: "12px 20px",
  borderRadius: "12px",
  border: "1px solid #333",
  fontWeight: "bold",
};

function App() {
  return (
    <div
      style={{
        backgroundColor: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      {/* Artist Name */}
      <h1 style={{ fontSize: "60px" }}>Denex</h1>

      {/* Genre */}
      <p style={{ fontSize: "20px", color: "#ccc" }}>
        Rap • Trap • Hip-Hop • Drill Artist
      </p>

      {/* Bio */}
      <p
        style={{
          maxWidth: "700px",
          margin: "20px auto",
          lineHeight: "1.8",
          color: "#aaa",
          fontSize: "18px",
        }}
      >
        Port Harcourt-born rap, trap, hip-hop, and drill artist delivering
        hard-hitting flows, dark vibes, and authentic street energy. Denex
        blends raw emotion, powerful storytelling, and heavy beats to create
        music that reflects hustle, pain, ambition, survival, and the mindset
        of a fearless new generation.
      </p>

      {/* Stream Button */}
      <button
        style={{
          marginTop: "20px",
          padding: "15px 30px",
          backgroundColor: "#ff1e1e",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Stream Latest Release
      </button>

      {/* Artist Image */}
      <img
        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
        alt="Artist"
        style={{
          width: "250px",
          borderRadius: "20px",
          marginTop: "30px",
        }}
      />

      {/* Music Section */}
      <h2 style={{ marginTop: "40px" }}>Latest Release</h2>

      <audio controls style={{ marginTop: "20px" }}>
        <source src="your-song.mp3" type="audio/mpeg" />
      </audio>

      {/* Social & Streaming Links */}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        {/* Social Media */}
        <a href="https://instagram.com" target="_blank" style={buttonStyle}>
          Instagram
        </a>

        <a href="https://tiktok.com" target="_blank" style={buttonStyle}>
          TikTok
        </a>

        <a href="https://facebook.com" target="_blank" style={buttonStyle}>
          Facebook
        </a>

        <a href="https://x.com" target="_blank" style={buttonStyle}>
          X / Twitter
        </a>

        <a href="https://youtube.com" target="_blank" style={buttonStyle}>
          YouTube
        </a>

        <a href="https://snapchat.com" target="_blank" style={buttonStyle}>
          Snapchat
        </a>

        {/* Streaming Platforms */}
        <a href="https://spotify.com" target="_blank" style={buttonStyle}>
          Spotify
        </a>

        <a href="https://audiomack.com" target="_blank" style={buttonStyle}>
          Audiomack
        </a>

        <a href="https://music.apple.com" target="_blank" style={buttonStyle}>
          Apple Music
        </a>

        <a href="https://soundcloud.com" target="_blank" style={buttonStyle}>
          SoundCloud
        </a>

        <a href="https://boomplay.com" target="_blank" style={buttonStyle}>
          Boomplay
        </a>
      </div>
    </div>
  );
}

export default App;