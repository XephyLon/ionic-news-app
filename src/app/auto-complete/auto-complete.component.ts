import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  @Input() public title: string
  @Input() public url: string
  
  ngOnInit() {

  }

}
