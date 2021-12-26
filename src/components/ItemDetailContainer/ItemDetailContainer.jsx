import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import CatalogMock from "../Mocks/CatalogItem.jsx";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getItems = new Promise((resolve) => {
            resolve(CatalogMock)
        });
        getItems.then((resolve) => {
            setTimeout(() => {
                const itemFilter = id 
                ? CatalogMock.filter( item =>
                    item.id === id
                )
                : resolve;
                setDetail(itemFilter.shift());
            }, 2000);
        });

    }, [id]); //Porqué agregar detail (?)

    return (
        <ItemDetail detail={detail}/> //Destructuración, nos ahorramos una variable XD
    )
}
export default ItemDetailContainer;