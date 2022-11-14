import { React, useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import { BsSquareFill, BsArrowUpShort } from "react-icons/bs";

export default function ButtonToTop() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(isScrolled => {
        if (
          !isScrolled &&
          (document.body.scrollTop > 160 ||
            document.documentElement.scrollTop > 160)
        ) {
          return true;
        }

        if (
          isScrolled &&
          document.body.scrollTop < 160 &&
          document.documentElement.scrollTop < 160
        ) {
          return false;
        }

        return isScrolled;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {isScrolled && (
        <div
          id="button-to-top-container"
          onClick={() =>
            animateScroll.scrollToTop({
              spy: true,
              smooth: true,
              duration: 500
            })
          }
        >
          <BsSquareFill id="button-to-top" size="2rem" />
          <BsArrowUpShort id="button-to-top-arrow" size="2rem" />
        </div>
      )}
    </>
  );
}
