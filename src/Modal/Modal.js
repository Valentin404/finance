import './modal.scss'
const Modal = ({Component,logo,close}) => {
    return   <div id="modal" className="modal">

            { close && <button onClick={close} className="modal_close" id="modal_close">X</button>}
            <div className="content_modal" id="content_modal">
                <h1 className="modalH">{logo}</h1>
                <Component close={close}/>
    </div>
</div>

}

export default Modal