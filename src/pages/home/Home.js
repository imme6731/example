import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { nowPlaying } from "../../api";

const MainBanner = styled.section`
  height: 80vh;
  padding: 400px 5%;
  h3,
  p {
    position: relative;
  }
  h3 {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 1;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 30%,
    rgba(143, 143, 143, 1) 76%,
    rgba(255, 255, 255, 1) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowPlayingData(results);
        setLoading(false);
      } catch (error) {
        console.log("에러:" + error);
      }
    })();
  }, []);

  // console.log(nowPlayingData);
  // console.log(loading);

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div>
          {nowPlaying && (
            <>
              <MainBanner>
                <Bg />
                <h3>{nowPlayingData[0].title}</h3>
                <p>{nowPlayingData[0].overview}</p>
              </MainBanner>
            </>
          )}
        </div>
      )}
    </>
  );
};
