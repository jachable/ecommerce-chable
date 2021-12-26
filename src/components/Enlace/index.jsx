import React, {useState, useEffect} from 'react';
import {styles} from './styles.jsx'
import { NavLink } from "react-router-dom";
import Categoria from "../Mocks/Categoria";

const Enlace = () => {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        const promesaCat = new Promise((resolve, reject) => {
            resolve(Categoria);
        });

        promesaCat.then((resolve) => setCategorias(resolve));
    }, []);

    return (
        <>
        {
            categorias.map((categoria) => {
                return (
                    <li key={categoria.catId}>
                        <NavLink style={styles.link} to={`${categoria.ruta}`}> {categoria.nombre}</NavLink>
                    </li>
                );
            })
        }
        </>
    );
}

export default Enlace;