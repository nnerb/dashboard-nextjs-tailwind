import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)

const BarChart = () => {
  
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels:['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      datasets:[
        {
          label: 'Sales ₱',
          data: [43132, 28321, 30176, 23245, 33975, 45524, 35756],
          borderColor: 'rgb(53, 162, 238)',
          backgroundColor: 'rgb(53, 162, 238, 0.4)'
        }
      ]
    })
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Revenue'
        },    
      },
      maintainAspectRatio: false,
      responsive: true
    })
  },[])

  return (
   <>
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
    <Bar data={chartData} options={chartOptions}/>
    </div>
   </>
  )
}

export default BarChart