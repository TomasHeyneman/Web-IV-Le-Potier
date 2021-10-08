import { Component, OnInit } from '@angular/core';
import { KeramiekDataService } from 'src/app/services/keramiek-data.service';
import { Keramiek } from 'src/app/models/keramiek.model';

@Component({
  selector: 'app-keramiek-form',
  templateUrl: './keramiek-form.component.html',
  styleUrls: ['./keramiek-form.component.css']
})
export class KeramiekFormComponent implements OnInit {

  constructor(private _keramiekService: KeramiekDataService) { }

  ngOnInit(): void {
  }

  addNewKeramiek(keramiek: Keramiek) {
    this._keramiekService.addNewKeramiek(keramiek);
  }

}
