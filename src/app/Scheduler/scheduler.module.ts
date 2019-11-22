import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SchedulerComponent } from './scheduler.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService,
  MonthService, MonthAgendaService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [DayService, WeekService, MonthService, MonthAgendaService, WorkWeekService],
  bootstrap: [SchedulerComponent]
})
export class SchedulerModule { }
