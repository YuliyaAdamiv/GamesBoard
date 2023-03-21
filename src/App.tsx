import { useState } from 'react';
import List from './components/List';
import AddToList from './components/AddToList';
import './App.css';
export interface IState {
  people: {
      name: string
      age: number
      url: string
      note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      url: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-159141331-1580077058.jpg?crop=0.5446666666666666xw:1xh;center,top&resize=1200:*"
    },
    {
      name: "Alex Frayne",
      age:47,
      url:"https://images.squarespace-cdn.com/content/v1/5684ccc425981dd0768c934b/ce755ab8-e302-4c02-b7a8-a6c88f16e39f/alex+headshot.jpg?format=1500w",
      note: "Allegeric to staying on the same team",
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );}

export default App;
