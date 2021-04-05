import { Injectable, NgZone } from '@angular/core';
import { Usuario } from "../clases/usuario";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        const userData = localStorage.getItem('user')
        if (userData){
          JSON.parse(userData);
        }
      } else {
        localStorage.setItem('user', "");
        JSON.parse("");
      }
    })
  }

  // Sign in with email/password
  SignIn(email: any, password: any) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
        this.SetUserData(result.user);
      }).catch((error: any) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp(email: any, password: any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result:any) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SetUserData(result.user);
      }).catch((error:any) => {
        window.alert(error.message)
      })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const userData = localStorage.getItem('user')
    if (!userData) return false
    const user = JSON.parse(userData);
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result: any) => {
       this.ngZone.run(() => {
          this.router.navigate(['']);
        })
      this.SetUserData(result.user);
    }).catch((error: any) => {
      window.alert(error)
    })
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: Usuario = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }

}