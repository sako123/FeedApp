import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-dialog',
  template: `
            <span class="example-pizza-party">
              {{info}}
            </span>
            `,
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {

  info: string;
  constructor() { }

  ngOnInit() {
    this.info = 'Komentár bol zmazaný';
  }

}

