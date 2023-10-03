import { Component, OnInit } from '@angular/core';
import { GetNamesService } from '../../../domain/usecases/get-names.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-template-example',
  templateUrl: './template-example.component.html',
  styleUrls: ['./template-example.component.scss']
})
export class TemplateExampleComponent implements OnInit {
  names: Observable<string[]>;

  constructor(getNames: GetNamesService) {
    this.names = getNames.get();
  }

  ngOnInit(): void {
  }

}
