import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-data/dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'angular-essentials';

    users = DUMMY_USERS;
    selectedUserId?: string;

    get selectedUser() {
        return this.users.find(user => user.id === this.selectedUserId);
    }

    onSelectUser(id: string) {
        this.selectedUserId = id;
    }
}
