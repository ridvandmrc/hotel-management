import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(private http: HttpClient) {}
  getHotels() {
    return this.http.get<any>('https://reqres.in/api/products/3')
  }
}
