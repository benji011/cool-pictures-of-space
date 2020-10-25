import React, { useEffect, useState } from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";
import "./App.css";
import axios from "axios";

const podNasaUrl = "https://apod.nasa.gov/apod/astropix.html";

function getDate() {
  const today = new Date();
  today.setDate(today.getDate() - 1);

  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return yyyy + "-" + mm + "-" + dd;
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
            {pod.copyright} {" - "} {pod.title}
          </h2>
          <p>{pod.explanation}</p>
          <a href={podNasaUrl} target="_blank" rel="noreferrer">
            Sourced from NASA
          </a>
        </div>
        <a href="https://github.com/benji011/cool-pictures-of-space">
          <img
            loading="lazy"
            width="149"
            height="149"
            src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
            className="attachment-full size-full"
            alt="Fork me on GitHub"
            data-recalc-dims="1"
          />
        </a>
      </main>
      <footer className="App-footer">
        ※ Disclaimer: I don't own these imagses. Also, full HD might take a
        while to load.
      </footer>
    </div>
  );
}

export default App;
