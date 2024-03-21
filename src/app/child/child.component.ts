import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input() data!: any[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      console.log('Data changed in child component:', this.data);
    }
  }

  ngOnDestroy(): void {
    console.log('Child component destroyed');
  }

  ngDoCheck(): void {
    console.log('Child component doCheck');
  }

  ngAfterContentInit(): void {
    console.log('Child component afterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Child component afterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Child component afterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Child component afterViewChecked');
  }

}
