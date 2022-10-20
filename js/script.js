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
            let col = document.createElement('div')
            col.classList.add('col')
            let card = document.createElement('div')
            card.classList.add('card', 'mb-5', 'border-3')
            let img = document.createElement('img')
            img.setAttribute('src', `./img/${array[i].foto}` )
            let cardInfo = document.createElement('div')
            let cardNome = document.createElement('h4')
            cardNome.innerHTML = array[i].nome
            cardNome.classList.add('fs-2', 'text-center', 'text-danger')
            let cardRuolo = document.createElement('p')
            cardRuolo.innerHTML = array[i].ruolo
            cardRuolo.classList.add('fs-4', 'text-center', 'text-success')
    
            membriTeam.append(col)
            col.append(card)
            card.append(img)
            card.append(cardInfo)
            cardInfo.append(cardNome)
            cardInfo.append(cardRuolo)
        }
    }
    generaMembriStringa(team);
