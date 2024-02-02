import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentDate: Date = new Date();

  ngOnInit(): void {
    this.starttime();
  }

  starttime() {
    setInterval(() => {
      this.updateDate();
    }, 1000);
  }

  updateDate() {
    this.currentDate = new Date();
  }
  title = 'newapp';
}
