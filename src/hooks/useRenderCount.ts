import { useRef, useEffect } from 'react';

export const useRenderCount = (name: string) => {
  const count = useRef(1);

  useEffect(() => {
    console.log(`${name} rendered ${count.current++}`);
  });
};
