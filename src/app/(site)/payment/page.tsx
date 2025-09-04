import React, { Suspense } from 'react'
import { PaymentContent } from './PaymentContent'
import { Loader } from 'lucide-react'

const PaymentPage=()=> {
  return (
    <div>
      <Suspense fallback={<div>
        <Loader className='animate-spin mx-auto mt-20' size={40} />
      </div>}>
        <PaymentContent />
      </Suspense> 
    </div>
  )
}

export default PaymentPage