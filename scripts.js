const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const btc = data.BTCBRL.high

    // const dolarToday = 4.97
    // const euroToday = 6.2
    // const libraToday = 6.29
    // const bitcoinToday = 8.2

    // const convertedValue = inputCurrencyValue / data

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euro)
    }
    // if (currencySelect.value == "libra") {
    //     currencyValueConverted.innerHTML = new Intl.NumberFormat("lb-LB", {
    //         style: "currency",
    //         currency: "LBR"
    //     }).format(inputCurrencyValue / lbr)
    // }
    // if (currencySelect.value == "btc") {
    //     currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    //         style: "currency",
    //         currency: "BTC"
    //     }).format(inputCurrencyValue / btc)
    // }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

    function changeCurrency() {
        const currencyName = document.getElementById("currency-name")
        const currencyImage = document.querySelector(".currency-img")

        if (currencySelect.value == "dolar") {
            currencyName.innerHTML = "Dólar americano"
            currencyImage.src = "./assets/dolar.png"
        }

        if (currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/euro.png"
        }

        // if (currencySelect.value == "libra") {
        //     currencyName.innerHTML = "Libra"
        //     currencyImage.src = "./assets/libra.png"
        // }

        // if (currencySelect.value == "bitcoin") {
        //     currencyName.innerHTML = "Bitcoin"
        //     currencyImage.src = "./assets/bitcoin.png"
        // }

        convertValues()
    }

    currencySelect.addEventListener("change", changeCurrency)
    convertButton.addEventListener("click", convertValues)