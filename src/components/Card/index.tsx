import Button from "@/components/Button";
import { Icon20DeleteOutline } from '@vkontakte/icons';
import styles from "./Card.module.css"
import DualButton from "../DualButton";

interface Props {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    count: number;
}

const Card = ({ id, title, price, image, description, count }: Props) => {
    return (
        <div className={styles.card}>
            <img src={image} className={styles.image} alt={title} />
            <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
                <p className={styles.count}>{count}</p>
                <p className={styles.price}>{price}</p>
                <DualButton
                    style={{ marginTop: "10px" }}
                    titleOne={"—"}
                    titleTwo={"+"}
                    onClickOne={() => console.log('Отнять один товар с id: ', id)}
                    onClickTwo={() => console.log('Добавить один товар с id: ', id)}
                    removeButton={<Button title="" icon={<Icon20DeleteOutline color="rgba(0, 140, 255, 1)" width={20} height={20} />} onClick={() => console.log('Удалить из корзины все кол-во товаров с id: ', id)} />}
                />
            </div>
        </div>
    )
};

export default Card;
