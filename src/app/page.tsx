'use client';
import styles from '../styles/page.module.scss';
import React, { FC, useEffect, useState } from 'react';
import ColorPicker from '@/src/components/ColorPicker';


export type ColorsType = {
    red: number
    green: number
    blue: number
}

const Home: FC = () => {
    const [bgColors, setColors] = useState<ColorsType>({ red: 255, green: 255, blue: 255 });
    const [loading, setLoading] = useState(true);
    const { red, green, blue } = bgColors;
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    useEffect(() => {
        const getColor = localStorage.getItem('colors');
        if (getColor) {
            setColors(JSON.parse(getColor));
        }
            setLoading(false);
    }, []);

    const handleColor = (colors: ColorsType) => {
        setColors(colors);
        localStorage.setItem('colors', JSON.stringify(colors));
    };

    return (
        <>
            {!loading &&
                <div
                    className={styles.main}
                    style={{ background: rgbColor }}
                >
                    <ColorPicker
                        onChange={handleColor}
                        bgColors={bgColors}
                    />
                </div>
            }
        </>
    );
}

export default Home;