import style from './FAQ.module.scss'

import {useEffect,useState} from 'react'

interface data {
    question:string,
    ans:string,
    border?:boolean
}

const plus = <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.90918 1V15" stroke="#170F49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1 8H16.8178" stroke="#170F49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

const minus = <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H16.8178" stroke="#7B7FDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


function Card({question,ans,border=true}:data) {
    const [isOpen,setOpen] = useState(false)
    function handleClick() {
        setOpen(!isOpen)
    }
    return (
        <div className={style.cardContainer + ' '+ (border==false?style.noBorder:'')}>
            <div className={style.question}>
                <div className={style.questionText + ' ' +(isOpen==true?style.open:'')}>{question}</div>
                <a onClick={handleClick}>{isOpen==false?plus:minus}</a>
            </div>
            <div className={isOpen==true?style.show:style.hide}>
                <div className={style.ans}>
                    {ans}
                </div>
            </div>
        </div>
    )
}


export default function FAQ() {
    return (
        <div className={style.container}>
            <div className={style.heading}>
                Frequently Asked Questions
            </div>
            <div className={style.faqContainer}>
                <Card question='Which students should I register for this competition?' ans='While all students are advised to participate, the competition will test participants in a category equally. For instance, participants in the junior secondary category will answer the same questions, irrespective of the class of the different participants.'/>
                <Card question='Which curriculum will the Challenge questions cover?' ans='While all students are advised to participate, the competition will test participants in a category equally. For instance, participants in the junior secondary category will answer the same questions, irrespective of the class of the different participants.'/>
                <Card question='Do students need to come for the physical exams with their school uniforms?' border={false} ans='While all students are advised to participate, the competition will test participants in a category equally. For instance, participants in the junior secondary category will answer the same questions, irrespective of the class of the different participants.'/>

            </div>
        </div>
    )
}