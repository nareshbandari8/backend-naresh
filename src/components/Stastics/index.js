import axios from 'axios'
import {useState, useEffect} from 'react'
import './index.css'

const Stastics = props => {
  const [stastics, setStastics] = useState({})
  const {selectedMonth} = props

  useEffect(() => {
    const getStastics = async () => {
      const statistic = await axios.get(
        `https://roxiler-backend-vijaykumars-projects.vercel.app/statistics/?month=${selectedMonth}`,
      )

      setStastics(statistic.data)
    }

    getStastics()
  }, [selectedMonth])
  console.log(stastics)

  return (
    <div className="stastics-main-container">
      <h2>Stastics - {selectedMonth}</h2>
      <div className="statics-container">
        <div className="element">
          <span>Total Sale</span> <span>{stastics.totalSaleAmount}</span>
        </div>
        <div className="element">
          <span>Total sold item</span> <span>{stastics.totalSoldItems}</span>
        </div>
        <div className="element">
          <span>Total not sold item</span>{' '}
          <span>{stastics.totalNotSoldItems}</span>
        </div>
      </div>
    </div>
  )
}

export default Stastics
