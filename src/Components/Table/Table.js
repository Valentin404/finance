import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { creatNumForDate, errorForInput } from '../../helps/helpsFun'
import Elem from './Elem'
import './Table.scss'

const Table = ({onInput, topTable,data, sortData, setSortData,removeElem, changeElem,cateqory }) => {

    const [isCategoryHover, setCategoryHover] = useState(true)
    const { valuts } = useSelector(state => ({ ...state.data }))
    const changeValut = ({ target }) => setSortData({ ...sortData, valut: target.value })

    const changeCateqory = (e) => {
        setCategoryHover(false);
        setTimeout(()=> setCategoryHover(true),400)
        setSortData({ ...sortData, cateqory: e.target.value })
    }
    
    const changeSum = () => {
        const amount = sortData.amount == 'ot' ? 'from' : 'ot'
        setSortData({ ...sortData, amount: amount })
        
    }

    const changeData = ({target}) => {
        const time = creatNumForDate(target.value)
        const minimumDate = target.slot == 'ot';

        if(sortData.date.ot || sortData.date.from){   // Проверка на то чтобы дата от всегда была меньше
            if(minimumDate){
               if(sortData.date.from < time && sortData.date.from) { 
                 errorForInput(target);
                 return  target.value = NaN };
            } else {
                if(sortData.date.ot > time && sortData.date.ot)  { 
                    errorForInput(target);
                    return  target.value = NaN };

            }
        }
        setSortData({...sortData, date :{...sortData.date, [target.slot] : time } })
    }

    const memoValuts = useMemo(() => valuts.map((val, i) => <option value={val} key={i}>{val}</option>), [valuts])

    const memoCateqory = useMemo(() => cateqory.map((val, i) => <button onClick={changeCateqory} className="modal_category" value={val} key={i}>{val}</button>), [cateqory])

    const memoData = useMemo(()=>data.map((elem,i)=> <Elem elem={elem} changeElem={changeElem} {...elem} key={elem._id} removeElem={removeElem}/>),[data])


    const sortName = onInput  
            ? <input className='inputTable' value={sortData.cateqory} placeholder="Найти по имени" onInput={onInput}/>
            :   <div className='sortButton'>
                {topTable.sortCateq}
                {isCategoryHover && <div className="categoryHover">
                    <button value={0} onClick={changeCateqory} className="modal_category">Все</button>
                    {memoCateqory}
                </div>}

            </div>


    return <div className="G_C_table">
        <div className="C_table mW">
            <div className="C_sort_top">
              {sortName}
                <div className="C_sort_date">
                    <div className="sort_date">
                        <p>От</p>
                        <input slot="ot" onInput={changeData} type="date" />
                    </div>
                    <div className="sort_date">
                        <p>До</p>
                        <input slot="from" onInput={changeData}  type="date" />
                    </div>
                </div>
            </div>
            <div className="C_for_table">
                <div className="table" id="table">

                    <div className="table_elem lineB main">

                        <div id="elem_type" className="elem_type elem">{topTable.btn1}</div>
                        <div className="line"></div>
                        <div className="elem_currency elem">
                            <select onChange={changeValut}>
                                <option value={0}>Валюта</option>
                                {memoValuts}
                            </select>
                        </div>
                        <div className="line"></div>
                        <button className="elem_amount elem" onClick={changeSum} >{topTable.btn3}</button>
                        <div className="line"></div>
                        <div className="elem_description elem">Описание</div>
                        <div className="line"></div>
                        <div className="elem_date elem">Дата</div>
                        <button className='remove'>X</button>
                    </div>

                <div className="">
                    {memoData}
                </div>

                
                </div>
            </div>
        </div>
    </div>
}

export default Table