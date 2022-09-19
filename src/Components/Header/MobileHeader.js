import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePasswordOn, changeThema, leaveOn, openCreatTransaction, openNewCateqory, openSalary, openWorkers } from '../../redux/settings/settings'
import './MobileHeader.scss'
import { Link } from 'react-router-dom';
const MobileHeader = () => {
    const [open, setOpen] = useState('')

    const openMenu = () => {
        setOpen(open == '' ? 'open' : '')
    }

    const dispatch = useDispatch();
    const { thema: { img } } = useSelector(state => state.settings)

   

    return <div className="mobileHeader">
        <div className={"burgerC " + open} onClick={openMenu}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <header className={'C_header ' + open}>
            <h1>LOGO</h1>
            <Link to="/" className='sortButton'>Транзакции </Link>
            <button slot='transaction' onClick={()=>dispatch(openCreatTransaction(true))}>Создать транзакцию</button>
            <button slot='cateqory' onClick={()=>dispatch(openNewCateqory(true))}>Создать категорию</button>
            <div className='m20'></div>
            <Link to="workers" className='sortButton'>Сотрудники</Link>
            <button slot='workers' onClick={()=>dispatch(openWorkers(true))}>Создать сотрудника</button>
            {/* <button slot='cateqory' onClick={()=>dispatch(openSalary(true))}>Создать зарплату</button> */}
            <img onClick={() => dispatch(changeThema())} src={img} />
          
        </header>
    </div>
}

export default MobileHeader