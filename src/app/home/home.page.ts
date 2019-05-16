import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  /**
   * Display items
   */
  displayItems = [
    { id: 1, val: 'One' },
    { id: 2, val: 'Two' },
    { id: 3, val: 'Three' }
  ];

  /**
   * Segment control
   */
  segmentCtrl: FormControl;

  /**
   * Segment control
   */
  dropdownCtrl: FormControl;
  /**
   * Dropdown value
   */
  dropdownVal1: number = 1;

  /**
   * Segment value
   */
  segmentVal1: number = 1;
  /**
   * Dropdown value
   */
  dropdownVal2: number = 1;

  /**
   * Segment value
   */
  segmentVal2: number = 1;

  /**
   * Type of dropdown val
   */
  get typeofDropdownVal1() {
    return typeof this.dropdownVal1;
  }

  /**
   * Type of segment val
   */
  get typeofSegmentVal1() {
    return typeof this.segmentVal1;
  }

  /**
   * Type of dropdown val
   */
  get typeofDropdownVal2() {
    return typeof this.dropdownVal2;
  }

  /**
   * Type of segment val
   */
  get typeofSegmentVal2() {
    return typeof this.segmentVal2;
  }

  ngOnInit() {
    this.dropdownCtrl = new FormControl(1);
    this.segmentCtrl = new FormControl(1);

    this.dropdownCtrl.valueChanges.subscribe(val => this.dropdownVal1 = val);
    this.segmentCtrl.valueChanges.subscribe(val => this.segmentVal1 = val);
  }
}
