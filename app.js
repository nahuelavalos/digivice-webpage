// MAIN


/*
// INIT (RANDOM)
var rdm = Math.floor(Math.random() * (max) + 1);
fetch(url + rdm)
.then(response => response.json())
.then(data => {
    //console.log(data)
    buscarPokemon(data);
})
.catch(err => console.log(err))
*/


const url = "https://pokeapi-nodejs.herokuapp.com/"
const url2 = "https://digimon-api.vercel.app/api/digimon"
const max = 341;
const dataset = "digimon.json"

// INIT (RANDOM)
var rdm = Math.floor(Math.random() * (max) + 1);
fetch(dataset)
.then(response => response.json())
.then(data => {
    //console.log(data)
    buscarPokemon(data);
})
.catch(err => console.log(err))

const btnGet = document.querySelectorAll('.btn-success')
btnGet.forEach(btn => {
    btn.addEventListener('click', () => {
        fetch(url + document.getElementById("pokename").value)
        .then(response => response.json())
        .then(data => {
            buscarPokemon(data);
        })
        .catch(err => console.log(err))
    })
})

const textEnter = document.querySelectorAll('.input-name')
textEnter.forEach(btn => {
    btn.addEventListener('keypress', function (e) {if (e.key === 'Enter') {
        fetch(url + document.getElementById("pokename").value)
        .then(response => response.json())
        .then(data => {
            buscarPokemon(data);
        })
        .catch(err => console.log(err))}
    })
})

const btnPrev = document.querySelectorAll('.prev')
btnPrev.forEach(btn => {
    btn.addEventListener('click', () => {
        var nro = parseInt(document.getElementById("card-text-id").textContent);// - 1;
        fetch(dataset)
        .then(response => response.json())
        .then(data => {
            buscarPokemon(data);
        })
        .catch(err => console.log(err))
    })
})

const btnNext = document.querySelectorAll('.next')
btnNext.forEach(btn => {
    btn.addEventListener('click', () => {
        var nro = parseInt(document.getElementById("card-text-id").textContent);// + 1;
        fetch(dataset)
        .then(response => response.json())
        .then(data => {
            buscarPokemon(data);
        })
        .catch(err => console.log(err))
    })
})

const btnRandom = document.querySelectorAll('.random')
btnRandom.forEach(btn => {
    btn.addEventListener('click', () => {
        var rdm = Math.floor(Math.random() * (max) + 1)
        fetch(dataset)
        .then(response => response.json())
        .then(data => {
            buscarPokemon(data);
        })
        .catch(err => console.log(err))
    })
})

const btnNavbar = document.querySelectorAll('.navbar-brand')
btnNavbar.forEach(btn => {
    btn.addEventListener('click', () => {
        var rdm = Math.floor(Math.random() * (max) + 1)
        fetch(dataset)
        .then(response => response.json())
        .then(data => {
            buscarPokemon(data);
        })
        .catch(err => console.log(err))
    })
})

