import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-alfheim',
  templateUrl: './alfheim.component.html',
  styleUrls: ['./alfheim.component.css']
})
export class AlfheimComponent implements OnInit {
  @Input() lives: number;
  @Output() clickSender = new EventEmitter();

  alfheimSubmit() {
    var alheimNextDiv = document.getElementById('alheimNextDiv');
    var gold = <HTMLInputElement> document.getElementById('gold');
    if(gold.checked) {
      alheimNextDiv.style.display = 'block';
    } else {
      alheimNextDiv.style.display = 'none';
      this.lives -= 1;
    }
  }
  constructor() { }

  ngOnInit() {
    var alheimNextDiv = document.getElementById('alheimNextDiv');
    alheimNextDiv.style.display = 'none';
  }

}
