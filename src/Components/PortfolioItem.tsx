import { useParams } from "react-router-dom"

export const PortfolioItem = (): React.ReactNode => {
    const item = useParams();

    console.log('hello from portfolio item', item);

    return (
        <h1> HELLO WORLD {item.id} </h1>
    )
}