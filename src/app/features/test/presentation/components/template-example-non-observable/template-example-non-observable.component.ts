import { Component, OnInit } from '@angular/core';
import { GetNamesService } from '../../../domain/usecases/get-names.service';

@Component({
  selector: 'app-template-example-non-observable',
  templateUrl: './template-example-non-observable.component.html',
  styleUrls: ['./template-example-non-observable.component.scss']
})
export class TemplateExampleNonObservableComponent implements OnInit {
  names: string[];

  constructor(getNames: GetNamesService) {
    this.names = [];
    
    getNames.getPromise().then((names) => {
      this.names = names;
    })
  }

  ngOnInit(): void {
  }

}
