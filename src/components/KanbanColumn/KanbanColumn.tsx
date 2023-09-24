import React, { useState } from 'react';
import { TaskPlate } from '../TaskPlate';
import { Button } from '../Button';
import './KanbanColumn.css';
import { Task } from '../../types';
import { Dialog } from '../DIalog';
import { Input } from '../Input';

interface Props {
    title: string;
    tasks: Task[];
    onAddTask: (newTask: Task) => void;
}

export default function KanbanColumn(props: Props) {
    const { title, tasks, onAddTask } = props;
    const [isDialogActive, isDialogActiveSet] = useState(false);
    const [newTaskTitle, newTaskTitleSet] = useState('');

    const addTaskHandle = () => {
        onAddTask({
            title: newTaskTitle
        });
    };

    const openDialogHandle = () => {
        isDialogActiveSet(true);
    };
    const closeDialogHandle = () => {
        isDialogActiveSet(false);
    };
    const changeTitleHandle = (title: string) => {
        newTaskTitleSet(title);
    };

    return (
        <div className="column">
            <div className="header">
                <h2 className="title">{title}</h2>
                <Button
                    title={'New Task'}
                    onClick={openDialogHandle}
                    size="s"
                ></Button>
            </div>
            <div className="tasks">
                {tasks.map((task, index) => {
                    return (
                        <TaskPlate title={task.title} key={index}></TaskPlate>
                    );
                })}
            </div>
            <Dialog
                title={'Create task ' + title}
                onConfirm={addTaskHandle}
                onClose={closeDialogHandle}
                className={isDialogActive ? 'active' : ''}
            >
                <Input
                    placeholder="Title"
                    size="m"
                    type="fill"
                    onChange={changeTitleHandle}
                ></Input>
            </Dialog>
        </div>
    );
}
