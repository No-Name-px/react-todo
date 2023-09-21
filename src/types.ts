export interface Task {
    title: string;
}

export interface GroupTasks {
    [title: string]: Task[];
}
