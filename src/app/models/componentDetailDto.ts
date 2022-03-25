import { ComponentImage } from "./componentImage";
import { ComponentString } from "./componentString";

export interface ComponentDetailDto{
    componentId:number;
    componentName:string;
    componentImages:ComponentImage[];
    componentStrings:ComponentString[];
}