import React, { Component } from 'react';

import {BrowserRouter}from 'react-router-dom';
import './App.css';
import Chart from './components/Chart';
import axios from './axios-setup'
import Person from './components/Person/Person';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'
class App extends Component {
  constructor(){
    super();
    this.state = {
      barChartData:{},
      lineChartData:{},
      pieChartData:{},
      positiveChartData:{},
      data:null
    }
  }

  componentWillMount(){
    this.getBarChartData();
  }

  getBarChartData(){
    // Ajax calls here

    axios.get('/barChartData.json').then(response => {
      console.log('res',response.data)

    });

    /*
    axios.get('/dataset.json').then(response => {
      console.log(response.data);
    });
    */


    this.setState({
      barChartData:{
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
        datasets:[
          {
            label:'Weekly Analysis',
            data:[
              187594,
              221045,
              153060,
              106519,
              105162,
              95072,
              10000
            ],
            backgroundColor:[
              'rgba(255, 99, 132,1)',
              'rgba(54, 162, 235,1)',
              'rgba(255, 206, 86,1)',
              'rgba(75, 192, 192,1)',
              'rgba(153, 102, 255,1)',
              'rgba(255, 159, 64,1)',
              'rgba(255, 99, 132,1)',
              'rgba(13, 102, 255,1)'
            ]
          }
        ]
      },


      lineChartData:{
        labels: ['0-5', '5-10', '10-15', '15-20', '20-25', '25-30'],
        datasets:[
          {
            label:'Monthly -ve Analysis Graph',
            data:[
              187594,
              153060,
              106519,
              105162,
              95072,
              221045,
            ],
            backgroundColor:[
              'rgba(255,0,0,1)',

            ]
          }
        ]
      },
positiveChartData:{
  labels: ['0-5', '5-10', '10-15', '15-20', '20-25', '25-30'],
  datasets:[
    {
      label:'Monthly +ve Analysis Graph',
      data:[
        87594,
        153060,
        6519,
        105162,
        95072,
        21045,
      ],
      backgroundColor:[
        'rgba(0,0,255,0.6)',

      ]
    }
  ]



},

      pieChartData:{
        labels: ['depressing', 'abuse', 'grief', 'positive'],
        datasets:[
          {
            label:'words having emotions',
            data:[
              187594,
              106519,
              105162,
              95072,
            ],
            backgroundColor:[
              'rgba(255, 99, 132,1)',
              'rgba(153, 102, 255,1)',
              'rgba(255, 206, 86, 1)',
              'rgba(13, 102, 255, 1)'
            ]
          }
        ]
      },







    });
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Sidebar /><br/>

        <div className="App-header">

<hr />
            <h2 style={{color:"green",fontSize:"55px"}}>Analysis Panel</h2><hr />
          <p></p>
        </div>
        <Chart
          barChartData={this.state.barChartData}
          lineChartData={this.state.lineChartData}
          pieChartData={this.state.pieChartData}
          positiveChartData= {this.state.positiveChartData}
          legendPosition="bottom"/>


      </div>
      </BrowserRouter>
    );
  }
}

export default App;
