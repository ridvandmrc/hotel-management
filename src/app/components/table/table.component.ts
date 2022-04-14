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
import {Sort,MatSort} from '@angular/material/sort'
import { HotelInformation } from 'src/app/model/Hotel'



const ELEMENT_DATA: HotelInformation[] = [
  { rate: 1, name: 'Hydrogen', description: 'Hotel', location: 'Spain' },
  { rate: 2, name: 'Helium', description: 'Hotel', location: 'Italy' },
  { rate: 3, name: 'Lithium', description: 'Hotel', location: 'Turkey' },
  { rate: 4, name: 'Beryllium', description: 'Hotel', location: 'Malta' },
  { rate: 5, name: 'Boron', description: 'Hotel', location: 'Gebze' },
  { rate: 5, name: 'Boron 2', description: 'Hotel', location: 'Gebze' },
]

@Component({
  selector: 'hotel-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  selectedRate: string = '1'
  displayedColumns: string[] = ['name', 'description', 'location', 'rate']
  dataSource = new MatTableDataSource(ELEMENT_DATA)

  @ViewChild(MatSort) sort: MatSort;
  @Input() filteredData: string = ''

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

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
    this.dataSource.filter = this.filteredData.trim().toLocaleLowerCase()

  }

  selectChange(event: MatSelectChange) {
    this.selectedRate = event.value

    this.dataSource.filter = this.selectedRate.trim().toLocaleLowerCase()
  }

  counter(i: number) {
    return new Array(i);
}
}
