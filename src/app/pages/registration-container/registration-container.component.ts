import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectOfEducations } from '../pages.selectors';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
  styleUrls: ['./registration-container.component.scss'],
})
export class RegistrationContainerComponent implements OnInit {
  education: any = [];

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store
      .select(selectOfEducations)
      .subscribe((data) => (this.education = data));
  }

  handleForm(data: any) {
    console.log('Emmited form >>> ', data);
  }
}
