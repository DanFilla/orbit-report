import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite'

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  types: string[] = ['Communication',
    'Probe',
    'Space Station',
    'Telescope',
    'Space Debris',
    'Positioning']

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  getCount(prop): number {
    let count = 0;
    for (let sat of this.satellites) {
      if (sat.type === prop) {
        count++
      }
    }
    return count
  }

}
