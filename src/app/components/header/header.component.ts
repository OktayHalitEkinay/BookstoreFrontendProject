import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentDetailDto } from 'src/app/models/componentDetailDto';
import { ComponentService } from 'src/app/services/component.service';
import { componentId } from './componentId';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  componentDetail: ComponentDetailDto={
    componentId:0,
    componentImages:[],
    componentName:"",
  }
  constructor(private activatedRoute: ActivatedRoute,private componentService:ComponentService) { }

  ngOnInit(): void {
        this.getAllComponentDetailsByComponentId(componentId)   
  }
  getAllComponentDetailsByComponentId(componentId:number){    
    this.componentService.getAllComponentDetailsByComponentId(componentId).subscribe(response=>{
      this.componentDetail=response.data;
    })
  }
}
