const Elem = ({elem, _id,name,sum,cateqory,valut,date,description,removeElem, changeElem}) => {

    const changeElemEvent = (e) => {
      if(e.target.className == 'remove') return 
      changeElem(elem)
    }
    
    const classColor = sum > 0 ? "green" : 'red'
    // const classColor = name ? '' : sum > 0 ? "green" : 'red'

    return  <div className="table_elem lineB" onClick={changeElemEvent}>
    <div id="elem_type" className="elem_type elem">
      {name ? name :cateqory}
    </div>
    <div className="line"></div>
    <div className="elem_currency elem">{valut}</div>
    <div className="line"></div>
    <button className={'elem_amount elem '+ classColor} id="elem_amount">
     {sum} 
    </button>
    <div className="line"></div>
    <div className="elem_description elem">{description}</div>
    <div className="line"></div>
    <div className="elem_date elem">{date}</div>
    <button className="remove" onClick={()=>removeElem(_id)}>X</button>
  </div>
}
export default Elem