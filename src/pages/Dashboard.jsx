import React from 'react'
import LeftNav from '../component/LeftNav'
import RightNav from '../component/RightNav'
export default function Dashboard() {
  return (
    <div className='d-flex justify-content-end'>
    <LeftNav />
    <RightNav />
    </div>
  )
}
