import React from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'
import { useState } from 'react';
import { useEffect } from 'react';
import CategoryService from '../services/categoryService';

export default function Categories() {
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService.getCategories().then(result => {
      console.log(result); // Gelen veriyi kontrol etmek için
      setCategories(result.data.data);
    });
  }, []);
  return (
    <div>
     <Menu pointing vertical>
    {categories.map(category => (
      
        <MenuItem
          name={category.categoryName}
        
        />
     
    ))}
    </Menu>
     </div>
  )
}
