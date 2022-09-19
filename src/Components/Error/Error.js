import './Error.scss'
const Error = ({text}) => {
    // const { error: {text} } = useSelector(state => state.settings)
    return <div className="G_Error">
        {text}
    </div>
}
export default Error