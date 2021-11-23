import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPreloader } from 'src/app/store/registration.selectors';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  preloader$: Observable<any>;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.preloader$ = this.store.select(selectPreloader);
  }
}
