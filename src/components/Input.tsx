import React, { ChangeEvent } from 'react';

type InputPropsType = {
    name: string
    type: string
    value: number
    max?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputPropsType) => {
    const {
        name,
        type,
        value,
        max,
        ...otherProps
    } = props
    return (
            <input
                name={name}
                type={type}
                value={value}
                max='255'
                {...otherProps}
            />
    );
};

export default Input;