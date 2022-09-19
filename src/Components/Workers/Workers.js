

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { creatNumForDate } from "../../helps/helpsFun"
import './Wokers.scss';
import Scheme from "../Scheme/Scheme"
import { creatDataForGrafic } from "../Table/helpsTable"
import Table from "../Table/Table"
import { removeTransaction, removeWorkers } from "../../redux/data/asinc"
import { changeTransitionElem, changeWorkersElem } from "../../redux/settings/settings"
import AllChat from "../Chart/AllChat"
import Chart from "../Chart/Chart"

const currentFilter = {
    cateqory: '',// no filter
    date: {
        from: null,
        ot: null
    },
    valut: '0',//no filter
    amount: null,
    limit: 5,
    typeChart: 'all'
}
const topTable = {
    btn1 : "Имя",
    btn3 : "Сумма",
    sortCateq : 'Зарплаты'
}


// workers
const Workers = () => {
    const {transactions , valuts,typeSalary,workers } = useSelector(state => ({ ...state.data}))

    const dispatch = useDispatch();
    const [data, setData] = useState(workers)
    const [sortData, setSortData] = useState(currentFilter)
    const [dataForSchema, setDataForSchema] = useState(creatDataForGrafic(valuts, sortData, data))

    // console.log(workers);
    const changeElem = (elem)=> {
        dispatch(changeWorkersElem(elem))
    }
    const sort = () => {
        let newList = [...workers];
        const ot = sortData.date.ot ? sortData.date.ot : 0;
        const from = sortData.date.from ? sortData.date.from : Infinity;
        if (sortData.amount !== null) newList.sort((one, two) => sortData.amount == 'ot' ? one.sum - two.sum : two.sum - one.sum);
        // if (sortData.amount !== null) {
        //     newList.sort((one, two) => {
        //     const sumOne = one.cateqory.split(' - ')
        //     const sum1 = +sumOne[0] + +sumOne[1];
        //     const sumTwo = two.cateqory.split(' - ')
        //     const sum2 = +sumTwo[0] + +sumTwo[1];
        //   return  sortData.amount == 'ot' ? sum1 - sum2 : sum2 - sum1
        // });
        // }
        
        if (sortData.cateqory.trim() !== '') newList = newList.filter(elem =>  elem.name.toLowerCase().includes(sortData.cateqory.toLowerCase()));
        if (sortData.valut !== '0') newList = newList.filter(elem => sortData.valut == elem.valut);
        if (sortData.date.from || sortData.date.ot) newList = newList.filter(elem => {
            const date = creatNumForDate(elem.date)
            return (date >= ot && date <= from)
        })
        setData(newList)
    }

const removeElem = _id => dispatch(removeWorkers(_id))


    useEffect(() => {
        sort()
        setDataForSchema(creatDataForGrafic(valuts, sortData, workers))
    }, [sortData,workers])

  
    // return <></>

    const inputChange = ({target}) => {
        setSortData({...sortData, cateqory : target.value})
    }
    const total = data.reduce((sum,elem)=>elem.sum + sum,0)
    console.log(total);
    return <main>
   {/* <Chart total="0" valut="Сотрудники"/> */}
<h1 className="total">Общая сумма : {total}</h1>
        <Table 
            topTable={topTable}
            cateqory={typeSalary}
            changeElem={changeElem}
            removeElem={removeElem} 
            onInput={inputChange}
            data={data} 
            setSortData={setSortData} 
            sortData={sortData} />
    </main>
}
export default Workers