/* eslint-disable react/jsx-key */

import { ChangeEvent, JSXElementConstructor, ReactElement, ReactFragment, useEffect, useState } from 'react'
import style from './Manual.module.scss'
import StudentRegisterCard from './StudentRegisterCard';

export default function Manual() {
    const [student,setStudent] = useState(0);
    const [studentCard,setStudentCard] = useState([<StudentRegisterCard number='1'/>])
    useEffect(()=> 
        setStudent(0),[])
    function handleChange(e: ChangeEvent<HTMLInputElement>)
    {
        var val = e.target.value;
        if(val=='')
            setStudent(0)
        else
            setStudent(parseInt(val))
    }

    useEffect(()=> {
        if(student==0)
        {
            setStudentCard([])
            return;
        }
        var rows:JSX.Element[] = []
        for(var i=1;i<=student;i++)
        {
            rows.push(<StudentRegisterCard number={i.toString()}/>)
        }
        setStudentCard(rows)
    },[student])

    return (
        <div className={style.container}>
            <form action="">
                <div className={style.row}>
                    <label className={style.labelText} htmlFor="number">How many candidates will you enter for the challenge?</label>
                    <input className={style.input} type="text" onChange={e=> handleChange(e)}/>
                    <div id='student' className={style.students}>
                        {studentCard}
                    </div>
                </div>
            </form>
        </div>
    )
}