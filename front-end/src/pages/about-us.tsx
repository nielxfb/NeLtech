import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    document.title = "NeLtech - About Us";
  }, []);

  return <div>AboutUs</div>;
}

export default AboutUs;
