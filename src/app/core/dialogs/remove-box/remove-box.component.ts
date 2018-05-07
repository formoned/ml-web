import {Component, Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-remove-box',
  templateUrl: './remove-box.component.html',
  styleUrls: ['./remove-box.component.scss']
})
export class RemoveBoxComponent implements OnInit {

  constructor(public thisDialogRef : MatDialogRef<RemoveBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }

  onClose(): void {
    this.thisDialogRef.close();
  }

}
