import { Component } from '@angular/core';
import { AlertServiceService } from '../alert-service.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent {

  btnclick()
  {
    const alertservice = new AlertServiceService();
    alertservice.messageAlert(); 

  }

}
