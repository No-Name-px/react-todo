import React, { useMemo, useState } from 'react';
import { KanbanColumn } from '../KanbanColumn';
import './KanbanBoard.css';
import { Task, FilteredTasks, Category } from '../../types';
import dataJSON from '../../data.json';

export default function KanbanBoard() {
    const [tasks, setTasks] = useState(dataJSON as Task[]);
    const [isDragging, setIsDragging] = useState(false);
    const [draggingItemTitle, setDraggingItemTitle] = useState<string | null>(
        null
    );

    const addTaskHandler = (newTask: Task) => {
        setTasks((prev) => [...prev, newTask]);
    };

    const editTaskHandler = (oldTaskTitle: string, newTask: Task) => {
        setTasks((prev) => [
            ...prev.filter((task) => task.title !== oldTaskTitle),
            newTask
        ]);
    };

    const dragStartHandle = (title: string) => {
        setIsDragging(true);
        console.log('setDragging', true);
        setDraggingItemTitle(title);
    };

    const dragOverHandle = (columnTitle: Category) => {
        const oldTask = tasks.find((task) => task.title === draggingItemTitle);
        if (!oldTask || !draggingItemTitle) return;
        editTaskHandler(draggingItemTitle, {
            ...oldTask,
            category: columnTitle
        });
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
        e.preventDefault();

    const dragEndHandler = () => {
        const oldTask = tasks.find((task) => task.title === draggingItemTitle);
        if (!oldTask || !draggingItemTitle) return;
        setIsDragging(false);
        console.log('setDragging', false);
        setDraggingItemTitle(null);
        editTaskHandler(draggingItemTitle, {
            ...oldTask,
            isDragging: false
        });
    };

    const filteredTasks = useMemo(() => {
        return {
            ToDo: [...tasks.filter((task) => task.category === 'ToDo')],
            InProgress: [
                ...tasks.filter((task) => task.category === 'InProgress')
            ],
            Done: [...tasks.filter((task) => task.category === 'Done')]
        } as FilteredTasks;
    }, [tasks]);

    return (
        <div
            className="board"
            onDrop={dragEndHandler}
            onDragOver={handleDragOver}
        >
            {Object.keys(filteredTasks).map((category) => {
                return (
                    <KanbanColumn
                        category={category as Category}
                        tasks={filteredTasks[category as Category]}
                        key={category}
                        onAddTask={addTaskHandler}
                        className={isDragging ? 'drag-active' : ''}
                        onDragStart={dragStartHandle}
                        onDragOver={dragOverHandle}
                    ></KanbanColumn>
                );
            })}
        </div>
    );
}
