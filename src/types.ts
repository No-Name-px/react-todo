export interface Task {
    title: string;
    category: Category;
    isDragging?: boolean;
}

export type FilteredTasks = Record<Category, Task[]>;

export type Category = 'ToDo' | 'InProgress' | 'Done';

export type ButtonsType = 'default' | 'fill';

export type ButtonSize = 's' | 'm' | 'l';

export type InputType = 'default' | 'fill';

export type InputSize = 's' | 'm' | 'l';
