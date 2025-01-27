import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-data/dummy-tasks';
import { NewTaskData } from './task/task.model';

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks = DUMMY_TASKS;

    constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate,
            userId: userId
        });
        this.saveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
