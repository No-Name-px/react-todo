import React from 'react';
import './TaskPlate.css';
import { Task } from '../../types';

interface Props {
    task: Task;
    onDragStart: (title: string) => void;
    // onDragEnd: (title: string) => void;
}

export default function TaskPlate(props: Props) {
    const { task, onDragStart } = props;

    const dragStartHandler = () => {
        onDragStart(task.title);
    };

    // const dragEndHandler = (e: React.DragEvent<HTMLElement>) => {
    //     e.preventDefault();
    //     onDragEnd(task.title);
    // };

    return (
        <div className="plate" onDragStart={dragStartHandler} draggable>
            {task.title}
        </div>
    );
}
