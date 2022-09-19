import './TransactionElem.scss';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { saveTransactionAsinc } from '../../redux/data/asinc';
import { newError } from '../../redux/settings/asinc';

const newElem = {
    // _id: 2,
    sum: '',
    cateqory: '',
    valut: '',
    description: '',
    date: ''
}

const TransactionElem = ({close}) => {
    const { valuts, cateqory, currentElem } = useSelector(state => ({ ...state.data,currentElem : state.settings.transactionElem }))
    const dispatch = useDispatch();
    const [elem, setElem]  = useState(currentElem.elem ? currentElem.elem : newElem)

    const memoValuts = useMemo(() => valuts.map((val, i) => <option value={val} key={i}>{val}</option>), [valuts])
    const memoCateqory = useMemo(() => cateqory.map((val, i) => <option  value={val} key={i}>{val}</option>), [cateqory])

    const changeElem = ({target})=> {
        setElem({...elem,[target.slot] : target.value })
    }
    useEffect(()=>{
        if(currentElem.elem) return;
        setElem({...elem, cateqory : cateqory[0], valut : valuts[0]})
    },[])

    const saveElem = () => {

        let IsError = false;
        for(const key in elem){
            const el = elem[key];
            if(typeof el === 'number') continue;
            el.trim() == '' && (IsError = true)
        }
        if(IsError) return  dispatch(newError('Заполните все поля'))


        dispatch(saveTransactionAsinc(elem))
        close()
    }

    return <>
         <div className="C_tranzaction">
      <p>Сумма</p>
      <input type="number" onInput={changeElem} value={elem.sum} slot="sum" />
    </div>
    <div className="C_tranzaction">
      <p>Валюта</p>
      <select  slot="valut" onChange={changeElem}  value={elem.valut} >
    {memoValuts}
      </select>
    </div>
    <div className="C_tranzaction">
      <p>Категория</p>
      <select value={elem.cateqory} onChange={changeElem} slot="cateqory">
      {memoCateqory}
      </select>
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

export default TransactionElem