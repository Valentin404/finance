import { useDispatch, useSelector } from "react-redux";
import Input from "../../helps/Input"
import { addNewCateqory } from "../../redux/data/asinc";
import { newError } from "../../redux/settings/asinc";

const CateqoryNew = ({close}) => {
    const dispatch = useDispatch();
    const {value,oninput} = Input({name:""})
    const { cateqory } = useSelector(state => state.data)

    const creatNew = () => {
        if(cateqory.includes(value)) return dispatch(newError('Такая категория уже есть'))
        dispatch(addNewCateqory(value))
        close()
    }
    return <>
        <input value={value} onInput={oninput}/>
        <button onClick={creatNew}>Подтвердить </button>
    </>
}

export default CateqoryNew