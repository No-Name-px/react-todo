import React from 'react';
import './Button.css';
import { ButtonSize, ButtonsType } from '../../types';

interface Props {
    title: string;
    onClick: () => void;
    type?: ButtonsType;
    size?: ButtonSize;
}

export default function Button(props: Props) {
    const { title, onClick, type = 'default', size = 'm' } = props;
    return (
        <div className="wrapper">
            <button
                onClick={onClick}
                className={
                    'button button-reset ' +
                    ` button_type_${type}` +
                    ` button_size_${size}`
                }
            >
                {title}
            </button>
        </div>
    );
}
