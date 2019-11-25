import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService,
  MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
// NOTE: Run npm i @syncfusion/ej2-angular-schedule
import { LocalStorageService } from '../localStorageService';

@Component({
    selector: 'app-scheduler',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='85%' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings" > </ejs-schedule>`,
  templateUrl: './scheduler.component.html'
})
export class SchedulerComponent {
    public data: object[] = [{
        Id: 2,
        Subject: 'Paris',
        // (year, ? but needs to be 1, day, time(HR), Minutes)
        StartTime: new Date(2019, 1, 15, 10, 0),
        EndTime: new Date(2019, 1, 15, 12, 30)
    }];
    public selectedDate: Date = new Date(2019, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: this.data
    };
}
