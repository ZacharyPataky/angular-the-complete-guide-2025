import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string,
//   name: string,
//   avatar: string
// }

// interface User {
//   id: string,
//   name: string,
//   avatar: string
// }

@Component({
    selector: 'app-user',
    imports: [CardComponent],
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    @Input({ required: true }) user!: User;
    @Input({ required: true }) selected!: boolean;
    @Output() select = new EventEmitter<string>();

    get imagePath() {
        return `users/${this.user.avatar}`;
    }

    onSelectUser() {
        this.select.emit(this.user.id);
    }

    // avatar = input.required<string>();
    // name = input.required<string>();
    // id = input.required<string>();
    // select = output<string>();

    // imagePath = computed(() => {
    // return `users/${this.avatar()}`;
    // });

    // onSelectUser() {
    //   this.select.emit(this.id());
    // }
}
