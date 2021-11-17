import { Component, OnInit } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {
  preloader$: Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    const selecRegistration = (state: any) => state.registration;
    const selectPreloader = createSelector(
      selecRegistration,
      (state: any) => state.loadingStatus
    );

    this.preloader$ = this.store.select(selectPreloader)
  }
}
