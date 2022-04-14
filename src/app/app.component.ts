import { Component, OnInit } from '@angular/core'
import { HotelService } from './services/hotel.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotel-project-angular'
  filter = ''
  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe((data) => {
      console.log(data.data) // data will be here, we will pass to table.component
    })
  }

  onInputChange(data: string) {
    console.log(data)
    this.filter = data
  }
}
