const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueToConverted = document.querySelector(".currency-value") // Outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2
    

    if(currencySelect.value =="dolar"){ 
        //Se o select estiver selecionando o valor de dolar, entre aqui.
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", { 
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    if(currencySelect.value =="euro"){
        //Seo select estiver selecionado o valor de euro, entre aqui.
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
        
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    

    console.log(convertedValue)
    
}

convertButton.addEventListener("click", convertValues)