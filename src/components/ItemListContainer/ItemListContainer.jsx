import { useEffect, useState } from "react";
import { getProducts } from "../../productsMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {Spinner} from 'reactstrap';

export const ItemListContainer = () => {
    const { categoria } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    setIsLoading(true);
    getProducts()
        .then((resp) => {
        if (categoria) {
            const productsFilter = resp.filter((product) => product.categoria === categoria);
            if(productsFilter.length > 0) {
                setProducts(productsFilter);
            } else {
                setProducts(resp);
            }
        } else {
            setProducts(resp);
        }
        setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, [categoria]);
    return (
    <>
    {isLoading ? <><Spinner /><h2> Loading... </h2></> : <ItemList products={products} />}
    </>
    );
};