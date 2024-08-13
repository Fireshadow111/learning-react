function List(){

const fruits = 
[{ id: 1, name: "apple", calories: 95}, 
  {id: 2, name: "orange", calories: 45}, 
  {id: 3, name: "banana", calories: 105}, 
  {id: 4, name: "pineapple", calories: 45}]

  fruits.sort((a, b)=> a.name.localeCompare(b.name))

const listItems = fruits.map(fruit => <li key =  {fruit.id}>{fruit.name}: &nbsp; 
{fruit.calories}  </li>)

  return(

   <ul>{listItems}</ul>
  )


}


export default List