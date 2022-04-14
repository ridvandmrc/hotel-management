import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { HotelInformation, GenericResponse } from '../model/'

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(private http: HttpClient) {}

  getHotels() {
    return this.http.get<GenericResponse<HotelInformation[]>>(
      'https://reqres.in/api/products/3',
    )
  }
}
