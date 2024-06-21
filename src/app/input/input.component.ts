import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlaceholderPipe } from "../placeholder.pipe";

@Component({
    selector: 'app-input',
    standalone: true,
    templateUrl: './input.component.html',
    styleUrl: './input.component.css',
    imports: [FormsModule, CommonModule, PlaceholderPipe]
})
export class InputComponent {

  inputValue: string =''

  get isError(){
    return !this.inputValue || this.inputValue.length < 3  
  
  }

}
