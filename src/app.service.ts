import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google'
    }

    return {
      message: 'User information from google',
      user: req.user
    }
  }

  fbLogin(req){
    if(!req.user){
      return 'No user '
    }
    
    return{
      message : `Welcome ${req.user.displayName}`,
      user : req.user,
    }
  }

}