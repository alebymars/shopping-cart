import { ReactNode } from 'react';
import styles from "./DualButton.module.css";
import Button from '../Button';

interface Props {
    titleOne: string;
    titleTwo: string;
    onClickOne: () => void;
    onClickTwo: () => void;
    removeButton?: ReactNode;
    style?: React.CSSProperties;
}

const DualButton = ({ titleOne, titleTwo, onClickOne, onClickTwo, removeButton, style }: Props) => {
    return (
        <div className={styles.buttonContainer} style={{ ...style }}>
            <Button title={titleOne} onClick={onClickOne} />
            <Button title={titleTwo} onClick={onClickTwo} />
            {removeButton}
        </div>
    )
};

export default DualButton;
