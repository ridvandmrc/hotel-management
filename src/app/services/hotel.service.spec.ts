import { TestBed, async, inject } from '@angular/core/testing'
import { HotelService } from './hotel.service'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'

describe('Service: Hotel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HotelService],
    })
  })

  it('should ...', inject([HotelService], (service: HotelService) => {
    expect(service).toBeTruthy()
  }))

  it('should have getHotels function', () => {
    const service: HotelService = TestBed.get(HotelService)
    // console.log(service.getHotels()) // write reasonable test cases
    expect(service.getHotels).toBeTruthy()
  })
})
