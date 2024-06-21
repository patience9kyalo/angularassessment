import { Directive, ElementRef, HostListener } from '@angular/core';
import { MessageService } from '../Service/message.service';


@Directive({
  selector: '[appTalkative]',
  standalone: true
})
export class TalkativeDirective {

  constructor(private elementRef: ElementRef, private messageService: MessageService) { }

  @HostListener('click') onClick() {
    let message = this.messageService.getRandomMessages();
    this.elementRef.nativeElement.innerText = message;
  }
}
