import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from 'passport-facebook'
import {Injectable} from '@nestjs/common';
import {config} from 'dotenv';
config();

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy,'facebook'){
    constructor(){
        super({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: "http://localhost:3000/facebook/callback"
        })
    }

    async validate(accessToken: string, refreshToken: string, profile:any, done): Promise<any>{
        const {id, username, displayName, gender} = profile;
        const user = {
            id : id,
            displayName : displayName,
            username : username,
            gender : gender,
            accessToken,
            refreshToken,
        }
        done(null,user)
    }
}