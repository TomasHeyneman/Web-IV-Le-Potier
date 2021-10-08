import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeramiekDataService } from 'src/app/services/keramiek-data.service';
import { Keramiek } from 'src/app/models/keramiek.model';
import { environment } from 'src/environments/environment';
// import { Ng2ImgMaxModule } from 'ng2-img-max';
// import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-keramiek-detail',
  templateUrl: './keramiek-detail.component.html',
  styleUrls: ['./keramiek-detail.component.css']
})
export class KeramiekDetailComponent implements OnInit {
  public keramiek: Keramiek;
  public apiurl = environment.imgApi;


  constructor(private route: ActivatedRoute,
     private keramiekDataService : KeramiekDataService) { }

  ngOnInit() {
    this.route.data.subscribe(i => 
      this.keramiek = i['keramiek']);
  }


}
