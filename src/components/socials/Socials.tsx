import React from 'react';
import { GrFacebook, GrInstagram } from 'react-icons/gr';
import styles from './socials.module.scss';

const Socials: React.FC = () => {
    return (
        <div className={styles.container}>
            <a
                className={styles.icon}
                href="https://www.facebook.com/superior.makeup.and.fx"
                target="_blank"
                rel="noreferrer"
            >
                <GrFacebook></GrFacebook>
            </a>
            <a
                className={styles.icon}
                href="https://www.instagram.com/makeup_superior/"
                target="_blank"
                rel="noreferrer"
            >
                <GrInstagram></GrInstagram>
            </a>
        </div>
    );
};

export default React.memo(Socials);
