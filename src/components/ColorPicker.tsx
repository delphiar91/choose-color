'use client';
import React, { ChangeEvent, FC, useState } from 'react';
import styles from '../styles/ColorPicker.module.scss';
import Input from './Input';
import { ColorsType } from '@/src/app/page';


type Props = {
    onChange: (value: ColorsType) => void
    bgColors: ColorsType
}

const ColorPicker: FC<Props> = ({ onChange, bgColors }) => {
    const [colors, setColors] = useState<ColorsType>(bgColors);
    const { red, green, blue } = colors;
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    const handleColor = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const updColor = { ...colors, [name]: +value };
        if (+value >= 0 && +value <= 255) {
            setColors(updColor);
        }
    };

    const handleClick = () => {
        onChange(colors);
    };

    return (
        <div className={styles.pickerContainer}>
            <div
                className={styles.pickerShape}
                style={{ background: rgbColor }}
            ></div>
            <div className={styles.pickerInputWrapper}>
                <div> Red
                    <Input
                        name="red"
                        type="range"
                        value={red}
                        onChange={handleColor}
                    />
                    <Input
                        name="red"
                        type="number"
                        value={red}
                        onChange={handleColor}
                    />
                </div>
                <div> Green
                    <Input
                        name="green"
                        type="range"
                        value={green}
                        onChange={handleColor}
                    />
                    <Input
                        name="green"
                        type="number"
                        value={green}
                        onChange={handleColor}
                    />
                </div>
                <div> Blue
                    <Input
                        name="blue"
                        type="range"
                        value={blue}
                        onChange={handleColor}
                    />
                    <Input
                        name="blue"
                        type="number"
                        value={blue}
                        onChange={handleColor}
                    />
                </div>
            </div>
            <button
                className={styles.pickerButton}
                onClick={handleClick}
            >Apply
            </button>
        </div>
    );
};

export default ColorPicker;
