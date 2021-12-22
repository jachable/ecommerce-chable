import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import CatalogMock from "../Mocks/CatalogItem.jsx";

const ItemListContainer = (props) => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const categoryPromise = new Promise((resolve, rejected) => {
            resolve(CatalogMock)
        });
        categoryPromise.then((resolve) => {
            setTimeout(() => setCategory(resolve), 2000);
        });

    }, [category]); //Porqué agregar category (?)

    return (
        <ItemList listaItem={category}/>
    )
}
export default ItemListContainer;