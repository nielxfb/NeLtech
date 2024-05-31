import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BackgroundImg = styled.div`
  background-image: url("./home-background.jpeg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30vh;
  color: white;
`;

function Home() {
  useEffect(() => {
    document.title = "NeLtech - Home";
  }, []);

  return (
    <BackgroundImg>
      <h1 className="text-3xl font-bold text-center shadow">
        Welcome to NeLtech
      </h1>
      <Link
        to="/products"
        className="bg-blue-900 py-2 px-4 rounded-md shadow text-center"
      >
        Shop Now
      </Link>
    </BackgroundImg>
  );
}

export default Home;
