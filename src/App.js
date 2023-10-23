import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// set data structue of javascript is being used to get the unique values of the categories
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
// ['all'] is there separately as we also want to have a separate category for 'all' and the rest of the values have been spread using the spread operator. Also, if we write from new Set and so on then we will get the categories in the form of an object and not an array

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;
