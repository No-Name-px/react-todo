import React, { useState } from 'react';
import { KanbanColumn } from '../KanbanColumn';
import './KanbanBoard.css';
import { GroupTasks } from '../../types';
import dataJSON from '../../data.json';

export default function KanbanBoard() {
    const [tasks, setTasks] = useState(dataJSON as GroupTasks);

    return (
        <div className="board">
            {Object.keys(tasks).map((key) => {
                return (
                    <KanbanColumn
                        title={key}
                        tasks={tasks[key]}
                        key={key}
                    ></KanbanColumn>
                );
            })}
        </div>
    );
}
