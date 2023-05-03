import { Component } from '@angular/core';
import { FilesService } from './service/files.service';

import { UsersService } from './service/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';
  imgRta =''
  constructor(
    private UserService: UsersService,
    private fileService: FilesService
  ) {}
  onLoaded(img: string) {
    // console.log('imagen cargada desde el padre', img)
  }
  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.UserService.create({
      name: 'Sebas',
      email: 'sebas@mail.com',
      password: '1212',
    }).subscribe((rta) => {
      console.log(rta);
    });
  }

  downloadPDF() {
    this.fileService
      .getFile(
        'my.pdf',
        'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf',
        'application/pdf'
      )
      .subscribe();
  }

  onUpload(event:Event){
    const element = event.target as HTMLInputElement
    const file = element.files?.item(0)
    if(file){
      this.fileService.uploadFile(file).subscribe(rta=>{
        this.imgRta = rta.location
      })
    }
  }
}
