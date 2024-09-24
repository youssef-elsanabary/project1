import { Component } from '@angular/core';
import { SecondComponent } from "../second/second.component";
import { Student } from '../_models/student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [SecondComponent,FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  std : Student = new Student(2,"omnia",25,"Damietta")
  show() {
    console.log(this.std);
  }
  updataName(e:string){
    this.std.name = e;
  }
}
