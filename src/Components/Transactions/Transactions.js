import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { creatNumForDate } from "../../helps/helpsFun"
import Scheme from "../Scheme/Scheme"
import { creatDataForGrafic } from "../Table/helpsTable"
import Table from "../Table/Table"
import { removeTransaction } from "../../redux/data/asinc"
import { changeTransitionElem } from "../../redux/settings/settings"
import AllChat from "../Chart/AllChat"

const currentFilter = {
    cateqory: '0',// no filter
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
    btn1 : "Тип",
    btn3 : "Сумма",
    sortCateq : 'Категория'
}


const Transactions = () => {
    const { transactions, valuts ,cateqory} = useSelector(state => ({ ...state.data }))
    const dispatch = useDispatch();
    const [data, setData] = useState(transactions)
    const [sortData, setSortData] = useState(currentFilter)
    const [dataForSchema, setDataForSchema] = useState(creatDataForGrafic(valuts, sortData, data))
    const changeElem = (elem)=> {
        dispatch(changeTransitionElem(elem))
    }
    const sort = () => {
        let newList = [...transactions];
        const ot = sortData.date.ot ? sortData.date.ot : 0;
        const from = sortData.date.from ? sortData.date.from : Infinity;
        if (sortData.amount !== null) newList.sort((one, two) => sortData.amount == 'ot' ? one.sum - two.sum : two.sum - one.sum);
        if (sortData.valut !== '0') newList = newList.filter(elem => sortData.valut == elem.valut);
        if (sortData.cateqory !== '0') newList = newList.filter(elem => sortData.cateqory == elem.cateqory);
        if (sortData.date.from || sortData.date.ot) newList = newList.filter(elem => {
            const date = creatNumForDate(elem.date)
            return (date >= ot && date <= from)
        })
        setData(newList)
    }

const removeElem = _id => dispatch(removeTransaction(_id))


    useEffect(() => {
        sort()
        setDataForSchema(creatDataForGrafic(valuts, sortData, transactions))
    }, [sortData,transactions])


    return <main>
       <AllChat data={sortData} transactions={transactions} valuts={valuts}/>
        <Scheme dataForSchema={dataForSchema} />
        <Table 
            topTable={topTable}
            cateqory={cateqory}
            changeElem={changeElem}
            removeElem={removeElem} 
            data={data} 
            setSortData={setSortData} 
            sortData={sortData} />
    </main>
}
export default Transactions