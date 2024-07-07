import './ShowCount.css'

const ShowCount = (props) => {
  return (
    <div>
      <h1>
        Has pulsado aquí {props.count} {props.count === 1 ? 'vez' : 'veces'}
      </h1>
    </div>
  )
}

export default ShowCount
