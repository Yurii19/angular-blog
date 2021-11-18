import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionCreatorProps, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectOfEducations, selectOfTechs } from '../pages.selectors';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
  styleUrls: ['./registration-container.component.scss'],
})
export class RegistrationContainerComponent implements OnInit {
  education$: Observable<any>;
  techs$: Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.education$ = this.store.select(selectOfEducations);
    this.techs$ = this.store.select(selectOfTechs);
  }

  handleForm(data: any) {
    console.log('Emmited form >>> ', data);
  }
}
