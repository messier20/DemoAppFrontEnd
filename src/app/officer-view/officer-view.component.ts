import {Component, OnInit} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataStorageService} from "../services/data-storage-service.service";
import {BackendService} from "../services/backend.service";

@Component({
  selector: 'app-officer-view',
  templateUrl: './officer-view.component.html',
  styleUrls: ['./officer-view.component.css']
})
export class OfficerViewComponent implements OnInit {

  public isCollapsed = false;
  public ob;
  leases;

  constructor(private dataService: DataStorageService, private backendService: BackendService) {

  }

  ngOnInit() {
    // this.ob = [
    //   // this.dataService.getPrivateInfo(),
    //   // this.dataService.getLeasingModel(),
    // ];
    this.refresh();
  }



  refresh() {
    this.backendService.getAllPosts()
      .then(data => {
        this.leases = data;
        console.log('subscribe', this.leases)
      });
  }

}
