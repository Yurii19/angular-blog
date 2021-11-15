import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionCreatorProps, Store } from '@ngrx/store';
import { selectOfEducations, selectOfTechs } from '../pages.selectors';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
  styleUrls: ['./registration-container.component.scss'],
})
export class RegistrationContainerComponent implements OnInit {
  education: any = [];
  techs: any = [
    {
      value: 'value',
      viewValue: 'viewValue',
    },
  ];

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute // private router: Router
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectOfEducations)
      .subscribe((data) => (this.education = data));

    this.store.select(selectOfTechs).subscribe((data) => (this.techs = data));

    // let resp = this.route.snapshot.data;
  }

  handleForm(data: any) {
   this.store.subscribe(data =>{ console.log(data)})
    console.log('Emmited form >>> ', data);
  }
}
