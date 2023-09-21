import React from 'react';
import './TaskPlate.css';

interface Props {
    title: string;
}

export default function TaskPlate(props: Props) {
    const { title } = props;
    return <div className="plate">{title}</div>;
}
