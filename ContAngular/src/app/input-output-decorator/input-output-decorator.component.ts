import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-input-output-decorator',
  templateUrl: './input-output-decorator.component.html',
  styleUrls: ['./input-output-decorator.component.css']
})
export class InputOutputDecoratorComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  @Input() item = "";

  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
