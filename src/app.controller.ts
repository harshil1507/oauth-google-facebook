import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req)
  }

  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async fbAuth(@Req() req){}
  
  @Get('facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  async fbAuthRedirect(@Req() req){
    return this.appService.fbLogin(req);
  }
}