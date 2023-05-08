import './App.css';
import Fruits from './components/Fruits';


function App() {

    const fruits = [
    {
      id: 1,
      name: 'apple',
      color: 'green'
    },
    {
      id: 2,
      name: 'banana',
      color: 'yellow'
    },
    {
      id: 3,
      name: 'orange',
      color: 'orange'
    },
  ];

  return (
    <div className="App">
      {/* Pass `fruits` array as a prop using the map() method */}
      {/* {
        fruits.map(fruit => {
          return <Fruits key={fruit.id} fruit={fruit}/>
        })
      } */}
    </div>
  );
}

export default App;



















  // const fruits = [
  //   {
  //     id: 1,
  //     name: 'apple',
  //     color: 'green'
  //   },
  //   {
  //     id: 2,
  //     name: 'banana',
  //     color: 'yellow'
  //   },
  //   {
  //     id: 3,
  //     name: 'orange',
  //     color: 'orange'
  //   },
  // ]



  // {
  //       fruits.map(fruit => {
  //         return <Fruits key={fruit.id} fruit={fruit}/>
  //       })
  //     }