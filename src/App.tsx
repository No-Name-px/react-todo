import React from 'react';
import './App.css';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';

function App() {
    return (
        <div className="App">
            <div className="container">
                <KanbanBoard></KanbanBoard>
            </div>
        </div>
    );
}

export default App;
