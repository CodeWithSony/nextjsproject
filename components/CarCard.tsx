// import React from 'react'
"use client";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import { useState } from "react";
// import

export interface carCardProps {
  car: CarProps;
}

const CarCard = ({ car }: carCardProps) => {
  const { id, year, make, model, type, city_mpg } = car;

  const CarRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
             <div className="car-card__content">
              <h2 className="car-card__content-title">{make} {model} </h2>

             </div>
          <p>

          <span>
            {CarRent}
          </span>
          </p>
    </div>
  );
};

export default CarCard;


// 1:32:42
