import OrderHistory from '@/components/OrderHIstory'
import ProfileTabs from '@/components/ProfileTab'
import React from 'react'

export default function ProfilePage(){
  return (
    <div className='bg-secondary min-h-screen'>
      <ProfileTabs />
      <OrderHistory />
    </div>
  )
}
