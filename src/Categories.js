import React from 'react';
import items from './data';

// issues with manual approach
// There is no way to display all the items.
// We are not in sink with our data. We always have to manually update in case there are some changes in the original array. Therefore, in case of any addition in categories that would also have to be updated manually in the Categories.js but this is not the best approach.

// const Categories = ({ categories, filterItems }) => {
//   return (
//     <div className='btn-container'>
//       <button className='filter-btn' onClick={() => filterItems('all')}>All</button>
//       <button className='filter-btn' onClick={() => filterItems('breakfast')}>Breakfast</button>
//       <button className='filter-btn'>Lunch</button>
//       <button className='filter-btn'>Shakes</button>
//     </div>
//   )
// };


const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {/* as we have a simple list and therefore we can use the index */}
      {categories.map((category, index) => {
        return <button type='button' className='filter-btn' key={index} onClick={() => filterItems(category)}>{category}</button>
      })}
    </div>
  )
};

export default Categories;
