import { Component, OnInit } from '@angular/core';
import { ToDo, IToDo } from './todo.model';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../localStorageService';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../login/login.component';
import { ToastService } from '../toast/toast.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'todolist',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class ToDoComponent implements OnInit {
  todos: Array<IToDo> = [];
  inputtask = "";
  toDoParams = '';
  localStorageService: LocalStorageService<ToDo>;
  currentUser: IUser;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.localStorageService = new LocalStorageService('todos');

  }


  private toastService: ToastService;
  async ngOnInit() {
    const currentUser = this.localStorageService.getItemsFromLocalStorage('user');
    console.log('from todos component', currentUser);
    if (currentUser == null) {
      this.router.navigate(['login']);
    }
  }


  // Creating a to do item by clicking on the Enter Button

  addToDo(todo: string) {
    // const li = document.createElement('li');
    // const inputValue = (document.getElementById('myInput') as HTMLInputElement).value;
    // console.log('Input Task is', inputValue);
    // const t = document.createTextNode(inputValue);
    // // li.appendChild(t);
    // // if (inputValue === '') {
    // //   alert('You must input a To Do Task!');
    // // } else {
    // //   document.getElementById('myTask').appendChild(li);
    // // }
    // // (document.getElementById('myInput') as HTMLInputElement).value = '';

    // // const span = document.createElement('SPAN');
    // // const txt = document.createTextNode('\u00D7');
    // // span.className = 'close';
    // // span.appendChild(txt);
    // // li.appendChild(span);
    const td = {
      id: 1,
      task: todo,
      editing: false      
    }
    this.todos.push(td);

}

delete(index: number) {
    this.todos.splice(index, 1);
    console.log("index", index);
}

saveContact(todo: any) {
  console.log('todo', todo);
  let hasError = false;
  Object.keys(todo).forEach((key: any) => {
    console.log('key--->', key, 'contact[key] ', [key]);
    if (todo[key] == null) {
      hasError = true;
      this.toastService.showToast('danger', 'Saved failed! property ${key} must not be null!', 2000);

    }
  });
  if (!hasError) {
    todo.editing = false;
    this.saveItemsToLocalStorage(this.todos);
  }
}



getItemsFromLocalStorage(key: string) {
  const savedContacts = JSON.parse(localStorage.getItem(key));
  console.log('from getItemsFromLocalStorage savedItems', savedContacts);
  return this.localStorageService.getItemsFromLocalStorage(key);
  // return savedContacts;
}

saveItemsToLocalStorage(contacts: Array<ToDo>) {
  contacts = this.sortByID(contacts);
  return this.localStorageService.saveItemsToLocalStorage(contacts);

  // const savedContacts = localStorage.setItem('contacts', JSON.stringify(contacts));
  // console.log('from saveItemsToLocalStorage savedContacts: ', savedContacts);
  // return savedContacts;
}

sortByID(contacts: Array<ToDo>) {
  contacts.sort((prevContact: ToDo, presContact: ToDo) => {

    return prevContact.id > presContact.id ? 1 : -1;
  });
  console.log('the sorted contacts', contacts);
  return this.todos;
}



logout() {
  // clear localStorage
  this.localStorageService.clearItemFromLocalStorage();
  // navigate to login page
  this.router.navigate(['']);
}
}
