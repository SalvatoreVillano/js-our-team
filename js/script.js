const divHTML = document.getElementById("team")

const team = [
            {
                nome: 'Wayne Barnett',
                ruolo: 'Founder & CEO',
                foto:'wayne-barnett-founder-ceo.jpg'
            },
            {
                nome: 'Angela Caroll',
                ruolo: 'Chief Editor',
                foto:'angela-caroll-chief-editor.jpg'
            },
            {
                nome: 'Walter Gordon',
                ruolo: 'Office Manager',
                foto:'walter-gordon-office-manager.jpg'
            },
            {
                nome: 'Angela Lopez',
                ruolo: 'Social Media Manager',
                foto:'angela-lopez-social-media-manager.jpg'
            },
            {
                nome: 'Scott Estrada',
                ruolo: 'Developer',
                foto:'scott-estrada-developer.jpg'
            },
            {
                nome: 'Barbara Ramos',
                ruolo: 'Graphic Designer',
                foto: 'barbara-ramos-graphic-designer.jpg'
            }
    ]


    for(let key in team){
        console.log(team[key]);
           }


    function generaMembriStringa(array){
        let membriTeam = document.getElementById('team')
        for (let i = 0; i < array.length; i++){
            let img = document.createElement('img')
            img.setAttribute('src', `./img/${array[i].foto}` )
            console.log(img);
            membriTeam.innerHTML += `<br> Nome: ${array[i].nome} <br> Ruolo: ${array[i].ruolo} <br>  Foto:  <br><br>`
            membriTeam.append(img)

        }
    }
    generaMembriStringa(team);
