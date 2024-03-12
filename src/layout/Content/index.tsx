import React, { useEffect, useState } from 'react';
import Cards from '@/components/Cards';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { resetStore, setProducts } from '@store/slices/rootSlice';
import { Product } from '@store/types';
import { getAllProducts } from '@utils/getAllProducts';
// import usePreventPageUnload from '@hooks/usePreventPageUnload';

const Content: React.FC = () => {

    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.root.products);

    const [isLoading, setIsLoading] = useState(true);


    // const [hasUnsavedChanges, setHasUnsavedChanges] = useState(true);
    // usePreventPageUnload(hasUnsavedChanges);


    useEffect(() => {
        getAllProducts()
            .then((data: Product[]) => {
                dispatch(setProducts(data));
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);


    if (isLoading) {
        return <h1>Loading...</h1>
    }

    // продуктов еще нет
    if (products.length === 0) {
        return <h1>Продуктов еще нет</h1>
    }

    return (
        <div>
            <Button style={{ borderRadius: 7, marginBottom: 10 }} title='Reset Store' onClick={() => dispatch(resetStore())} />
            <Cards products={Object.values(products)} />
        </div>
    )
};

export default Content;
