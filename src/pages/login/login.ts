import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  error: any;
  user = {} as User;
  loginForm: FormGroup;
  email:string = '';
  password:string = '';

  constructor(private fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private userService: UserService, private afAuth: AngularFireAuth) {
    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(user: User) {
   //this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
   this.userService.login(user)
   .then((success)=>{
     this.navCtrl.setRoot('TabsPage');
   }).catch((err) => {
     this.error = err;
   });
  }

  goToRegistration() {
    this.navCtrl.push('RegisterPage');
  }


}
