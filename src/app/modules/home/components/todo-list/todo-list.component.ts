import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('list') || '[]'
  );

  ngDoCheck(): void {
    this.setLocalSotrage();
  }

  public setEmitTaskList = (value: string): void => {
    this.taskList.push({ checked: false, task: value });
  };

  public deleteItemTaskList = (index: number): void => {
    this.taskList.splice(index, 1);
  };

  public deleteAllTasks = (): void => {
    window.confirm('Você deseja realmente desejar deletar todas as tarefas?');
    this.taskList = [];
  };

  public checkIsEmpty = (index: number): void => {
    if (!this.taskList[index].task.length) {
      window.confirm('Tarefa vazia, deseja deletar?');
      this.deleteItemTaskList(index);
    }
  };

  public setLocalSotrage = (): void => {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
    localStorage.setItem('list', JSON.stringify(this.taskList));
  };
}
