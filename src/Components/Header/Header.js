import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { changePasswordOn, changeThema, leaveOn, openCreatTransaction, openNewCateqory, openSalary, openWorkers } from '../../redux/settings/settings';
import './Header.scss'

export const Header = () => {
    const dispatch = useDispatch();
    const [showHover,setShowHover ] = useState(true)
    const { thema: { img } } = useSelector(state => state.settings)
    
    const creatTransaction = e => {
        if(e.target.className !== 'sortButton') e.preventDefault()
        switch(e.target.slot){
            case 'transaction' : return  dispatch(openCreatTransaction(true))
            case 'cateqory' : return  dispatch(openNewCateqory(true))
        }
        setShowHover(false)
        setTimeout(()=>setShowHover(true),400)
      
    }
    const creatWorkers = e => {
        if(e.target.className !== 'sortButton') e.preventDefault()
        switch(e.target.slot){
            case 'workers' : return  dispatch(openWorkers(true))
            // case 'cateqory' : return  dispatch(openSalary(true))
        }
        
        setShowHover(false)
        setTimeout(()=>setShowHover(true),400)
      
    }

    return <header>
        <div className='header_C mW'>


            <div className='leftMenu'>
                <h1>LOGO</h1>
                <Link to="/"  onClick={creatTransaction} className='sortButton'>
                    Транзакции
                   {showHover && <div className='categoryHover'> 
                        <button slot='transaction'>Создать транзакцию</button>
                        <button slot='cateqory'>Создать категорию</button>
                    </div>}
                </Link>
                <Link to="workers" onClick={creatWorkers} className='sortButton'>Сотрудники
               {showHover && <div className='categoryHover'>
                        <button slot='workers'>Создать сотрудника</button>
                        {/* <button slot='cateqory'>Создать зарплату</button> */}
                    </div>}
                </Link>

            </div>
            <div className='rightMenu'>
                <button onClick={()=>dispatch(changePasswordOn(true))}>Изменить Пароль</button>
                <button onClick={()=>dispatch(leaveOn(true))}>Выйти</button>
                <img onClick={()=>dispatch(changeThema())} src={img} />
            </div>
        </div>
    </header>
}