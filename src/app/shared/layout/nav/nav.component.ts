import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyModalComponent } from '@app/shared/layout/modals/my-modal.component';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    version = environment.version;

    constructor(private modalService: NgbModal) { }

    ngOnInit(): void { }

    openMyModal() {
      const modalRef = this.modalService.open(MyModalComponent);
      modalRef.componentInstance.id = 1;
      modalRef.result.then((result) => {
        console.log(result);
      });
    }

}
