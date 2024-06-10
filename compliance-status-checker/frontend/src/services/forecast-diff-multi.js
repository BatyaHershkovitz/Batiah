const approximateForecast = (arr) => {
    let newArr = []; let avgForecast; let date;
    for (let i = 0; i < arr.length; i++) {
        if (i > 2) {
            avgForecast = (arr[i - 1].average + arr[i - 2].average + arr[i - 3].average) / 3
            date = arr[i].date
            newArr[i] = { avgForecast: avgForecast.toFixed(4), date }
        }
        else {
            avgForecast = arr[i].average
            date = arr[i].date
            newArr[i] = { avgForecast: avgForecast.toFixed(4), date }
        }
    }
    return newArr
}

const forecastDifference = (arr) => {
    let forecast = approximateForecast(arr)
    let different = arr.map((item, i) => {
        let diff = item.average - forecast[i].avgForecast
        return { diff: diff.toFixed(4), date: item.date }
    })
    return different
}

const multiMatrix = (arr1, arr2) => {
    let arrMulti = arr1.map((item, i) => {
        let date = item.date
        let multiAvg = (item.average) * parseFloat(arr2[i].diff)
        return { date, multiAvg: multiAvg.toFixed(4) }
    })
    return arrMulti
}

const diffBetween = (arr) => {
    let newArr = []; let diffBe; let date;
    for (let i = 0; i < arr.length - 3;) {
        diffBe = (parseFloat(arr[i].diff) + parseFloat(arr[i + 1].diff) + parseFloat(arr[i + 2].diff)) / 3
        date = `${arr[i].date}, ${arr[i + 1].date}, ${arr[i + 2].date}`
        newArr[i] = { diffBetween: diffBe.toFixed(4), date }
        i += 3
    }
    return newArr
}

module.exports = { approximateForecast, forecastDifference, multiMatrix, diffBetween }