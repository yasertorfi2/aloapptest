import { ControlService } from './control.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ControlService],
})
export class AppComponent {
  selectedYear: 2020;
  allYears;
  controlsForSelectedYear;

  constructor(private service: ControlService) {
    this.allYears = service.getAllYears();
  }

  onChangeYear() {
    console.log(this.selectedYear)
    this.controlsForSelectedYear = this.service.getControlsForCustomYear(
      this.selectedYear
    );

    console.log(this.controlsForSelectedYear)
  }
}
