import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { ListPage } from '../pages/list/list';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private afAuth: AngularFireAuth, private userService: UserService, private mc: MenuController) {
    this.initializeApp();

    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.rootPage = 'TabsPage';
      } else {
        this.rootPage='LoginPage';
      }
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'TabsPage' },
      { title: 'List', component: ListPage }
    ];

  }

  signOut(){
    this.userService.logout()
    .then(() =>{
      console.log("Signed Out");
      this.mc.close();
    })
    .catch(err => console.log(err));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
