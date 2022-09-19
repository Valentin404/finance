
import { useSelector,useDispatch } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { saveTransactionAsinc, saveWorkersAsinc } from '../../redux/data/asinc';
import { newError } from '../../redux/settings/asinc';

const newElem = {
    // _id: 2,
    sum: '',
    name: '',
    valut: '',
    description: '',
    date: ''
}

const WokersElem = ({close}) => {
    const { valuts, currentElem,typeSalary } = useSelector(state => ({ ...state.data,currentElem : state.settings.workers }))
    const dispatch = useDispatch();
    const [elem, setElem] = useState(currentElem.elem ? currentElem.elem : newElem)

    const memoValuts = useMemo(() => valuts.map((val, i) => <option value={val} key={i}>{val}</option>), [valuts])


    // const memoTypeSalary= useMemo(() => typeSalary.map((val, i) => <option  value={val} key={i}>{val}</option>
    // ), [typeSalary])
console.log(elem);

    const changeElem = ({target})=> {
        setElem({...elem,[target.slot] : target.value })
    }
    useEffect(()=>{
        if(currentElem.elem) return;
        setElem({...elem, valut : valuts[0]})
        // setElem({...elem, cateqory : typeSalary[0], valut : valuts[0]})
    },[])

 
    const saveElem = () => {

        let IsError = false;
        for(const key in elem){
            const el = elem[key];
            if(typeof el === 'number') continue;
            el.trim() == '' && (IsError = true)
        }
        if(IsError) return  dispatch(newError('Заполните все поля'))
     
        dispatch(saveWorkersAsinc(elem))
        close()
    }

    return <>
         <div className="C_tranzaction">
      <p>Имя</p>
      <input onInput={changeElem} value={elem.name} slot="name" />
    </div>
    <div className="C_tranzaction">
      <p>Валюта</p>
      <select  slot="valut" onChange={changeElem}  value={elem.valut} >
    {memoValuts}
      </select>
    </div>
    <div className="C_tranzaction">
      <p>Зарплата</p>
      {/* <select value={elem.cateqory} onChange={changeElem} slot="cateqory">
      {memoTypeSalary}
      </select> */}
        <input type="number" onInput={changeElem} value={elem.sum} slot="sum" />
    </div>
    <div className="C_tranzaction">
      <p>Описание</p>
      <input type="text" onInput={changeElem} value={elem.description} slot="description" />
    </div>
    <div className="C_tranzaction">
      <p>Дата</p>
      <input slot="date" onInput={changeElem} value={elem.date} type="date"/>
    </div> 
    <button onClick={saveElem}>
        Сохранить
    </button>
    </>
}

export default WokersElem