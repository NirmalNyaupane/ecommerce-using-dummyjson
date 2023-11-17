"use client";
import { useEffect, useState } from "react";
const useDebounce = (value: string, millisecond: number) => {
  const [debounceQuery, setDebounceQuery] = useState(value);
  useEffect(() => {
    const res = setTimeout(() => {
      setDebounceQuery(value);
    }, millisecond);

    return () => clearTimeout(res);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debounceQuery;
};

export default useDebounce;
