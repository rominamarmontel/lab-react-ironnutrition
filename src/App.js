import './App.css';
import foodsDB from './foods.json';
import React, { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

foodsDB.forEach((food) => (food.id = crypto.randomUUID()));

function App() {
  const [foods, setFoods] = useState(foodsDB);
  const [searchKeyword, updateSearchKeyword] = useState('');
  const [isDisplay, setIsDisplay] = useState(true);

  const handleAddFood = (newFood) => {
    newFood.id = crypto.randomUUID();
    setFoods([...foods, newFood]);
  };

  const handleInputChange = (event) => {
    updateSearchKeyword(event.target.value);
  };

  const filteredList = foods.filter((item) => {
    return item.name.toLowerCase().includes(searchKeyword.toLowerCase());
  });
  // const handleInputChange = foods.filter((food) => {
  //   if (searchKeyword !== '') {
  //     const filteredList = foods.filter((food) => {
  //       return food.name.match(new RegExp(searchKeyword, 'i'));
  //       return food.name.toLowerCase().includes(searchKeyword.toLowerCase());
  //     });
  //   }
  // });

  const handleDelete = (id) => {
    const newList = foods.filter((food) => food.id !== id);
    setFoods(newList);
  };
  // const handleDelete = (name) => {
  //   const newList = foods.filter((food) => food.name !== name);
  //   setFoods(newList);
  // };
  const handleToggle = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <div className="App">
      <Button onClick={handleToggle}>
        {isDisplay ? 'Hide Form' : 'Add New Food'}
      </Button>
      {isDisplay && <AddFoodForm handleAddFood={handleAddFood} />}

      <Search handleInputChange={handleInputChange} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredList.map((food) => {
          return <FoodBox oneFood={food} handleDelete={handleDelete} />;
        })}
      </Row>
    </div>
  );
}
export default App;
