import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';
  selectedYear = 2020;
  years = [2008, 2009, 2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]

  onChangeYear(d){
    console.log(d)

  }
}
