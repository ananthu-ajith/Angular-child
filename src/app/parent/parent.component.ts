import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  tableData = [
    { name: 'John', age: 30, country: 'USA' },
    { name: 'Emily', age: 25, country: 'Canada' },
    { name: 'Daniel', age: 40, country: 'UK' }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('Parent component initialized');
    // Any initialization logic can be placed here
  }

  ngOnDestroy(): void {
    console.log('Parent component destroyed');
    // Any cleanup logic can be placed here
  }

}
