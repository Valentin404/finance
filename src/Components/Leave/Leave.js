import { useDispatch } from 'react-redux';
import { leaveOn } from '../../redux/settings/settings';
import { leaveUser } from '../../redux/user/user';
import './Leave.scss'
const Leave = () => {
    
    const dispatch = useDispatch();
    const leave = () => {
        dispatch(leaveUser())
        dispatch(leaveOn(false))
    }
    return <>
        <button className='leaveYes' onClick={leave}>Вы уверены</button>
        <button className='leaveNo' onClick={()=>dispatch(leaveOn(false))}>Отмена</button>
    </>
}
export default Leave