import { useEffect } from "react";
import Navbar from "../components/navbar";

function Home() {
  useEffect(() => {
    document.title = "NeLtech - Home";
  }, []);

  return (
    <div>
      <Navbar />
      Home
    </div>
  );
}

export default Home;
