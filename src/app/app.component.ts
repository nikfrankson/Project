import { Component } from '@angular/core';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDo-app';
  toastTypes: Array<string> = [];

  constructor(private toastService: ToastService) {
    this.toastTypes = ['success', 'info', 'warning', 'danger'];
   }

  showToast() {

    const rand = Math.floor(Math.random() * 4);
    console.log('Your random number is: ' + rand);
    const toastType = this.toastTypes[rand];
    const toastMessage = 'Your random number is: ' + rand;
    const duration = 5000;
    this.toastService.showToast(toastType, toastMessage, duration);
  }
}
