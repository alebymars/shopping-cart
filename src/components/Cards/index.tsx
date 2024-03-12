import Card from '@components/Card';
import { Product } from '@store/types';
import styles from './Cards.module.css';

interface Props {
    products: Product[];
}

const Cards = ({ products }: Props) => {
    return (
        <div className={styles.cards}>
            {products?.map((product) => (
                <Card key={product.id} title={product.title} price={product.price} image={product.image} description={product.description} count={product.rating.count} id={product.id} />
            ))}
        </div>
    )
};

export default Cards;
