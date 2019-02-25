// JavaScript Document
window.addEventListener('load', ()=> {
	let long;
	let lat;
	let temperatureDescription =  document.querySelector('.temperature-description');
	let temperatureDegree =  document.querySelector('.temperature-degree');
	let locationTimezone =  document.querySelector('.location-timezone');
	let temperatureSection = document.querySelector('.degree-section');
	const temperatureSpan = document.querySelector('.degree-section span')
	
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition
		(position =>{
			long =position.coords.longitude;
			lat =position.coords.latitude;
			
			
			const proxy='http://cors-anywhere.herokuapp.com/';
			const api = `${proxy}https://api.darksky.net/forecast/84feace94bd751a5472188ace42a5c60/${lat},${long}`;
		
			
			 
		fetch(api)
			.then(response => { 
				return response.json(); 
		})
		.then(data =>{
		
			const {temperature, summary, icon} = data.currently;
			temperatureDegree.textContent = temperature;
			temperatureDescription.textContent = summary;
			locationTimezone.textContent = data.timezone;
			
			let celsius = (temperature - 32) * (5 / 9);
				setIcons(icon, document.querySelector('.icon'));
			
			//change unit
			
			temperatureSection.addEventListener('click', ()=>{
			if (temperatureSpan.textContent === "F"){
				temperatureSpan.textContent = "C";
				temperatureDegree.textContent = Math.floor(celsius);
			}else{
			temperatureSpan.textContent="F";
			temperatureDegree.textContent = temperature;
			}
			});
			
			
		})
		
			
			
		
		});
		
		
	
		
		
		
		
	}else{
		h1.textContent="Hey this doesn't work because you dont let us see your location, sorry <3"
	}
	
	
	
	
	function setIcons(icon, iconID){
		const skycons = new Skycons({color:"white"})
		const currentlyIcon = icon.replace(/-/g, "_").toUpperCase(); 
		skycons.play();
		return skycons.set(iconID, Skycons[currentlyIcon]);
		}
	
	
});