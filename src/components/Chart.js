import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import ChartCss from './Chart.css';
class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      barChartData:props.barChartData,
      lineChartData:props.lineChartData,
      pieChartData:props.pieChartData,
      positiveChartData:props.positiveChartData
    }
    console.log(this.state)
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
  }

  render(){
    return (
      <div className="ChartCss">
        <Bar
          data={this.state.barChartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Day Wise Negative Words Stats',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
<hr/>
<br />

<br />
        <Line
          data={this.state.lineChartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Frequency of using Negative Words:',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
<hr/>
<br />

<br />
        <Line
          data={this.state.positiveChartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Frequency of using Positive Words:',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

<hr/>
<br />
<br />

        <Pie
          data={this.state.pieChartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Word Analysis',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
<hr/>
<br />

<br />
      </div>
    )
  }
}

export default Chart;
