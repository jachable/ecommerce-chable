import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import ItemDetailUnique from "../Mocks/ItemDetailUnique.jsx";

const ItemDetailContainer = (props) => {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const getItems = new Promise((resolve, rejected) => {
            resolve(ItemDetailUnique)
        });
        getItems.then((resolve) => {
            setTimeout(() => setDetail(resolve), 2000);
        });

    }, [detail]); //Porqué agregar detail (?)

    return (
        <ItemDetail ItemDataDetail={detail}/>
    )
}
export default ItemDetailContainer;