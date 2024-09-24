import { ViewEncapsulation } from '@angular/compiler';
import { Component } from '@angular/core';
import { Student } from '../_models/student';
@Component({
    //selector : ["app-second"] //to be attribute
    //selector : ".app-second" //to be class
    selector: 'app-second',  //to be tag
    standalone: true,
    templateUrl: './second.component.html',
    styleUrl: './second.component.css',
            //to make the style global not only for component//default = emulated
    //encapsulation : ViewEncapsulation.None
})
export class SecondComponent {
    std : Student =new Student(1,"youssef",25,"damietta");
    name = "youssef";
    age = 25;
    isMarried = true;
    n = 2;
    imgSrc = "background.jpg"
}