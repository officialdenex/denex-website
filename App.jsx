function App() {
  return (
    <div style={{
      background: "#000",
      color: "white",
      minHeight: "100vh",
      fontFamily: "Arial",
    }}>

      {/* Navbar */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid #222"
      }}>
        <h2>Denex</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          color: "#aaa"
        }}>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        padding: "40px"
      }}>
        <h1 style={{
          fontSize: "70px",
          lineHeight: "75px"
        }}>
          Denex <br /> Website
        </h1>

        <p style={{
          color: "#999",
          fontSize: "24px"
        }}>
          Modern websites built on Android 🚀
        </p>

        <button style={{
          marginTop: "30px",
          padding: "18px 40px",
          background: "#2563eb",
          border: "none",
          borderRadius: "16px",
          color: "white",
          fontSize: "22px"
        }}>
          Get Started
        </button>
      </div>
{/* About Section */}
<div style={{
  padding: "40px",
  borderTop: "1px solid #222"
}}>
  <h2 style={{
    fontSize: "40px",
    marginBottom: "20px"
  }}>
    About Me
  </h2>

  <p style={{
    color: "#999",
    fontSize: "20px",
    lineHeight: "35px"
  }}>
    I'm Denex, a web developer building modern websites directly from Android using React and Vite.
  </p>
</div>
{/* Projects Section */}
<div style={{
  padding: "40px",
  borderTop: "1px solid #222"
}}>
  <h2 style={{
    fontSize: "40px",
    marginBottom: "20px"
  }}>
    Projects
  </h2>

  <div style={{
    background: "#111",
    padding: "20px",
    borderRadius: "16px"
  }}>
    <h3>Music Website</h3>
    <p style={{ color: "#999" }}>
      A modern music platform built with React.
    </p>
  </div>
</div>
{/* Contact Section */}
<div style={{
  padding: "40px",
  borderTop: "1px solid #222"
}}>
  <h2 style={{
    fontSize: "40px",
    marginBottom: "20px"
  }}>
    Contact
  </h2>

  <p style={{
    color: "#999",
    fontSize: "20px"
  }}>
    Email: denex@email.com
  </p>
  <div style={{
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  marginTop: "25px"
}}>
  <a
    href="https://instagram.com"
    target="_blank"
    style={{
      color: "white",
      textDecoration: "none",
      background: "#111",
      padding: "12px 20px",
      borderRadius: "12px"
    }}
  >
    Instagram
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
    style={{
      color: "white",
      textDecoration: "none",
      background: "#111",
      padding: "12px 20px",
      borderRadius: "12px"
    }}
  >
    Facebook
  </a>

  <a
    href="https://twitter.com"
    target="_blank"
    style={{
      color: "white",
      textDecoration: "none",
      background: "#111",
      padding: "12px 20px",
      borderRadius: "12px"
    }}
  >
    Twitter
  </a>

  <a
    href="https://tiktok.com"
    target="_blank"
    style={{
      color: "white",
      textDecoration: "none",
      background: "#111",
      padding: "12px 20px",
      borderRadius: "12px"
    }}
  >
    TikTok
  </a>

  <a
    href="https://youtube.com"
    target="_blank"
    style={{
      color: "white",
      textDecoration: "none",
      background: "#111",
      padding: "12px 20px",
      borderRadius: "12px"
    }}
  >
    YouTube
  </a>

  <a
    href="https://github.com"
    target="_blank"
    style={{
      color: "white",
      textDecoration: "none",
      background: "#111",
      padding: "12px 20px",
      borderRadius: "12px"
    }}
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    style={{
      color: "white",
      textDecoration: "none",
      background: "#111",
      padding: "12px 20px",
      borderRadius: "12px"
    }}
  >
    LinkedIn
  </a>
</div>
</div>
</div>
)
}

export default App