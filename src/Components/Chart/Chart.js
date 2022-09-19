
import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import { useSelector } from 'react-redux';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Chart = ({valut, total,data}) => {
    const { 
        chart
       } = useSelector(state=>state.settings.thema)
	// render() {
		const options = {
            theme: chart,
		
			animationEnabled: true,
            exportEnabled: false,
			title: {
				text: valut
			},
			subtitles: [{
				text: "Всего "  + total,
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				innerRadius: 75,
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: `#,###'${" "+valut}'`,
				dataPoints: data
                
			}]
		}
		return 	<div className='C_chartJs'>
            <div className='hiddenLogo'></div>
            <CanvasJSChart options = {options}/>
        </div>
		// <div>
		
				/* onRef={ref => this.chart = ref} */
			// />
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		// </div>
		// );
	// }
}
export default Chart     