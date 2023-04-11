import { Component, Input, Output, EventEmitter, SimpleChange, OnChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit,OnDestroy {
  // sirve para pasarle un valor desde el padre
  // @Input() img:string ='';
  img: string = '';

  // esto es un setter, es decir, se ejecuta cuando se cambia el valor de la variable
  @Input('img') set changeImg(newImg:string){
    this.img =newImg;
    // console.log('set changeImg',this.img)
  }
  counter = 0;

  // sirve para pasarle un valor del hijo al padre. El EVENTEMITTER es un tipo de dato
  @Output() loaded = new EventEmitter<string>();
  imgDefault='https://www.abc.es/Media/201801/12/la-lluvia--644x362.jpg'
  // contunterFN: number | undefined;
  constructor() {
    // esto se ejecuta cuando se crea el componente y antes del renderizado
    // no se puede redenrizar cosas asincronas
    // console.log('constructor')
  }


  ngOnChanges(changes : SimpleChange){
    // se ejecuta cuando se cambia/ actualiza un input
    // console.log('ngOnChange',changes)
  }

  ngOnInit(): void {
    // se ejecuta cuando se crea el componente y despues del renderizado
    // se puede redenrizar cosas asincronas
    // console.log('ngOnInit')
    // this.contunterFN = window.setInterval(()=>{
    //   this.counter +=1;
    //   console.log('counter', this.counter)
    // }, 1000)
  }

  // corre despues de que el componente se renderiza
  ngAfertViewInit(){
    // se ejecuta cuando se crea el componente y despues del renderizado
    // se puede redenrizar cosas asincronas
    // console.log('afertViewInit')
  }

  ngOnDestroy(){
    // se ejecuta cuando se destruye el componente
    // console.log('ngOnDestroy')
    // window.clearInterval(this.contunterFN)
  }



 imgError(){
  this.img = this.imgDefault;
 }

 imgLoaded(){
  // console.log('imagen cargada')
  this.loaded.emit(this.img)
 }


}
