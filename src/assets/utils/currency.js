const currency = number => {
    let numberFormated = number.toString().replace(/\D/g, '')
    numberFormated = numberFormated.toString().replace(/(\d{2}$)/g, '.$1')
  
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  
    const value = formatter.format(numberFormated)
  
    return value
}

export default currency