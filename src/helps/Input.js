import { useState } from "react"


 const Input = ({text = '',name, regx}) => {
    const [value,setValue] = useState('')
    const oninput = ({target}) =>{
        // console.log(target.value);
        setValue(target.value)
    }


    return {
        [name + 'oninput'] : oninput,
        [name + 'value'] : value,
        [name + 'setValue'] : setValue,
    }
}
export default Input