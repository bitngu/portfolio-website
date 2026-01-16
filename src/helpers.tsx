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

export default {
    useWidth,
}