import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionCreatorProps, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { GetApplicants } from 'src/app/store/registration.actions';
import { RegistrationService } from 'src/services/registration.service';
import { selectOfEducations, selectOfTechs } from '../../store/pages.selectors';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
  styleUrls: ['./registration-container.component.scss'],
})
export class RegistrationContainerComponent implements OnInit {
  education$: Observable<any>;
  techs$: Observable<any>;

  constructor(
    private store: Store<any>,
    private registration: RegistrationService
  ) {}

  ngOnInit(): void {
    this.education$ = this.store.select(selectOfEducations);
    this.techs$ = this.store.select(selectOfTechs);
  }

  handleForm(data: any) {
    this.registration.saveApplicant(data);

  }
}
