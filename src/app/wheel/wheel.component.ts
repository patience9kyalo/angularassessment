import { Component } from '@angular/core';
import { MessageService } from '../Service/message.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-wheel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.css'
})

export class WheelComponent {

  result: string =''
  

  constructor(private messageService: MessageService){}

    spinWheel(){

      this.result=this.messageService.getSpinningWheel()
      if(this.result === 'Try Again'){
        this.result += '!...You get an extra spin!'
      }
    }
  
}
