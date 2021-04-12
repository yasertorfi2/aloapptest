import { ControlService } from './control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ControlService],
})
export class AppComponent implements OnInit {
  selectedYear = 2015;
  allYears;
  controlsForSelectedYear;

  constructor(private service: ControlService) {
    this.allYears = service.getAllYears();
  }

  ngOnInit(): void {
    this.onChangeYear()
  }

  onChangeYear() {
    this.controlsForSelectedYear = undefined
    const controlsWithYear = this.service.getControlsForCustomYear(
      this.selectedYear
    );
    this.controlsForSelectedYear = controlsWithYear[0].controls
  }
}
