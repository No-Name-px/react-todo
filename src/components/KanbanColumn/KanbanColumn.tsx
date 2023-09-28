import React, { DragEventHandler, useState } from 'react';
import { TaskPlate } from '../TaskPlate';
import { Button } from '../Button';
import './KanbanColumn.css';
import { Category, Task } from '../../types';
import { Dialog } from '../DIalog';
import { Input } from '../Input';

interface Props {
    category: Category;
    tasks: Task[];
    onAddTask: (newTask: Task) => void;
    className: string;
    onDragStart: (title: string) => void;
    onDragOver: (columnTitle: Category) => void;
    // onDragEnd: () => void;
}

export default function KanbanColumn(props: Props) {
    const {
        category,
        tasks,
        onAddTask,
        className,
        onDragStart,
        onDragOver
        // onDragEnd
    } = props;
    const [isDialogActive, setIsDialogActive] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const addTaskHandle = () => {
        onAddTask({
            title: newTaskTitle,
            category
        });
        setNewTaskTitle('');
    };

    const openDialogHandle = () => {
        setIsDialogActive(true);
    };
    const closeDialogHandle = () => {
        setIsDialogActive(false);
    };
    const changeTitleHandle = (title: string) => {
        setNewTaskTitle(title);
    };
    const dragStartHandler = (title: string) => {
        onDragStart(title);
    };
    const dragOverHandler: DragEventHandler<HTMLElement> = () => {
        onDragOver(category);
    };

    return (
        <div className={`column ${className}`} onDragOver={dragOverHandler}>
            <div className="header">
                <h2 className="title">{category}</h2>
                <Button
                    title={'New Task'}
                    onClick={openDialogHandle}
                    size="s"
                ></Button>
            </div>
            <div className="tasks">
                {tasks.map((task, index) => {
                    return (
                        <TaskPlate
                            task={task}
                            key={index}
                            onDragStart={dragStartHandler}
                        ></TaskPlate>
                    );
                })}
            </div>
            <Dialog
                title={'Create task ' + category}
                onConfirm={addTaskHandle}
                onClose={closeDialogHandle}
                className={isDialogActive ? 'active' : ''}
            >
                <Input
                    value={newTaskTitle}
                    placeholder="Title"
                    size="m"
                    type="fill"
                    onChange={changeTitleHandle}
                ></Input>
            </Dialog>
        </div>
    );
}
