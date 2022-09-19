import { useDispatch } from 'react-redux';
import Input from '../../helps/Input';
import { newError } from '../../redux/settings/asinc';
import { changePasswordOn } from '../../redux/settings/settings';
import { changePassword } from '../../redux/user/user';
import './ChangePassword.scss'

const ChangePassword = () => {
    const dispatch = useDispatch();
    const {value,oninput} = Input({name:""})
    const changePasswordClick = () => {
        if(value.trim() == '') return dispatch(newError('Это поле не может быть пустым'))
        dispatch(changePasswordOn(false))
        dispatch(changePassword(value))

    }
    return <>
        <p>Новый пароль</p>
        <input value={value}  onInput={oninput}/>
        <button onClick={changePasswordClick}>Подтвердить </button>
        <button onClick={()=>dispatch(changePasswordOn(false))}>Отмена</button>

    </>
}
export default ChangePassword