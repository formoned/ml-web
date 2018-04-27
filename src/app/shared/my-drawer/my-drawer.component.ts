import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
// import {alert} from "tns-core-modules/ui/dialogs";

/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
@Component({
    selector: "app-my-drawer",
    templateUrl: "./my-drawer.component.html",
    styleUrls: ["./my-drawer.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class MyDrawerComponent implements OnInit {
    /* ***********************************************************
    * The "selectedPage" is a component input property.
    * It is used to pass the current page title from the containing page component.
    * You can check how it is used in the "isPageSelected" function below.
    *************************************************************/
    @Input() selectedPage: string;

    isSidenavCompact: boolean;

    constructor(private router : Router) {
      if(localStorage.getItem('compact-sidenav') != null) {

        this.isSidenavCompact = false;
      }
      else {
        this.isSidenavCompact = true;
      }
    }
  ngOnInit(): void {
    console.log('bbbbbbbbbbbbbbbbbbbbbb');
    // this.verifyToken();
  }

    logoutUser() {
        localStorage.removeItem('access_token');
        this.router.navigate(['/']);
    }

    /* ***********************************************************
    * The "isPageSelected" function is bound to every navigation item on the <MyDrawerItem>.
    * It is used to determine whether the item should have the "selected" class.
    * The "selected" class changes the styles of the item, so that you know which page you are on.
    *************************************************************/
    isPageSelected(pageTitle: string): boolean {
        return pageTitle === this.selectedPage;
    }

}