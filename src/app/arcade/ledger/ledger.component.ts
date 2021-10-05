import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  // The transaction ledger which is rendered into the dom
  @Input() transactionHistory: string[] | undefined

  constructor() { }

  ngOnInit(): void {}
}
