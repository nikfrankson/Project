import { TestBed, async } from '@angular/core/testing';
import { SchedulerComponent } from './scheduler.component';

describe('SchedulerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SchedulerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SchedulerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-scheduler-app'`, () => {
    const fixture = TestBed.createComponent(SchedulerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-scheduler-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SchedulerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('my-scheduler-app app is running!');
  });
});
