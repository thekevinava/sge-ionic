import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: false }) ionInfiniteScroll: IonInfiniteScroll;
  // @ViewChild('miInfinito', { static: false }) ionInfiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    if (this.data.length > 50) {
      event.target.complete();
      this.ionInfiniteScroll.disabled = true;
      return;
    }
    console.log('Cargando siguientes...')

    setTimeout(() => {
      const nuevoArray = Array(20);
      this.data.push(...nuevoArray)
      event.target.complete();
    }, 500)
  }

}
