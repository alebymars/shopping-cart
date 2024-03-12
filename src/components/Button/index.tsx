import React, { ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
    title: string;
    icon?: ReactNode;
    onClick: () => void;
    style?: React.CSSProperties;
}

const Button = ({ title, icon, onClick, style }: Props) => {
    return <button style={{ ...style }} className={styles.button} onClick={onClick}>{icon} {title}</button>
};

export default Button;
