import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownItem,
 
  
  
  Dropdown,
  
 
} from 'semantic-ui-react'

export default function CartSummary() {
  return (
    <div>

      <Dropdown item text='Sepetiniz'>
        <DropdownMenu>
          <DropdownItem>Casper Laptop</DropdownItem>
          <DropdownItem>Msi Laptop</DropdownItem>
          <DropdownItem>Asus Laptop</DropdownItem>
          <Dropdown.Divider/>
          <DropdownItem as={NavLink} to="/cart">Sepete git</DropdownItem>
        </DropdownMenu>
      </Dropdown>

    </div>
  )
}
