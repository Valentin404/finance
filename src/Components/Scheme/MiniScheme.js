import { useEffect, useMemo } from "react";

const nameGrafic = ['ВСЕ', 'ДОХОД', 'РАСХОД']

const MiniScheme = ({ type, i, dataForSchema }) => {

    // const memoValuts = useMemo(()=>{

    // })

    const MemoThreeSheme = useMemo(() => { 
        const memoShemeValuts = [];
        const memoSheme = [];

        let i = 0;
        for (const currentValut in type) {
            memoShemeValuts.push(
                <div key={i} className="grafic valuts">
                    {currentValut}
                </div>
            )
            memoSheme.push(
                <div key={i+'t'} className="grafic sum">
                    {type[currentValut]}
                </div>
            )
            i++
        }
        return [
        <div className="C_for_Grafic" key={i+'C'}>{memoShemeValuts}</div>,
        <div className="C_for_Grafic" key={i+'S'}>{memoSheme}</div>
         ]
    },[dataForSchema])

    return <div className="C_AllGrafic mW">
        <div className="C_for_Grafic type">
            <div className="grafic">
                {nameGrafic[i]}
            </div>
        </div>
        {/* <div className="C_for_Grafic"> */}
            {MemoThreeSheme}

        {/* </div> */}
    </div>
}

export default MiniScheme