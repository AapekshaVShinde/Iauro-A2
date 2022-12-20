import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {



  constructor() { }

  messageAlert()
  {
    alert("Task Done Sucessfully");
  }
  
}
