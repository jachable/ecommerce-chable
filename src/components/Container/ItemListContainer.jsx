import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import CatalogMock from "../Mocks/CatalogItem.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [category, setCategory] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        const categoryPromise = new Promise((resolve, rejected) => {
            resolve(CatalogMock)
        });
        categoryPromise.then((resolve) => {
            setTimeout(() => {
                const catFilter = categoriaId 
                ? CatalogMock.filter( item =>
                    item.category === categoriaId
                )
                : resolve;
                setCategory(catFilter);
            }, 2000);
        });

    }, [categoriaId]); //Porqué agregar category (?)

    return (
        <>
            <h1>Productos {categoriaId}</h1>
            <ItemList listaItem={category}/>
        </>
    )
}
export default ItemListContainer;