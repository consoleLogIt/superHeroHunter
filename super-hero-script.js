//selectors

let input = document.querySelector('#search-input');
let display = document.querySelector('#list-display');
let favBtn = document.querySelector('#fav-btn');
let heros = [];
let favHeros = [];

// event listners


input.addEventListener("keyup",getHeros);
display.addEventListener("click",cardClicked);
favBtn.addEventListener("click",goToFavList);


//function

// fetch data from api
function getHeros(){
	display.innerHTML = "";
	let nameInput = input.value;
	let xhrRequest  = new  XMLHttpRequest();


	xhrRequest.onload  = function(){

		if(xhrRequest.status===200 && nameInput!==''){
		let responseJSON = JSON.parse(xhrRequest.response);

		  heros = responseJSON.results;
		  renderList(heros);		

	}
}


	xhrRequest.open('get','https://superheroapi.com/api.php/2754845394620657/search/'+nameInput);
	xhrRequest.send();

	
	
}


function goToFavList(){
    window.location.href = "fav-list.html";
}

//invoked when card is clicked
function cardClicked(e){
   let item = e.target;
   let heroID = item.getAttribute('id');
   let heroObj = heros.find(x => x.id===heroID);

   if(item.classList[0]==="card-img-top"){
       goToBio(heroObj);
   }
   if(item.classList[0]==="btn"){
  	addToFav(heroObj);
   }
  
}

//go to bio page
function goToBio(heroObj){

    localStorage.setItem('hObj',JSON.stringify(heroObj));
	window.location.href = "file:///C:/Users/KISHAN/Desktop/webDevelopment/Toggle%20Mode/Coding%20Courses/hero-bio.html";

}

// go to fav list page
function addToFav(heroObj){
	
	if(favHeros.find(x => x.id === heroObj.id)){
	showToast('Already added');
    
	}
  else{
	favHeros.push(heroObj);
	showToast('added to the favrouites list');

    localStorage.setItem('favlist',JSON.stringify(favHeros));
}

}




//render data 
function renderList(heros){

	display.innerHTML = "";
     
        for (let hero of heros) {


          let card  = document.createElement('div');
          card.style.width = "18rem";

           card.classList.add('card');

          let image = document.createElement('img');
          image.style.cursor = "pointer";
          image.setAttribute('id',hero.id);
          image.classList.add("card-img-top");
          image.setAttribute("src", hero.image.url);
          card.appendChild(image);

           let cardbody =document.createElement('div');
           cardbody.classList.add("card-body");

           let p1 = document.createElement('p');
           p1.classList.add("card-text");
           p1.innerHTML = ' Hero:<span>'+hero.name+'</span>'
           cardbody.appendChild(p1);

           let p2 = document.createElement('p');
           p2.classList.add("card-text");
           p2.innerHTML = ' Gender:<span>'+hero.appearance.gender+'</span>'
           cardbody.appendChild(p2);

           let p3 = document.createElement('p');
           p3.classList.add("card-text");
           p3.innerHTML = ' Strength:<span>'+hero.powerstats.strength+'</span>'
           cardbody.appendChild(p3);

           let p4 = document.createElement('p');
           p4.classList.add("card-text");
           p4.innerHTML = ' Speed:<span>'+hero.powerstats.speed+'</span>'
           cardbody.appendChild(p4);

           let fav = document.createElement('button');
           fav.classList.add('btn', 'btn-primary', 'btn');
           fav.setAttribute('id',hero.id);
           fav.innerHTML = 'Add';
           cardbody.appendChild(fav);

           card.appendChild(cardbody);
           display.appendChild(card);
}

}

function showToast(text){
  let x=document.querySelector("#toast");
  // console.log(x);	
  x.classList.add('show');
  x.innerHTML=text;
  setTimeout(function(){
    x.classList.remove("show");
  },2000);
}


