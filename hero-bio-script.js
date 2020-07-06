	
//selectors
let display = document.querySelector('.col-md-7');
let heroObj = JSON.parse(localStorage.getItem('hObj'));
let image = document.querySelector('.img-thumbnail');
 
//set hero image  
setImage(heroObj.image.url);

//display data
renderDisplay(heroObj);


// functions

// set image functions
function setImage(url){
  image.setAttribute('src',url);
}


// dispay data
function renderDisplay(heroObj){

	let title = document.createElement('h2');
	 title.innerHTML = heroObj.name;
	 display.appendChild(title);

	 let s1 = document.createElement('span');
	 s1.innerHTML = '<strong>Real name:&nbsp&nbsp</strong>'+ heroObj.biography["full-name"];
	 display.appendChild(s1);

	 let s2  = document.createElement('span');
	 s2.innerHTML = '<strong>Publisher:&nbsp&nbsp</strong>'+ heroObj.biography.publisher;
	  display.appendChild(s2);

	  let line = document.createElement('hr');
	  display.appendChild(line);

	  let stats = document.createElement('h2');
	  stats.innerHTML = "Power Stats";
	  display.appendChild(stats);

	 let intelligence  = document.createElement('span');
	 intelligence.innerHTML = '<strong>Intelligence:&nbsp&nbsp</strong>'+heroObj.powerstats.intelligence;
	 display.appendChild(intelligence);

	 let durability  = document.createElement('span');
	 durability.innerHTML = '<strong>durability:&nbsp&nbsp</strong>'+heroObj.powerstats.durability;
	 display.appendChild(durability);

	  let combat  = document.createElement('span');
	 combat.innerHTML = '<strong>combat:&nbsp&nbsp</strong>'+heroObj.powerstats.combat;
	 display.appendChild(combat);

	 let race  = document.createElement('span');
	 race.innerHTML = '<strong>race:&nbsp&nbsp</strong>'+heroObj.appearance.race;
	 display.appendChild(race);

	 let line1 = document.createElement('hr');
	  display.appendChild(line1);

	  let bio = document.createElement('h2');
	 bio.innerHTML = 'Bio';
	 display.appendChild(bio);

	 let p  = document.createElement('p');
	 p.innerHTML = '<p>'+heroObj.biography["full-name"]+' popularly known as '+heroObj.name+' was born in '+heroObj.biography['place-of-birth']+'.'+heroObj.name+' is known for his appearance in the '+heroObj.biography['first-appearance']+' .This super hero now lives in '+heroObj.work.base+' and works as '+ heroObj.work.occupation+ '</p>'
	 display.appendChild(p);



    }
