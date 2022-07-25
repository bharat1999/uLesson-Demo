import React from "react";
import Router, { useRouter } from 'next/router'
import style from './Modal.module.scss'

interface modal {
    setOpenModal:any,
}

export default function Modal(props:modal) {
  const router = useRouter()
  return (
    <div className={style.modalBackground}>
      <div className={style.modalContainer}>
        <div className={style.heading}>
          Are you sure you want to cancel your registration?
        </div>
        <div className={style.subheading}>
        Kindly confirm if you want to cancel the registration process.
        </div>
        <div className={style.btns}>
          <button className={style.btn} onClick={()=> router.push('/')}>
            Confirm
          </button>
          <button className={style.btn + " " + style.back} onClick={() => {props.setOpenModal(false);}}>Back to Registration</button>
        </div>
      </div>
    </div>
  );
}
