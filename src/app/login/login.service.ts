import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

@Injectable()

export class LoginService{
    token : string;

    constructor(private router : Router){

    }

    login(email : string, password : string){
        const firebaseConfig = {
            apiKey: "AIzaSyANbcKHrQkCBG0L3et7MIUPRv-f4sAF7Sg",
            authDomain: "listado-personas-fdf2b.firebaseapp.com",
            databaseURL: "https://listado-personas-fdf2b-default-rtdb.firebaseio.com",
            projectId: "listado-personas-fdf2b",
            storageBucket: "listado-personas-fdf2b.appspot.com",
            messagingSenderId: "54055434593",
            appId: "1:54055434593:web:1ea21efa13461232f66d20",
            measurementId: "G-KQS6C61NFS"
          };
      
          const firebase = initializeApp(firebaseConfig);

          const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                user.getIdToken().then(token => {
                    this.token = token;
                    this.router.navigate(['/personas']);
                    console.log(token);
                }
            )
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              });
              
    }

    getIdToken(){
        return this.token;
    }

    isAutenticado(){
      return this.token != null;
    }

    logout(){
      const auth = getAuth();
      auth.signOut().then(
        () => {
          //Para poder asignar un tipo null a cualquier variable 
          //se debe agregar: "strictNullChecks": false en tsconfig.json
          this.token = null;
          this.router.navigate(['login']);

        }
      ).catch( error => console.log("Error de logout: " + console.error())
      )
    }
}