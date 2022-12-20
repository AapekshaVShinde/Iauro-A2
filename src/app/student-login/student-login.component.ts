import { Component } from '@angular/core';
import { AlertServiceService } from '../alert-service.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {

  btnclick()
  {
    const alertservice = new AlertServiceService();
    alertservice.messageAlert(); 

  }

}
