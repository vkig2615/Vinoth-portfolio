import React from "react";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#282c34",
        color: "white",
      }}
    >
      <h1>Welcome DevOps Testing</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* DevOps Tools Images */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg"
          alt="Kubernetes"
          style={{
            width: "150px",
            borderRadius: "10px",
            boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
          }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Git-logo.svg"
          alt="Git"
          style={{
            width: "150px",
            borderRadius: "10px",
            boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
          }}
        />
        <img
          src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"
          alt="Docker"
          style={{
            width: "150px",
            borderRadius: "10px",
            boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
          }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Jenkins_logo.svg"
          alt="Jenkins"
          style={{
            width: "150px",
            borderRadius: "10px",
            boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
          }}
        />
        <img
          src="https://argo-cd.readthedocs.io/en/stable/assets/logo.png"
          alt="ArgoCD"
          style={{
            width: "150px",
            borderRadius: "10px",
            boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
          }}
        />
      </div>
    </div>
  );
}

export default App;
