//selectors
let display = document.querySelector('#list-display');
let list = JSON.parse(localStorage.getItem('favlist'));


//call render list
renderList(list);

// event listeners
display.addEventListener("click",cardClicked);



// functions

function cardClicked(e){
 let item = e.target;
 let heroID = item.getAttribute('id');
 let heroObj = list.find(x => x.id===heroID);
 if(item.classList[0]==="card-img-top"){
    goToBio(heroObj);
  }
  if(item.classList[0]==="btn"){
  	deleteHero(heroObj.id);
}
}

//go to bio page
function goToBio(heroObj){
	console.log(heroObj);
  localStorage.setItem('hObj',JSON.stringify(heroObj));
	window.location.href = "hero-bio.html";
}

//delete hero from fav list

function deleteHero(id){
	let index = list.findIndex(x => x.id === id);
	list.splice(index,1);
	renderList(list);
	showToast("deleted");
	localStorage.setItem('favlist',JSON.stringify(list));
}



function renderList(list){
  	display.innerHTML = "";

  	for(let l of list){
  		 let card  = document.createElement('div');
          card.style.width = "18rem";
           card.classList.add('card');

          let image = document.createElement('img');
          image.style.cursor = "pointer";
          image.setAttribute('id',l.id);
          image.classList.add("card-img-top");
          image.setAttribute("src", l.image.url);
           card.appendChild(image);

           let cardbody =document.createElement('div');
           cardbody.classList.add("card-body");

           let p1 = document.createElement('p');
           p1.classList.add("card-text");
           p1.innerHTML = ' Hero:<span>'+l.name+'</span>'
           cardbody.appendChild(p1);

            let p2 = document.createElement('p');
           p2.classList.add("card-text");
           p2.innerHTML = ' Gender:<span>'+l.appearance.gender+'</span>'
            cardbody.appendChild(p2);

            let p3 = document.createElement('p');
           p3.classList.add("card-text");
           p3.innerHTML = ' Strength:<span>'+l.powerstats.strength+'</span>'
            cardbody.appendChild(p3);

            let p4 = document.createElement('p');
           p4.classList.add("card-text");
           p4.innerHTML = ' Speed:<span>'+l.powerstats.speed+'</span>'
            cardbody.appendChild(p4);

            let fav = document.createElement('button');
            fav.classList.add('btn', 'btn-danger', 'btn');
          fav.setAttribute('id',l.id);
            fav.innerHTML = 'Delete';
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
  },3000);
}


