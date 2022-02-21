import { ComponentImage } from "./componentImage";

export interface ComponentDetailDto{
    componentId:number;
    componentName:string;
    imagePath:string;
    componentImages:ComponentImage[]
}