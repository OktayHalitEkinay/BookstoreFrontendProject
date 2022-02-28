import { ComponentImage } from "./componentImage";

export interface ComponentDetailDto{
    componentId:number;
    componentName:string;
    componentImages:ComponentImage[]
}