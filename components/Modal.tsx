import React from "react";
import Router, { useRouter } from 'next/router'
import style from './Modal.module.scss'

interface modal {
    setOpenModal:any,
    heading:string,
    subheading:string,
    btnText:string
}

export default function Modal(props:modal) {
  const router = useRouter()
  return (
    <div className={style.modalBackground}>
      <div className={style.modalContainer}>
        <div className={style.heading}>
          {props.heading}
        </div>
        <div className={style.subheading}>
        {props.subheading}
        </div>
        <div className={style.btns}>
          <button className={style.btn} onClick={()=> router.push('/')}>
            Confirm
          </button>
          <button className={style.btn + " " + style.back} onClick={() => {props.setOpenModal(false);}}>{props.btnText}</button>
        </div>
      </div>
    </div>
  );
}
