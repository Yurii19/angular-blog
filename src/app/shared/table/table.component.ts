import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectOfApplicants } from 'src/app/store/pages.selectors';
import { RequestApplicants } from 'src/app/store/registration.actions';
import { RegistrationService } from 'src/services/registration.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  applicantsData$ : Observable<any>;

  displayedColumns: string[] = ['name', 'email','education', 'technology'];

  constructor(private store: Store<any>,private registration: RegistrationService) { }

  ngOnInit(): void {
    //this.store.dispatch(RequestApplicants())
    this.applicantsData$ = this.store.select(selectOfApplicants)
  }

}
