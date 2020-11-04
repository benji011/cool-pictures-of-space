import React, { useEffect, useState } from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";
import GitHubForkRibbon from 'react-github-fork-ribbon';
import "./styles/App.css";
import axios from "axios";

const podNasaUrl = "https://apod.nasa.gov/apod/astropix.html";

function getDate() {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  return today.toISOString().substring(0, 10);
}

function App() {
  const [isLoading, setLoading] = useState(true);
  const [pod, setPod] = useState();
  const podDate = getDate();

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?", {
        params: { date: podDate, api_key: process.env.REACT_APP_API_KEY },
      })
      .then((response) => {
        setPod(response.data);
        setLoading(false);
      })
      .catch(err => {
          console.log(err)
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Loading...</h1>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header" />
      <main className="App-main">
        <SideBySideMagnifier
          className="preview-image"
          imageSrc={pod.url}
          largeImageSrc={pod.hdurl}
          zoomPosition="left"
        />
        <div className="pod-description">
          <h2>
            {pod.copyright ? `${pod.copyright} - ` : ""} {pod.title}
          </h2>
          <p>{pod.explanation}</p>
          <a href={podNasaUrl} target="_blank" rel="noreferrer">
            Sourced from NASA
          </a>
        </div>
        <GitHubForkRibbon href="https://github.com/benji011/cool-pictures-of-space"
                          target="_blank"
                          position="right">
          Fork me on GitHub
        </GitHubForkRibbon>
      </main>
      <footer className="App-footer">
        <p>
          ※ Disclaimer: I don't own these images. Also, full HD might take a
          while to load.{" "}
        </p>
        <a href="https://github.com/benji011/" target="_blank" rel="noreferrer">
          Created & open sourced by Benji011
        </a>
      </footer>
    </div>
  );
}

export default App;
