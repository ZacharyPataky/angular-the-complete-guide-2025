import { ResolveFn, Routes } from '@angular/router';

import { NewTaskComponent, canLeaveEditPage } from '../tasks/new-task/new-task.component';
import { inject } from '@angular/core';
import { Task } from '../tasks/task/task.model';
import { TasksService } from '../tasks/tasks.service';
import { resolveUserTasks, TasksComponent } from '../tasks/tasks.component';

export const routes: Routes = [
  {
    path: '',
    providers: [TasksService],
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks', // <your-domain>/users/<uid>/tasks
        // loadComponent: () => import('../tasks/tasks.component').then(module => module.TasksComponent),  // Modern LAZY-LOADING
        component: TasksComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage]
      },
    ]
  },
];
