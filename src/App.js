
import { useDispatch, useSelector } from 'react-redux';
import './style.helps/helps.scss'
import './App.css';
import Login  from './Components/Login/Login';
import Modal from './Modal/Modal';
import { Header } from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Transactions from './Components/Transactions/Transactions';
import Leave from './Components/Leave/Leave';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import TransactionElem from './Components/Transactions/TransactionElem';
import { openCreatTransaction, openNewCateqory, openSalary, openWorkers } from './redux/settings/settings';
import CateqoryNew from './Components/CateqoryNew/CateqoryNew';
import Error from './Components/Error/Error';
import WokersElem from './Components/Workers/WokersElem';
import MobileHeader from './Components/Header/MobileHeader';
import NewSalary from './Components/NewSalary/NewSalary';
import Workers from './Components/Workers/Workers';

function App() {
  const { 
    password, 
    isAdmin,
    thema,
    leave,
    changePassword,
    transactionElem:{active,elem},
    error,
    workers,
    salary,
    cateqory} = useSelector(state=>({...state.user,...state.settings }))
  const dispatch = useDispatch();
  const isLogin = (password === false && isAdmin === null)

  if(isLogin) return <> 
  <Modal logo="Логинизация" Component={Login}></Modal>
  {error.active && <Error text={error.text}/> }
  </>
  
  const textTransaction = elem == null ? "Создать транзакцию" : "Редактировать транзакцию";
  const textWorkers = workers.elem == null ? "Создать сотрудника" : "Редактировать сотрудника";
  

  return (
    <>
   {  window.innerWidth  > 650 && <Header/> }
   {/* {  window.innerWidth  > 650 ? <Header/>  : <MobileHeader />} */}

     {leave && <Modal logo="Выйти" Component={Leave}></Modal>}
     {changePassword && <Modal logo="Изменить пароль" Component={ChangePassword}></Modal>}
     {active && <Modal logo={textTransaction} close={()=>dispatch(openCreatTransaction(false))} Component={TransactionElem}></Modal>}
     {cateqory && <Modal logo="Новая категория" close={()=>dispatch(openNewCateqory(false))} Component={CateqoryNew}></Modal>}
     {workers.active && <Modal logo={textWorkers} close={()=>dispatch(openWorkers(false))} Component={WokersElem}></Modal>}
     {salary && <Modal logo="Создать зарплату" close={()=>dispatch(openSalary(false))} Component={NewSalary}></Modal>}
     {error.active && <Error text={error.text}/> }
     
     <Routes>
      <Route path="/" element={<Transactions />} />
      <Route path="/workers" element={<Workers />}>
      </Route>
    </Routes>
      {  window.innerWidth  <= 650 && <MobileHeader/> }
    <style>

    body {`{
      color : ${thema.color};
      background : ${thema.body}
    }`}
    button,select,input,a,.sortButton {`{
      color : ${thema.color};
      background : ${thema.buttonBg}
      }`}
    .active {`{
      color : ${thema.active};
      }`}
    header {`{
      background : ${thema.header};
      }`}
      .line {`{
        background : ${thema.line};
      }`}
      .lineB {`{
        border-color: ${thema.line};
      }`}
      
      .C_for_Grafic.type {`{
         background-color: ${thema.grafic.type};
      }`}
      .grafic.valuts {`{
         background-color: ${thema.grafic.valuts};
      }`}
      .grafic.sum {`{
         background-color: ${thema.grafic.sum};
      }`}
      .hiddenLogo {`{
         background-color: ${thema.body};
      }`}
      .burgerC div {`{
         background-color: ${thema.color};
      }`}
      

    </style>
    </>
  );
}

export default App;

