import {
  Component
} from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput = '';
  name = 'Mike';
  todos = [
    "Take out trash",
    "Change baby's diaper",
    "Make dinner",
    "Clean bathroom",
    "Do homework",
    "Read a book"
  ];

  createTodo() {
    console.log(this.todoInput);
    // Pushes text I wrote into the todo array
    this.todos.push(this.todoInput);
    // clear out that input
    this.todoInput = "";
  }

  completeTodo() {

  }
  deleteTodo(chore) {
    console.log('CHORE THAT WAS CLICKED: ' + chore);
    let index = this.todos.indexOf(chore.todos);
    console.log(index);

    this.todos[index] = alert(chore + ' Chore deleted!')
  }

  // deleteTodo(chore:string) {
  //   console.log('CHORE THAT WAS CLICKED: ' + chore);
  //   delete[this.todo.indexOf(chore)];
  //   console.log(chore);

  //   this.todos[chore] = prompt('Chore done!')
  // }

  editTodo(chore) {
    console.log('CHORE THAT WAS CLICKED: ' + chore);
    let index = this.todos.indexOf(chore.todos);
    console.log(index);

    this.todos[index] = prompt('Please write new todo!')
  }


}

