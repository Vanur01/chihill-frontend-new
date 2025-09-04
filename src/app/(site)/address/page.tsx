import React, { Suspense } from 'react'
import { AddressConent } from './AddressContent'
import { Loader } from 'lucide-react'

const AddressPage = () => {
  return (
    <div>
      <Suspense fallback={<div>
        <Loader className='animate-spin mx-auto' size={40} />
      </div>}>
        <AddressConent/>
      </Suspense>
    </div>
  )
}

export default AddressPage