import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   alert('Clicked!');
  // };

  label = input.required<string>();

  private el = inject(ElementRef);

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<HTMLInputElement | HTMLTextAreaElement>('input');

  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  ngAfterContentInit(): void {
    console.log('AFTER CONTENT INIT');
  }

  onClick() {
    // alert('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
