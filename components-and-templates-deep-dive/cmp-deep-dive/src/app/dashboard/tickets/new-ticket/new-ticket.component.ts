import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, ViewChild, viewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter();
  add = output<{ title: string, text: string }>();

  enteredTitle = '';
  enteredText = '';

  ngOnInit(): void {
    console.log('ON INIT');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    // alert(titleText + " " + ticketText);
    // this.form?.nativeElement.reset();
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    // this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
