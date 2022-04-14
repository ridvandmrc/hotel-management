import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatSelectChange } from '@angular/material/select'

import { TableComponent } from './table.component'

describe('TableComponent', () => {
  let component: TableComponent
  let fixture: ComponentFixture<TableComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should filter data by rate', () => {
    const nativeElement = fixture.nativeElement
    const selectElement = nativeElement.querySelector('mat-select')
    fixture.componentInstance.selectChange(
      new MatSelectChange(selectElement, '4'),
    )
    fixture.detectChanges()
    expect(fixture.componentInstance.dataSource.filteredData.length).toBe(1)
  })

  it('should filter data by searching', () => {
    fixture.componentInstance.filteredData = 'Boron'
    fixture.componentInstance.ngOnChanges()
    fixture.detectChanges()
    console.log(
      JSON.stringify(fixture.componentInstance.dataSource.filteredData),
    )
    expect(fixture.componentInstance.dataSource.filteredData.length).toBe(2)
  })

  it('should get array from number', () => {
    expect(fixture.componentInstance.counter(4).length).toBe(4)
  })
})
