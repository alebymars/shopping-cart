import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../utils/getAllProducts';
import { Product } from '../../store/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setProducts } from '../../store/slices/rootSlice';

const Content = () => {

    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.root.products);

    // const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                // setProducts(data);
                dispatch(setProducts(data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Content</h1>
            {/* <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul> */}
        </div>
    )
};

export default Content;
