const form = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvinte
form.addEventListener("submit" , (e) => {
e.preventDefault()

 const Nome = form.inNome.value
 const Masculino = form.inMasculino.checked
 const Altura = Number(form.inAltura.value)
 
 //Calculadora o peso ideal
 let peso
   if (MAsaulino) {
       peso = 22 * Math.pow(Altura, 2)
   }else{
    peso = 21 * Math.pow(Altura, 2)
   }
  //apresenta a resposta
  resp.innerText = `${Nome} Seu peso ideal é: ${peso.toFixed(3)}kg`
})

form.addEventListener("reset" , (e) => {
    resp.innerText = " "
})