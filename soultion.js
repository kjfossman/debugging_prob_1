const minFromMax = (array) => {
    let largest = Math.max(...array)
    let smallest = Math.min(...array)
    let countMax = array.filter(x => x === largest).length
    let countMin = array.filter(x => x === smallest).length
    
    let totalDif = countMax * largest - smallest * countMin
    return totalDif >= 0 ? totalDif : 'Too many small numbers'
}

module.exports = minFromMax