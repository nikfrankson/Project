import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoComponent } from './todo/todo.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ToastModule } from './toast/toast.module';
import { AppRoutes } from './app.routes';
import { Scheduler } from 'rxjs';
import { SchedulerComponent } from './Scheduler/scheduler.component';
import { SchedulerModule } from './Scheduler/scheduler.module';
@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    AppRoutes,
    SchedulerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
