import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  @Input() transactionHistory: string[] | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
