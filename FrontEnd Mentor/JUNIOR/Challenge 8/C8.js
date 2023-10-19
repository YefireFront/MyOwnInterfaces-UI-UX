const advice = document.getElementById('advice') 
console.log(advice)




getjoke()

   async function getjoke(){
        const config = {
            headers: {'Accept': 'application/json'}
        }

        const response = await  fetch('https://api.adviceslip.com/advice',config)
        const data = await response.json()
        console.log(data.slip.advice)
        advice.innerHTML = data.slip.advice
       
                
    }
