const bgInput = {
    error : 'rgba(255, 0, 0, 0.662)',
    defoult : 'rgba(255, 255, 255, 0.442)'
}
export const creatNumForDate = dateStr => {
    const dateArr = dateStr.split('-');
    return +(dateArr[0] + dateArr[1] + dateArr[2])
  }
  export const errorForInput = (input) => {
    input.classList.add('error')
    setTimeout(() => input.classList.remove('error'), 3000)
  }  