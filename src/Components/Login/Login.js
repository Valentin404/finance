import { useDispatch } from "react-redux"
import  Input  from "../../helps/Input"
import './Login.scss'
import { loginAsink } from "../../redux/user/user"
import { newError } from "../../redux/settings/asinc"
 const Login = () => {
    const dispatch = useDispatch()
    const {value,oninput} = Input({name:""})

    const login = () => {
        if(value.trim() == '') return dispatch(newError('Это поле не может быть пустым'))
        dispatch(loginAsink(value))
    }
    return <>
            <p className="loginP">Пароль</p>
            <input className="loginInp" value={value} onInput={oninput}/>
            <button onClick={login} className="loginBTN">Войти</button>

    </>
}

export default Login