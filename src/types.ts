export interface Task {
    title: string;
}

export interface GroupTasks {
    [title: string]: Task[];
}

export type ButtonsType = 'default' | 'fill';

export type ButtonSize = 's' | 'm' | 'l';

export type InputType = 'default' | 'fill';

export type InputSize = 's' | 'm' | 'l';
