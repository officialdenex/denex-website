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
      <h1 style={{ fontSize: "60px" }}>Official Denex</h1>

      {/* Short Bio */}
      <p style={{ fontSize: "20px", color: "#ccc" }}>
        Afrobeat & Trap Music Artist
      </p>

      {/* Artist Image */}
      <img
        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
        alt="Artist"
        style={{
          width: "250px",
          borderRadius: "20px",
          marginTop: "20px",
        }}
      />

      {/* Music Section */}
      <h2 style={{ marginTop: "40px" }}>Latest Song</h2>

      <audio controls style={{ marginTop: "20px" }}>
        <source src="your-song.mp3" type="audio/mpeg" />
      </audio>

      {/* Social Links */}
      <div style={{ marginTop: "40px" }}>
        <a
          href="https://instagram.com"
          target="_blank"
          style={{
            color: "white",
            margin: "10px",
            textDecoration: "none",
          }}
        >
          Instagram
        </a>

        <a
          href="https://tiktok.com"
          target="_blank"
          style={{
            color: "white",
            margin: "10px",
            textDecoration: "none",
          }}
        >
          TikTok
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          style={{
            color: "white",
            margin: "10px",
            textDecoration: "none",
          }}
        >
          YouTube
        </a>
      </div>
    </div>
  );
}

export default App;