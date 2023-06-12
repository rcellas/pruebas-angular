import { Component} from '@angular/core';

import { OnExit } from '../../../core/guards/exits/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnExit{

  // ngOnInit(): void {

  // }
  onExit(){
    const rta = confirm('Estas seguro de salir?')
    return rta
  }
}
