//Consumiendo api de clima

window.addEventListener('load', ()=> {
    let lon;
    let lat;

    let temperaturaValor = document.getElementById('temp');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=95a66d52ffa17ea7c93178dbf0d146df`;

            fetch(url)
                .then( response => { return response.json()})
                .then( data => {
                    console.log(data.main.temp)

                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = 'Temperatura actual: ' + temp + ' °C'
                })
                .catch( error => {
                    console.log(error)
                })
        })
    }

})

// Validando formulario

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const form = document.getElementById("form")
const tel = document.getElementById("tel")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    // if (nombre.value.length < 4) {
    //     warnings += `El nombre no es válido`
    // }
    if(!regexEmail.test(email.value)) {
        warnings += `El email no es válido`
        alert(warnings)
    }
})