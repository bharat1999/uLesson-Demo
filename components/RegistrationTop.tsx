import style from './RegistrationTop.module.scss'
import logo from '../public/img/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Modal from './Modal'

interface state {
    setOpenModal:any,
    modalOpen:any,
    heading:string,
    subheading:string,
    btnText:string
}


export default function RegistrationTop(props:state){



    return (
    <div className={style.body }>
        <div className={style.container}>
        <Link href='/'>
            <Image className={style.logo} src={logo} alt=''/>
        </Link>
        <a className={style.close} type='button' onClick={()=>{props.setOpenModal(true)}}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99998 7.11465L15.6 0.514648L17.4853 2.39998L10.8853 8.99998L17.4853 15.6L15.6 17.4853L8.99998 10.8853L2.39998 17.4853L0.514648 15.6L7.11465 8.99998L0.514648 2.39998L2.39998 0.514648L8.99998 7.11465Z" fill="black"/>
            </svg>                                                                                                            
        </a>
    </div>
    {props.modalOpen && <Modal setOpenModal={props.setOpenModal} heading={props.heading} subheading={props.subheading} btnText={props.btnText}/>}

    </div>
     )
}