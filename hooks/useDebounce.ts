import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    console.log("inside");

    return () => clearTimeout(timer);
  }, [value, delay]);

  console.log("outside");

  return debouncedValue;
};

export default useDebounce;
