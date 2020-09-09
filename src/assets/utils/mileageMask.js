const MileageFormatter = number => {
    let numberFormated = number.toString().replace(/\D/g, '')
    numberFormated = numberFormated.toString().replace(/(\d{3}$)/g, '.$1')

    return numberFormated
}

export default MileageFormatter