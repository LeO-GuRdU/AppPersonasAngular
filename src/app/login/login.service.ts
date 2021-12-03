import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from "firebase";

@Injectable()

export class LoginService{
    token : string;

    constructor(private router : Router){

    }

    login(email : string, password : string){
        firebase.auth().singInWithEmailAndPassword(email,password).
            then(
                response => {firebase.auth().correntUser.getIdToken().then(
                    token => {
                        this.token = token;
                    }
                )}
            )this.router.navigate(['/']);
    }

    getIdToken(){
        return this.token;
    }
}