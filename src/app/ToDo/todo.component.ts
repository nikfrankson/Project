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
    const td = {
      id: 1,
      task: todo,
      editing: false
    }
    if (todo === '') {
      alert('You must enter in a task TO DO!')
    } else {
      this.todos.push(td);
    }
  }

  delete(index: number) {
    this.todos.splice(index, 1);
    console.log("index", index);
  }

  clear() {
    this.todos = [];
    console.log('index', this.todos)
  }

  // saveContact(todo: any) {
  //   console.log('todo', todo);
  //   let hasError = false;
  //   Object.keys(todo).forEach((key: any) => {
  //     console.log('key--->', key, 'contact[key] ', [key]);
  //     if (todo[key] == null) {
  //       hasError = true;
  //       this.toastService.showToast('danger', 'Saved failed! property ${key} must not be null!', 2000);

  //     }
  //   });
  //   if (!hasError) {
  //     todo.editing = false;
  //     this.saveItemsToLocalStorage(this.todos);
  //   }
  // }



  getItemsFromLocalStorage(key: string) {
    const savedContacts = JSON.parse(localStorage.getItem(key));
    console.log('from getItemsFromLocalStorage savedItems', savedContacts);
    return this.localStorageService.getItemsFromLocalStorage(key);
    // return savedContacts;
  }

  saveItemsToLocalStorage(todos: Array<IToDo>) {
    todos = this.sortByID(todos);
    return this.localStorageService.saveItemsToLocalStorage(todos);

    const savedContacts = localStorage.setItem('contacts', JSON.stringify(todos));
    console.log('from saveItemsToLocalStorage savedContacts: ', savedContacts);
    return savedContacts;
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
