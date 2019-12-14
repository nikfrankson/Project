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
  toastTypes: Array<string> = [];
  todos: Array<IToDo> = [];
  inputtask = "";
  toDoParams = '';
  localStorageService: LocalStorageService<IToDo>;
  currentUser: IUser;
  modal: any;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService,
    private router: Router) {
    this.localStorageService = new LocalStorageService('todos');
    this.toastTypes = ['success', 'info', 'warning', 'danger'];
  }
  async ngOnInit() {
    const currentUser = this.localStorageService.getItemsFromLocalStorage('user');
    console.log('from todos component', currentUser);
    if (currentUser == null) {
      await this.router.navigate(['login']);
    } else {
      // if user is logged in go and find any items from local storage and bind 
      // to the view
      const toDoItems = this.localStorageService.getItemsFromLocalStorage('todos');
      if (toDoItems && Array.isArray(toDoItems)) {
        this.todos = toDoItems;
      }
    }
  }

  showToast() {
    for (let i = 0; i < 3; i++) {
      const rand = Math.floor(Math.random() * 9);
      switch (rand) {
        case 0:
          let toastType = 'success';
          let toastMessage = 'Clean your room!';
          let length = 10000;
          this.toastService.showToast(toastType, toastMessage, length);
          break;
        case 1:
          this.toastService.showToast('success', 'Do nothing!', 10000);
          break;
        case 2:
          this.toastService.showToast('success', 'Clean the kitchen', 10000);
          break;
        case 3:
          this.toastService.showToast('success', 'Call your mom!', 10000);
          break;
        case 4:
          this.toastService.showToast('success', 'Take out the trash', 10000);
          break;
        case 5:
          this.toastService.showToast('success', 'Do laundry', 10000);
          break;
        case 6:
          this.toastService.showToast('success', 'Finish homework', 10000);
          break;
        case 7:
          this.toastService.showToast('success', 'Do whatever you are currently putting off', 10000);
          break;
        case 8:
          this.toastService.showToast('success', 'Practice a new skill', 10000);
          break;
        case 9:
          this.toastService.showToast('success', 'Develop a schedule app', 10000);
          break;
      }
    }
  }
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
    this.saveItemsToLocalStorage(this.todos);
  }



  delete(index: number) {
    this.todos.splice(index, 1);
    console.log("index", index);
    this.saveItemsToLocalStorage(this.todos);
  }

  clear() {
    this.todos = [];
    console.log('index', this.todos)
    this.saveItemsToLocalStorage(this.todos);
  }

  update() {
    localStorage.setItem('checkbox', JSON.stringify(this.todos));

  }

  complete() {
    const taskstyle = localStorage.getItem('checkbox')
    const as = document.getElementById('checkbox');
    as.classList.add('done');
  }

  getItemsFromLocalStorage(key: string) {
    const savedToDo = JSON.parse(localStorage.getItem(key));
    console.log('from getItemsFromLocalStorage savedItems', savedToDo);
    return this.localStorageService.getItemsFromLocalStorage(key);
    return savedToDo;
  }


  saveItemsToLocalStorage(todos: Array<IToDo>) {
    todos = this.sortByID(todos);
    return this.localStorageService.saveItemsToLocalStorage(todos);
    const savedToDo = localStorage.setItem('todos', JSON.stringify(todos));
    console.log('from saveItemsToLocalStorage savedToDos: ', savedToDo);
    return savedToDo;
  }

  sortByID(todos: Array<IToDo>) {
    todos.sort((prevToDo: IToDo, presToDo: IToDo) => {

      return prevToDo.id > presToDo.id ? 1 : -1;
    });
    console.log('the sorted ToDos', this.todos);
    return this.todos;
  }

  logout() {
    // clear localStorage
    this.localStorageService.clearItemFromLocalStorage('user');
    // navigate to login page
    this.router.navigate(['']);
  }
}
