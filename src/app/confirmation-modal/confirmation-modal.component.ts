import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  modelInstance: NgbModalRef;
  constructor() { }

  ngOnInit() {
  }

  close(): void {
    this.modelInstance.close('no');
  }

  yes(): void {
    this.modelInstance.close('yes');
  }
}
