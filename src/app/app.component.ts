import { Component } from '@angular/core';

export enum worldWeather {
  Monday = 10,
  Tuesday = 20,
  Wednesday,
  Thursday = 25,
  Friday,
  Saturday = 0,
  Sunday
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular9-test-project';
  cityName: string = 'Los Angeles';
  temperature = 'C';

  onenLink(e:any,url:string){
    e.preventDefault();
    window.open(url,'_blank');
  }

  ngOnInit(){
    const c =  document.getElementById('weather1');
    c.innerHTML = `
  <h1>${this.cityName} weather</h1>
  <div>
  <span>Monday</span>
  <span>Tuesday</span>
  <span>Wednesday</span>
  <span>Thursday</span>
  <span>Friday</span>
  <span>Saturday</span>
  <span>Sunday</span>
  </div>
  <div>
  <span>${worldWeather.Monday} ${this.temperature}</span>
  <span>${worldWeather.Tuesday} ${this.temperature}</span>
  <span>${worldWeather.Wednesday} ${this.temperature}</span>
  <span>${worldWeather.Thursday} ${this.temperature}</span>
  <span>${worldWeather.Friday} ${this.temperature}</span>
  <span>${worldWeather.Saturday} ${this.temperature}</span>
  <span>${worldWeather.Sunday} ${this.temperature}</span>
  </div>`
  }
  
}
