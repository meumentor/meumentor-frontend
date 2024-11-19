import { useEffect, useState } from "react";

type WindowSize = Record<'width' |'height', number | undefined>

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({ width: undefined, height: undefined });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}