import { Injectable } from '@angular/core';
import { INotificationService } from './INotificationService';
import { BaseNotification } from './baseNotification';
declare let toastr: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BaseNotification
{

  constructor() {
    super();
    toastr.options =  this.options;
   }

  success(message: string, title?: string): void {
    toastr.success(message, title);
  }
  error(message: string, title?: string): void {
    toastr.options = {
      "closeButton": true,
    }
    toastr.error(message, title);

  }
  warning(message: string, title?: string): void {
    toastr.options = {
      "closeButton": true,
    }
    toastr.warning(message, title);

  }
  info(message: string, title?: string): void {
    toastr.options = {
      "closeButton": true,
    }
    toastr.info(message, title);

  }
}
