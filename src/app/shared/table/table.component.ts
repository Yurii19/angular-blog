import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectOfApplicants } from 'src/app/pages/pages.selectors';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  applicantsData$ : Observable<any>;

  displayedColumns: string[] = ['name', 'email','education', 'technology'];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.applicantsData$ = this.store.select(selectOfApplicants)
  }

}
