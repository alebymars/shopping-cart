import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import styles from './Sidebar.module.css';

interface Props {
}

const Sidebar = (props: Props) => {

    const products = useSelector((state: RootState) => state.root.basket);

    const totalPrice = () => {
        return products.reduce((a, b) => a + (b.price * b.count), 0).toFixed(2);
    }

    return (
        <div className={styles.container}>
            <h1>Корзина</h1>
            <p className={styles.total}>Итого: {totalPrice()}₽</p>
            {products.length > 0 && products.map((product) => (
                <div key={product.id} className={styles.basketCard}>
                    <img src={product.image} className={styles.image} alt={product.title} />
                    <div className={styles.info}>
                        <p className={styles.title}>{product.title}</p>
                        <p className={styles.price}>{product.price} руб</p>
                        <p className={styles.count}>Количество: {product.count}</p>
                        <p className={styles.totalPrice}>{(product.count * product.price).toFixed(2)} руб.</p>
                    </div>
                </div>
            )) || <p>Корзина пуста</p>}
        </div>
    )
};

export default Sidebar;