const buscarPokemon = (datas) => {

    var galeria = document.getElementById('galeria');

    for (data of datas) {
        //// LA PAPAAAAAAAAAAAAAA 341 - SON 140
        if(data["#"] > 341) {
            break
        }

        galeria.innerHTML += `
        <div class="card md-3" id="card-id${data.Digimon}">
            <div class="input-group input-group-sm mb-3">
              <!--span class="input-group-text">https://pokeapi-nodejs.herokuapp.com/</span-->
              <input type="text" class="form-control input-name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="pokename" hidden>
              <!--button class="btn btn-success" type="button" id="button-addon2${data.Digimon}">GET</button-->
            </div>
            <div class="input-group input-group-sm">
              <textarea  class="form-control" aria-label="Response" aria-describedby="basic-addon1" id="response${data.Digimon}" rows="16" style="overflow:auto;resize:none;background-color:white;color:black" disabled hidden></textarea>
            </div>
            
            <div class="row g-0">
              <div class="text-center">
                <!--div class="spinner-border text-secondary" role="status">
                  <span class="visually-hidden"></span>
                </div-->
              </div>
              <p class="card-text" id="card-text-id${data.Digimon}" style="text-align: right;"></p>
               
              <img src="" class="card-img-top" alt="" style="background-color: whitesmoke"-->
              

              <!--picture>
              <source type="image/png" srcset="./${data.Digimon.toLowerCase()}.webp" />
              <class="card-img-top" alt="" style="background-color: whitesmoke" />
            </picture-->
                
                
                <h5 class="card-title" style="margin-top: 20px;"></h5>
                
                <div class="row">
                <div clase="col-1" style="margin-left: -12px; margin-top: 4px;">
                <button type="button-type-one" class="btn btn-sm type-1" disabled></button>
                <!--button type="button-type-two" class="btn type-2" disabled></button-->
                </div>
                </div>
                <br><br>
              
              
            </div>


            



          </div>
        `
/////////////////////////////////////////////

    if(JSON.stringify(data)!="null") {
        //NAME-GET
        document.getElementById("pokename").value = data.Digimon.toLowerCase()
        console.log(data["#"])
        console.log(data.Digimon)

        //JSON
        var str = JSON.stringify(data, undefined, 8);
        document.getElementById('response').value = str;
        
        //PNG + NAME + NUMBER
        var card = document.getElementById("card-id"+data.Digimon);
        
        //a = "https://digimon.shadowsmith.com/img/" + data.Digimon.toLowerCase() + ".jpg"
        
        //card.querySelector(".card-img-top").setAttribute("src", "https://digimon.shadowsmith.com/img/" + data.Digimon.toLowerCase() + ".jpg");
        card.querySelector(".card-img-top").setAttribute("src", "./assets/" + data.Digimon.toLowerCase() + ".webp");
        
        
        //card.querySelector(".card-img-top").setAttribute("src", "https://github.com/weiweitoo/DCGAN-Digimon/tree/master/Digimon/120px-" + data.Digimon + ".jpg");
        //card.querySelector(".card-img-top").setAttribute("src", data["Image link"]);
        card.querySelector(".card-title").textContent = data.Digimon;
        card.querySelector(".card-text").textContent = data.Stage;
        
        /////// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH 
        //let img = card.querySelector(".card-img-top").getAttribute("src")
        //let fileName = str.substring(str.lastIndexOf("/")+1)
        //localStorage.setItem(card.querySelector(".card-img-top").getAttribute("src"), "agumon.jpg")

        ///////////

        //SPINNER
        /*
        var spinner = document.querySelector(".spinner-border");
        spinner.hidden = true;
        
        // BUTTONS
        var buttons = document.getElementById("buttons");
        buttons.hidden = false;

        //STATS
        var stats = document.getElementById("stats");
        stats.hidden = false;

        var hp = document.getElementById("pg-1");
        hp.style.width = data.HP/10 + "%";
        hp.textContent = data.HP;
        hp.style.textAlign = "center";
        if(data.HP <= 40) {
            hp.style.backgroundColor = "orange";
        } else if(data.HP <= 80) {
            hp.style.backgroundColor = "yellow";
        } else if(data.HP <= 120) {
            hp.style.backgroundColor = "greenyellow";
        } else {
            hp.style.backgroundColor = "lightgreen";
        }

        var spatk = document.getElementById("pg-2");
        spatk.style.width = data.SP/1.5 + "%";
        spatk.textContent = data.SP;
        spatk.style.textAlign = "center";
        if(data.SP <= 40) {
            spatk.style.backgroundColor = "orange";
        } else if(data.SP <= 80) {
            spatk.style.backgroundColor = "yellow";
        } else if(data.SP <= 120) {
            spatk.style.backgroundColor = "greenyellow";
        } else {
            spatk.style.backgroundColor = "lightgreen";
        }

        var atk = document.getElementById("pg-3");
        atk.style.width = data.Atk/1.5 + "%";
        atk.textContent = data.Atk;
        atk.style.textAlign = "center";
        if(data.Atk <= 40) {
            atk.style.backgroundColor = "orange";
        } else if(data.Atk <= 80) {
            atk.style.backgroundColor = "yellow";
        } else if(data.Atk <= 120) {
            atk.style.backgroundColor = "greenyellow";
        } else {
            atk.style.backgroundColor = "lightgreen";
        }

        var def = document.getElementById("pg-4");
        def.style.width = data.Def/1.5 + "%";
        def.textContent = data.Def;
        def.style.textAlign = "center";
        if(data.Def <= 40) {
            def.style.backgroundColor = "orange";
        } else if(data.Def <= 80) {
            def.style.backgroundColor = "yellow";
        } else if(data.Def <= 120) {
            def.style.backgroundColor = "greenyellow";
        } else {
            def.style.backgroundColor = "lightgreen";
        }

        var spdef = document.getElementById("pg-5");
        spdef.style.width = data.Int/1.5 + "%";
        spdef.textContent = data.Int;
        spdef.style.textAlign = "center";
        if(data.Int <= 40) {
            spdef.style.backgroundColor = "orange";
        } else if(data.Int <= 80) {
            spdef.style.backgroundColor = "yellow";
        } else if(data.Int <= 120) {
            spdef.style.backgroundColor = "greenyellow";
        } else {
            spdef.style.backgroundColor = "lightgreen";
        }

        var speed = document.getElementById("pg-6");
        speed.style.width = data.Spd/1.5 + "%";
        speed.textContent = data.Spd;
        speed.style.textAlign = "center";
        if(data.Spd <= 40) {
            speed.style.backgroundColor = "orange";
        } else if(data.Spd <= 80) {
            speed.style.backgroundColor = "yellow";
        } else if(data.Spd <= 120) {
            speed.style.backgroundColor = "greenyellow";
        } else {
            speed.style.backgroundColor = "lightgreen";
        }

        */

        //TYPES
        /*if(data.type.length==1) {
            card.querySelector(".type-1").hidden = false;
        } else {
            card.querySelector(".type-2").hidden = false;
        }

        for(var i=0; i<data.type.length; i++) {
            if(data.type[i] == "Normal") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: wheat; color: black");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: wheat; color: black");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Fighting") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: firebrick; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: firebrick; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Flying") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: lightskyblue; color: black");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: lightskyblue; color: black");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Poison") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: purple; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: purple; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Ground") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: peru; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: peru; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Rock") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: saddlebrown; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: saddlebrown; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Bug") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: yellowgreen; color: black");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: yellowgreen; color: black");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Ghost") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: rebeccapurple; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: rebeccapurple; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Steel") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: grey; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: grey; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }*/
            
            
            if(data.Attribute == "Fire") {
                //if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: red; color: white");
                    card.querySelector(".type-1").textContent = data.Attribute;
                //} else {
                    //card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: red; color: white");
                    //card.querySelector(".type-2").textContent = data.Attribute;
                //}  
            }
            if(data.Attribute == "Neutral") {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: wheat; color: black");
                    card.querySelector(".type-1").textContent = data.Attribute;
            }
            if(data.Attribute == "Earth") {
                card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: peru; color: white");
                card.querySelector(".type-1").textContent = data.Attribute;
            }
            if(data.Attribute == "Plant") {
                card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: green; color: white");
                card.querySelector(".type-1").textContent = data.Attribute;
            }
            if(data.Attribute == "Electric") {
                card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: yellow; color: black");
                card.querySelector(".type-1").textContent = data.Attribute;
            }
            if(data.Attribute == "Dark") {
                card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: black; color: white");
                card.querySelector(".type-1").textContent = data.Attribute;
            }
            if(data.Attribute == "Light") {
                card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: pink; color: black");
                card.querySelector(".type-1").textContent = data.Attribute;
            }
            if(data.Attribute == "Water") {
                card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: dodgerblue; color: white");
                card.querySelector(".type-1").textContent = data.Attribute;
            }
            if(data.Attribute == "Wind") {
                card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: rebeccapurple; color: white");
                card.querySelector(".type-1").textContent = data.Attribute;
            }
            /*
            if(data.type[i] == "Water") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: dodgerblue; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: dodgerblue; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Grass") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: green; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: green; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Electric") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: yellow; color: black");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: yellow; color: black");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Psychic") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: pink; color: black");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: pink; color: black");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Ice") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: deepskyblue; color: black");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: deepskyblue; color: black");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Dragon") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: indigo; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: indigo; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Dark") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: black; color: white");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: black; color: white");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            if(data.type[i] == "Fairy") {
                if(i==0) {
                    card.querySelector(".type-1").setAttribute("style", "opacity: 1; background-color: palevioletred; color: black");
                    card.querySelector(".type-1").textContent = data.type[i];
                } else {
                    card.querySelector(".type-2").setAttribute("style", "opacity: 1; background-color: palevioletred; color: black");
                    card.querySelector(".type-2").textContent = data.type[i];
                }  
            }
            
        }*/               
    }


}

}
