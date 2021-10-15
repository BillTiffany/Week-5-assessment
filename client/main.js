const affirmationContainer = document.querySelector('#affirmation-container')
const form = document.getElementById('affirmationForm')

const baseURL = `http://localhost:4000/api/affirmation`

const affirmationCallback = ({ data: affirmation }) => displayAffirmation(affirmation)
const errCallback = err => console.log(err)

const getAllAffirmation = () => axios.get(baseURL).then(affirmationCallback).catch(errCallback)
const createAffirmation = body => axios.post(baseURL, body).then(affirmationCallback).catch(errCallback)
const deleteAffirmation = id => axios.delete(`${baseURL}/${id}`).then(affirmationCallback).catch(errCallback)
const updateAffirmation = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(affirmationCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let feeling = document.querySelector('#feeling')
    let proud = document.querySelector('#proud')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        feeling: feeling.value,
        proud: proud.value, 
        imageURL: imageURL.value
    }

    createAffirmation(bodyObj)

    feeling.value = ''
    proud.value = ''
    imageURL.value = ''
}

function createAffirmationCard(affirmation) {
    const affirmationCard = document.createElement('div')
    affirmationCard.classList.add('affirmation-card')

    affirmationCard.innerHTML = `<img alt='affirmation cover image' src=${affirmation.imageURL} class="affirmation-cover-image"/>
    <p class="feeling">${affirmation.feeling}</p>
    <div class="btns-container">
        
        <p class="affirmation-proud">${affirmation.proud}</p>
        
    </div>
    <button onclick="deleteAffirmation(${affirmation.id})">delete</button>
    `


    affirmationContainer.appendChild(affirmationCard)
}

function displayAffirmation(arr) {
    affirmationContainer.innerHTML = ''; 
    for (let i = 0; i < arr.length; i++) {
        createAffirmationCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllAffirmation()