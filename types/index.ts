import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps 
  {  manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}


export interface CarProps{
  id: number;
year:number;
make:string;
city_mpg: string;
model: string;
type: string;
}