import React, { useState, useEffect } from 'react';

const ScrollToTop = showBelow => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleClick = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleClick);
      return () => window.removeEventListener(`scroll`, handleClick);
    }
  });

  const handleScroll = () => {
    window[`scroll`]({ top: 0, behavior: `smooth` });
  };

  return <div></div>;
};

export default ScrollToTop;
