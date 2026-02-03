import { useEffect, useState } from "react"

export const useWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    })
    return width
}


export const getRandomId = (length: number = 16): string => {
  return Math.random().toString(36).substring(2, length + 2);
};


export const shuffle = (array: unknown[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const getRandomInt = (num: number): number => {
  return Math.floor(num * Math.random())
}

export const numBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
}

export default {
    useWidth,
    shuffle,
    getRandomId
}