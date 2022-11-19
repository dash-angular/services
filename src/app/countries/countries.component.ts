import { Component, OnInit } from '@angular/core'
import { CserviceSevice } from '../cservice.service'

@Component({
    selector:'app-countries',
    templateUrl:'./countries.component.html',
    styleUrls:['./countries.component.css']
})

export class CountriesComponent implements OnInit{
    
public data:any;

    constructor(private _service:CserviceSevice ) { }
    ngOnInit(): void {
        this._service.getCountries().subscribe(
            (response: any[])=>{
              this.data = response;
              console.log(this.data);

            },
            (error: any)=>{
              console.error(error);
            }
          )

        }

    }
