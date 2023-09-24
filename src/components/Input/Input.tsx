import React from 'react';
import { InputSize, InputType } from '../../types';
import './Input.css';

interface Props {
    placeholder?: string;
    type?: InputType;
    size?: InputSize;
    onChange: (value: string) => void;
}

export default function Input(props: Props) {
    const { placeholder = '', size = 'm', type = 'default', onChange } = props;
    return (
        <div className="input-container">
            <input
                type="text"
                className={
                    'input' + ` input_size_${size}` + ` input_type_${type}`
                }
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
