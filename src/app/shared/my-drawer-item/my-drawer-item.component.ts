import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

/* ***********************************************************
* Keep data that is displayed as drawer items in the MyDrawer component class.
*************************************************************/
@Component({
    selector: "app-my-drawer-item",
    templateUrl: "./my-drawer-item.component.html",
    styleUrls: ["./my-drawer-item.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class MyDrawerItemComponent implements OnInit {
    @Input() title: string;
    @Input() route: string;
    @Input() icon: string;
    @Input() isSelected: boolean;


    // constructor(private routerExtensions: RouterExtensions, private router : Router) {
    constructor(private router : Router) {

    }

  ngOnInit(): void {
    console.log('ccccccccccc');
    // this.verifyToken();
  }

    /* ***********************************************************
    * Use the "tap" event handler of the GridLayout component for handling navigation item taps.
    * The "tap" event handler of the app drawer item <GridLayout> is used to navigate the app
    * based on the tapped navigationItem's route.
    *************************************************************/
    onNavItemTap(navItemRoute: string): void {

      this.router.navigate([navItemRoute]);

    }

    // logoutUser() {
    //     localStorage.removeItem('access_token');
    //     this.router.navigate(['/']);
    // }
}
