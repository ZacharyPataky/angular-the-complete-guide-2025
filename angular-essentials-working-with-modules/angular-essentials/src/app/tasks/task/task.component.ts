import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    standalone: false
})
export class TaskComponent {
    @Input({ required: true }) task!: Task;

    private tasksService = inject(TasksService);

    onCompleteTask() {
        this.tasksService.removeTask(this.task.id);
    }
}
