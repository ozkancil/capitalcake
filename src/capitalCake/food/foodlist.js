import React from 'react'
import { Outlet } from 'react-router-dom';

const FoodList = () => {
  return (
    <>
    <div>FoodList</div>
    <Outlet/>
    </>
  )
}

export default FoodList;