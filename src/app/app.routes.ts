import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ToDoComponent } from './todo/todo.component';
import { ToDo } from './todo/todo.model';
import { SchedulerComponent } from './Scheduler/scheduler.component';


const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    }, {
        path: 'todolist',
        component: ToDoComponent
    },    {
        path: 'schedulerpage',
        component: SchedulerComponent
    },
    {
        path: '**',
        component: LoginComponent
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
