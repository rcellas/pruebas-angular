import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  onLoaded(img:string){
    // console.log('imagen cargada desde el padre', img)
  }
  toggleImg(){
    this.showImg = !this.showImg;
  }
}
