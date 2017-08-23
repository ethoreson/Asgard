import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-midgard',
  templateUrl: './midgard.component.html',
  styleUrls: ['./midgard.component.css']
})
export class MidgardComponent implements OnInit {
  @Input() lives: number;
  @Output() clickSender = new EventEmitter();
  constructor() { }

  ngOnInit() {
    var midgardNextDiv = document.getElementById('midgardNextDiv');
    midgardNextDiv.style.display = 'none';
  }

}
