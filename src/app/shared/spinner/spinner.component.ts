import { Component, OnInit } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  preloader$: Observable<any>;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    const selecRegistration = (state: any) => state.registration;
    const selectPreloader = createSelector(
      selecRegistration,
      (state: any) => state.loadingStatus
    );

    this.preloader$ = this.store.select(selectPreloader);
  }
}
