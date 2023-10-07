import logo from "./logo.svg";
import "./App.css";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";
import Bottom from "./components/Bottom/Bottom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
function App() {
  // var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");
  // var requestOptions = {
  //   method: "get",
  //   headers: myHeaders,
  //   redirect: "follow",
  // };
  useEffect(() => {
    const call = async () => {
      const data = await axios.get(
        "https://v1.nocodeapi.com/prabhjot31/spotify/IYVpcZBklmjzoYdC/search?q=jaan",
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        }
      );
      console.log(data);
    };
    call();
  }, []);

  // var client_id = "ec66913b7a0049e2a4c792a623f4f252";
  // var client_secret = "2c2cf940e7b644518b4001ae065eab38";
  // var authOptions = {
  //   method: "post",
  //   headers: {
  //     Authorization:
  //       "Basic " +
  //       new Buffer.from(client_id + ":" + client_secret).toString("base64"),
  //   },
  //   form: {
  //     grant_type: "client_credentials",
  //   },
  //   json: true,
  // };
  // useEffect(() => {
  //   fetch("https://accounts.spotify.com/api/token", authOptions).then(function (
  //     error,
  //     response,
  //     body
  //   ) {
  //     if (!error && response.statusCode === 200) {
  //       var token = body.access_token;
  //       console.log(token);
  //     }
  //   });
  // }, []).catch((err) => {
  //   console.log(err);
  // });
  const [hideLeft, sethideLeft] = useState("left");
  const [hideMain, sethideMain] = useState("right");
  const [cross, setcross] = useState("cross");
  return (
    <>
      <div id="the-main">
        <Left
          hideLeft={hideLeft}
          sethideLeft={sethideLeft}
          sethideMain={sethideMain}
          cross={cross}
          setcross={setcross}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Right
                sethideLeft={sethideLeft}
                hideMain={hideMain}
                sethideMain={sethideMain}
                setcross={setcross}
              />
            }
          />
          <Route path="/search" element={<Search />} />
          {/* <Right /> */}
        </Routes>
        <Bottom />
      </div>
    </>
  );
}

export default App;
