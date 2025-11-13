import { Employee } from "./Employee";

export type TaskStatus = {
    id: number;
    name: string;
    codename: string;
}

export type Task = {
    id: number;
    title: string;
    description: string;
    due_date: string;
    created_at: string;
    status: string;
}

export type TaskDetail = Task & {
    employee: Employee;
}

export type ApiGetTasks = {
    tasks: Task[];
}

export type ApiGetTask = {
    task: TaskDetail;
}

export type ApiGetTaskStatuses = {
    statuses: TaskStatus[];
}