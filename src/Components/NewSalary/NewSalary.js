import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Input from "../../helps/Input"
import { addNewCateqory, greatSalaryAsinc } from "../../redux/data/asinc";
import { newError } from "../../redux/settings/asinc";

const input = {
    min : '',
    max : ''
}

const NewSalary = ({close}) => {
    const { typeSalary } = useSelector(state => ({ ...state.data}))
    const dispatch = useDispatch();
    const [value, setValue] = useState(input)

    const change = ({target}) => {
        let num = target.value.trim() == '' ? '' : target.valueAsNumber;
        if(num < 0) num = 0
        setValue({...value, [target.slot] : num})
    }


    const creatNew = () => {
        if(value.max == '' || value.min == '' ) return dispatch(newError('Поля не могут быть пустыми'))
        if(value.max < value.min) return dispatch(newError('Поле от не может быть больше чем до'))
  
        const sum = value.min + ' - ' + value.max
        if(typeSalary.includes(sum)) return  dispatch(newError('Такая зарплата уже есть'))

        dispatch(greatSalaryAsinc(sum))
        close()
    }
    return <>
        <p>От</p>
        <input type="number" value={value.min} slot="min" onInput={change}/>
        <p>До</p>
        <input type="number" value={value.max} slot="max" onInput={change}/>
        <button onClick={creatNew}>Подтвердить </button>
    </>
}

export default NewSalary