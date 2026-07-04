import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

// const Button = (props) => {
//   return(
//     <button onClick={props.onClick}>
//       {props.text}
//     </button>
//   )
// }

// const StatisticLine = (props) => {
//   return(
//     <tr>
//       <td>{props.text}</td>
//       <td>{props.value}</td>
//     </tr>
//   )
// }

// const Statistics = (props) => {
 
//     if (props.total === 0){
//       return(
//         <div>
//         <h2> Statistics </h2>
//         <div> No feedback given</div>
//         </div>
//       )
//     }
//     return(
//     <div>
//       <h2> Statistics </h2>
//       <table>
//         <tbody>
//       <StatisticLine text="good" value={props.good}/>
//       <StatisticLine text="neutral" value={props.neutral}/>
//       <StatisticLine text="bad" value={props.bad}/>
//       <StatisticLine text="average" value={props.average}/>
//       <StatisticLine text="all" value={props.total}/>
//       <StatisticLine text="positive" value={props.positivePercentage}/>
//         </tbody>
//       </table>
//     </div>
//     )
      
  
// }

const App = () => {
  // save clicks of each button to its own state
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)

  // const increaseGood = () => setGood(good + 1)
  // const increaseNeutral = () => setNeutral(neutral + 1)
  // const increaseBad = () => setBad(bad + 1)

  // const total = good + neutral + bad
  // const average = total/3
  // const positivePercentage = (good/total)*100

  // return (
  //   <div>
  //     <h2> give feedback </h2>
  //     <Button
  //     onClick={increaseGood}
  //     text = 'good'
  //     />

  //     <Button
  //     onClick={increaseNeutral}
  //     text = 'neutral'
  //     />

  //     <Button
  //     onClick={increaseBad}
  //     text = 'bad'
  //     />

  //     <Statistics
  //     good={good}
  //     neutral={neutral}
  //     bad={bad}
  //     average={average}
  //     total={total}
  //     positivePercentage={positivePercentage}
  //     />

  //   </div>
  // )

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const countSetSelected = () => setSelected(selected+1)

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const maxVotes = Math.max(...votes)

  const maxIndex = votes.indexOf(maxVotes)

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1> Anecdote Of The Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleVote}
      text='vote'
      />
      <Button onClick={countSetSelected}
      text='next anectode'
      />
      <h1> Anecdote With Most Votes</h1>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {maxVotes} votes</p>

    </div>
  )
}

export default App