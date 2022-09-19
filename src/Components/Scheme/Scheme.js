import { useMemo } from "react"
import MiniScheme from "./MiniScheme"
import './Scheme.scss'
const Scheme = ({ dataForSchema }) => {



    const memoMiniScheme = useMemo(() => {
        const memoSchema = []
        let i = 0;
        for (const valut in dataForSchema) {
            const type = dataForSchema[valut]
            memoSchema.push(<MiniScheme dataForSchema={dataForSchema} i={i} type={type} key={i}/>)
            i++;
        }
        return memoSchema
    }, [dataForSchema])
    return <div className="center">
        {memoMiniScheme}
    </div>
}

export default Scheme