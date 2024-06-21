import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  private messages: string[] = [
    'Hello, Patience!',
    'You are awesome!',
    'You are Intelligent!',
    'Keep learning!',
    'You are doing great!',
    'You are Amazing!'
  ]

  constructor() { }

  getRandomMessages(){
    let index = Math.floor(Math.random() * this.messages.length)
    return this.messages[index]
  }

  getSpinningWheel(){
    let outcomes = ['Prize 1', 'Prize 2', 'Try Again', '10% Bonus!']
    let index =Math.floor(Math.random() * outcomes.length)
    return outcomes[index]
  }
}
