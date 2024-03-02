import React from 'react'
import InventorySideBar from '../../Components/InventorySideBar'
import NavbarHeader from '../../Components/Navbar'
import InventoryVouchers from '../../containers/inventory/InventoryVouchers'

function InvVoucherPage() {
  return (
      <div>
          <NavbarHeader/>
          <InventoryVouchers />
          <InventorySideBar/>
    </div>
  )
}

export default InvVoucherPage