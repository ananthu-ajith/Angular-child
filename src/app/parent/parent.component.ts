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
    { name: 'Aparna', age: 34, country: 'India' },
    { name: 'Emily', age: 25, country: 'Canada' },
    { name: 'Daniel', age: 40, country: 'UK' },
    { name: 'Arjun', age: 29, country: 'India' },
  { name: 'Ajith', age: 42, country: 'India' },
  { name: 'Alessandro', age: 34, country: 'Italy' }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('Parent component initialized');
  }

  ngOnDestroy(): void {
    console.log('Parent component destroyed');
  }

}
