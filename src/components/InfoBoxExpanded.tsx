import React from 'react'
import { Record } from './type';

type InfoBoxExpandedProps = {
  details: Record
}

const InfoBoxExpanded = ({details}:InfoBoxExpandedProps) => {
  const {address, company, email, name, phone, website} = details;
  return (
    <>
        <div className="border border-slate-300 w-full flex flex-col rounded-xl p-3 sm:m-2">
        <div className="flex flex-col flex-1 p-4 shadow-md shadow-slate-200 rounded-xl">
          <h2 className='text-lg font-semibold mb-1'>Description</h2>
          <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora assumenda in cum perspiciatis maiores sit harum magnam, beatae inventore amet illo odio facere! Tempora perferendis ipsum aliquam, dicta, iure possimus nisi aspernatur officia id et molestiae error nulla. Aut, suscipit!</p>
        </div>
        <div className="flex mt-3 flex-wrap">
          <div className="flex flex-col flex-1 p-2 border-b-2 border-slate-200 sm:mr-4 sm:border-r-2 sm:border-slate-200 sm:border-b-0">
            <h2 className='text-lg font-semibold'>Contact Person</h2>
            <span className='mb-2 font-mono'>{name}</span>
            <h2 className='text-lg font-semibold'>Company</h2>
            <span className='mb-2 font-mono'>{`${company.name} : ${company.bs}`}</span>
            <h2 className='text-lg font-semibold'>Email</h2>
            <span className='mb-2 font-mono'>{email}</span>
            <h2 className='text-lg font-semibold'>Phone</h2>
            <span className='mb-2 font-mono'>{phone}</span>
          </div>
          <div className="flex flex-col flex-1 p-2">
            <h2 className='text-lg font-semibold'>Address</h2>
            <span className='mb-2 font-mono'>{`${address.suite} ${address.street} ${address.city} ${address.zipcode}`}</span>
            <h2 className='text-lg font-semibold'>Street</h2>
            <span className='mb-2 font-mono'>{address.street}</span>
            <h2 className='text-lg font-semibold'>City</h2>
            <span className='mb-2 font-mono'>{address.city}</span>
            <h2 className='text-lg font-semibold'>Website</h2>
            <span className='mb-2 font-mono'>{website}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoBoxExpanded