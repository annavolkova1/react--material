import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

class App extends React.Component{

	constructor(props) {
	super(props);

	this.state = {
	floatingLabelText: "Дата начала Вашей работы",
	};
	}
	calc(date){
		try {
			let inpDay = moment(document.getElementById("date").value);
			if(inpDay==null || inpDay==undefined || inpDay==NaN) throw new SyntaxError("Ошибка");
			console.log(document.getElementById("date").value);
			console.log(inpDay);
			let diff = moment() - moment(inpDay);
			let days = moment(diff).get('dates');
			let month = moment(diff).get('month');
			let years = moment(diff).get('year') - 1970;
			document.getElementById("result").innerHTML = `Стаж: ${years} ${formatYears(years)}, ${month} ${formatMonth(month)} и ${days} ${formatDays(days)}`
	}catch(err){

	}
	}
 }
 render() { 
     return (
       <MuiThemeProvider>
         <div className="ui">
           <DatePicker id="date" onChange={(n=null,date)=>this.calc(date)} 
		               floatingLabelText={this.state.floatingLabelText}
             />
         </div>
       </MuiThemeProvider>
     )
 }
};
function formatDays(number){
	let a=Math.round((number/10-Math.floor(number/10))*10);
	if(a>4 || a==0 || (number>10 && number<20)){
		return("дней")
	} else if(a<=4 && a!=1){
		return("дня")
	} else{
		return("день")
	}
}

function formatMonth(number){
	if(number>4 || number==0){
		return("месяцев")
	} else if(number<=4 && number!=1){
		return("месяца")
	} else{
		return("месяц")
	}
}


function formatYears(number){
    let a=(number/10-Math.floor(number/10))*10;
    if(a>4 || a==0){
        return("лет")
    } else if(a<=4 && a!=1){
        return("года")
    } else{
        return("год")
    }
}

export default App;

