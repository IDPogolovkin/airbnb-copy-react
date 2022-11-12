import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Nav from './components/Nav';
import data from './data';
import imgGroup from './images/Group.png'



function App() {
  const cardArr = data.map(card => {
    return <Card 
    key={card.id}
    imgStar="Star.png"
    {...card}
   />
  })
  return (
    <div>
      <Nav img='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/1280px-Airbnb_Logo_Bélo.svg.png'/>
      <Hero img={imgGroup}/>
      <section className="cards-list">
        {cardArr}
      </section>
    </div>
  );
}

export default App;
