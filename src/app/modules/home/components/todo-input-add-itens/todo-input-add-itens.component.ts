import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrl: './todo-input-add-itens.component.scss',
})
export class TodoInputAddItensComponent {
  @Output() public emitItemTask = new EventEmitter();

  public addItemTaskList: string = '';

  public submitItemTaskList = (): void => {
    this.addItemTaskList && this.emitItemTask.emit(this.addItemTaskList.trim());
    this.addItemTaskList = '';
  };
}
