import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { HomeService } from 'src/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeServices: HomeService) {}

  ngOnInit(): void {}

  getUsers() {
    this.homeServices.getUsers().subscribe((resp) => {
      console.log('resp', resp);
    });
  }
}
