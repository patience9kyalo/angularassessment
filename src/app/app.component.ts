import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WheelComponent } from './wheel/wheel.component';
import { InputComponent } from './input/input.component';
import { TalkativeDirective } from './Directive/talkative.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WheelComponent,InputComponent,TalkativeDirective,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_assessment';
}
