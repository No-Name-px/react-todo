import React from 'react';
import { TaskPlate } from '../TaskPlate';
import { Button } from '../Button';
import './KanbanColumn.css';
import { Task } from '../../types';

interface Props {
    title: string;
    tasks: Task[];
}

export default function KanbanColumn(props: Props) {
    const { title, tasks } = props;
    return (
        <div className="column">
            <div className="header">
                <h2 className="title">{title}</h2>
                <Button></Button>
            </div>
            <div className="tasks">
                {tasks.map((task, index) => {
                    return (
                        <TaskPlate title={task.title} key={index}></TaskPlate>
                    );
                })}
            </div>
        </div>
    );
}
