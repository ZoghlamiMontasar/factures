import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='hero bg-base200 min-h-screnn'>
            <div className='hero-content text-center'>
                <div className="max-w-md">
                   <SignUp/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default page