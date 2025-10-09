import {useState, useEffect} from 'react'
import cx from 'classnames'
// import a css module file, 
import styles from './UI.module.css'
// importing our image files from assets
import CardPattern from '../assets/moroccan-flower-dark.png'
import Bilbo from '../assets/bilbo-baggins.png'
import Cameron from '../assets/cameron-poe.png'
import Nikki from '../assets/nikki-cage.png'
import Pollux from '../assets/pollux-troy.png'

const cardImages = [{src: Bilbo}, {src: Cameron}, {src: Nikki}, {src: Pollux}]
// old school way of making a function using the keyword "function"
export default function Grid(props) {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  // duplicate our deck and shuffle them
  const shuffleCards = () => {
    // spread all of our card images twice so that we have duplicates to match
    const shuffleCards = [...cardImages, ...cardImages] // ... let's you copy and paste an array we already created
    // add sort function which fires a function for each item in our new array 
    // when a number is negative leave it where it is, when its positive swap it with another item 
    .sort(() => Math.random() -0.5)
    // now we map through each card in our shuffled and add a unique ID
    .map((card) => ({...card, id: Math.round(Math.random() * 1000000000)}))
    setCards(shuffleCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    console.log(card)
    //first check if we have choice one, if we do the incoming card needs to be assigned to choice two
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card) 
    //what happens if we have both choices? we need to cpmpare them BUT NOT HERE
    // if we do it here it will execute before our local state updates, we need to use useEfect so it only checks when a choice updates

  }

  useEffect(() => {
    // this is where we compare but we first need to assign some logic to assign choices
    // first make sure we have both choices
    if (choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        // we have an array of all of our shuffled cards inside cards
        // we need to map through and assign a new property matched and set to true
        setCards((prevCards) => {
          // now we map to make a copy of everythjing, and add the new property of matched to matched
          return prevCards.map((card) => {
            if(card.src === choiceOne.src){
              console.log("these cards match")
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
        // else = they don't match
      } else {
        console.log("these cards don't match")
        // makes a delay in our card without it when cards don't match you wouldn't be able to see the animation
        setTimeout(() => resetTurn(), 1000)
      }
    }  
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns +1)
  }
  return (
    <>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns used: {turns}</p>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card) => (
              <Card card={card} key={card.id} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo ||card.matched}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

// const Card = (props) => {} -this is how we were importing functions
function Card(props) {
  // update props to receive the entire card object
  const {card, handleChoice, flipped} = props
  // isActive will be part of each cards local state
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive((current) => !current)
    handleChoice(card)
  }

  return (
    <div className={styles.flip_card}>
      <div
        className={cx(styles.flip_card_inner, {[styles.active]: flipped})}
        onClick={handleClick}
      >
        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt="card front" />
        </div>
        <div className={styles.flip_card_back}>
          <img src={card.src} alt="card back" />
        </div>
      </div>
    </div>
  )
}
