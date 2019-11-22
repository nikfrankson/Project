import { Component, OnInit } from '@angular/core';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { LocalStorageService } from '../localStorageService';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
export interface IUser {
  id?: number;
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = { username: '', password: '' };
  localStorageService: LocalStorageService<IUser>;
  currentUser: IUser = null;
  constructor(private router: Router, private toastService: ToastService) {
    this.localStorageService = new LocalStorageService('user');
   }

  ngOnInit() {
  }

  login(user: IUser) {
    console.log('from login user ', user);
    const defaultUser: IUser = { username: 'admin', password: 'password' };
    if (user.username !== '' && user.password !== '') {

      if (user.username === defaultUser.username && user.password === defaultUser.password) {
        // log the user in
        // store user in localStorage
        console.log('matches');
        this.localStorageService.saveItemsToLocalStorage(user);
        // navigate to contacts page
        this.router.navigate(['todolist', user]);
      } else {
        // show error toast user
        console.log('from else........');
        this.toastService.showToast('warning', 'Login failed! Please check your username and password', 15000);
      }
    } else {
      // show error toast user
      console.log('from else........');
      this.toastService.showToast('warning', 'Login failed! Please specify your username and password', 15000);
    }

  }

}
