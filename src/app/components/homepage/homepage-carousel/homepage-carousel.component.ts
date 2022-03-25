import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentDetailDto } from 'src/app/models/componentDetailDto';
import { ComponentService } from 'src/app/services/component.service';
import { componentId } from './componentId';

@Component({
  selector: 'app-homepage-carousel',
  templateUrl: './homepage-carousel.component.html',
  styleUrls: ['./homepage-carousel.component.css']
})
export class HomepageCarouselComponent implements OnInit {
  componentDetail: ComponentDetailDto={
    componentId:0,
    componentImages:[],
    componentName:"",
    componentStrings:[]
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
