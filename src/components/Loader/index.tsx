import React from 'react';
import styles from "./Loader.module.css";

interface Props {
}

const Loader = (props: Props) => {
    return <div className={styles.loading} />
};

export default Loader;
