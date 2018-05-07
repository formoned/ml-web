import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.scss']
})
export class SideBarItemComponent implements OnInit {

  @Input() title: string;
  @Input() route: string;
  @Input() icon: string;
  @Input() isSelected: boolean;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onNavItemTap(navItemRoute: string): void {

    this.router.navigate([navItemRoute]);

  }

}
