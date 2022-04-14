import {
  Component,
  Input,
  OnInit,
  OnChanges,
  ViewChild,
  AfterViewInit,
} from '@angular/core'
import { MatSelectChange } from '@angular/material/select'
import { MatTableDataSource } from '@angular/material/table'

export interface HotelInformation {
  name: string
  desc: string
  location: string
  rate: number
}

const ELEMENT_DATA: HotelInformation[] = [
  { rate: 1, name: 'Hydrogen', desc: 'Hotel', location: 'Spain' },
  { rate: 2, name: 'Helium', desc: 'Hotel', location: 'Italy' },
  { rate: 3, name: 'Lithium', desc: 'Hotel', location: 'Turkey' },
  { rate: 4, name: 'Beryllium', desc: 'Hotel', location: 'Malta' },
  { rate: 5, name: 'Boron', desc: 'Hotel', location: 'Gebze' },
  { rate: 5, name: 'Boron 2', desc: 'Hotel', location: 'Gebze' },
]

@Component({
  selector: 'hotel-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  selectedRate: string = '1'
  displayedColumns: string[] = ['name', 'desc', 'location', 'rate']
  dataSource = new MatTableDataSource(ELEMENT_DATA)

  /* @ViewChild(MatSort) sort: MatSort; */
  @Input() filteredData: string = ''

  /* ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  } */

  ngOnInit(): void {
    this.dataSource.filterPredicate = function customFilter(data, filter) {
      // filter with
      return (
        data.name.toLocaleLowerCase().startsWith(filter) ||
        data.rate.toString().startsWith(filter)
      )
    }

    this.dataSource.filter = this.filteredData.trim().toLowerCase()
  }

  ngOnChanges() {
    console.log('selected: ', this.selectedRate)
    this.dataSource.filter = this.filteredData.trim().toLocaleLowerCase()

  }

  selectChange(event: MatSelectChange) {
    this.selectedRate = event.value

    this.dataSource.filter = this.selectedRate.trim().toLocaleLowerCase()
    console.log('filtered data: ',this.dataSource.filteredData)
  }

  counter(i: number) {
    return new Array(i);
}
}
