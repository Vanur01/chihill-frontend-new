import React, { Suspense } from 'react'
import { PaymentContent } from './PaymentContent'
import ProtectedRoute from '@/components/RouteProtect'
import { Loader } from 'lucide-react'

const PaymentPage=()=> {
  return (
    <ProtectedRoute>
      <div>
        <Suspense fallback={<div>
          <Loader className='animate-spin mx-auto mt-20' size={40} />
        </div>}>
          <PaymentContent />
        </Suspense> 
      </div>
    </ProtectedRoute>
  )
}

export default PaymentPage