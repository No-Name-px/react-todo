import React from 'react';
import './Dialog.css';
import { ReactComponent as Close } from '../../icons/close.svg';
import { Button } from '../Button';

interface Props {
    title: string;
    onConfirm: () => void;
    onClose: () => void;
    className: string;
    children?: string | JSX.Element | JSX.Element[];
}

export default function Dialog(props: Props) {
    const { title, onConfirm, onClose, className, children } = props;

    const handleClose = () => {
        onClose();
    };

    const handleConfirm = () => {
        onConfirm();
        onClose();
    };

    return (
        <div className={'dialog-container ' + className}>
            <div onClick={handleClose} className="dialog-bg"></div>
            <div className="dialog">
                <div className="header">
                    <h1 className="title">{title}</h1>
                    <Close onClick={handleClose} className="close"></Close>
                </div>
                <div className="content">{children}</div>
                <div className="footer">
                    <Button
                        title="Save"
                        type="fill"
                        onClick={handleConfirm}
                        size="l"
                    ></Button>
                </div>
            </div>
        </div>
    );
}
