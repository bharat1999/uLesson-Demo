
import style from './Navbar.module.scss'
import logo from '../public/img/logoWhite.png'
import Image from 'next/image'
import { useState } from 'react'

const hamburger = <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="25.0006" height="1.6667" fill="white"/>
<rect y="7.1665" width="25.0006" height="1.6667" fill="white"/>
<rect y="13.834" width="25.0006" height="1.6667" fill="white"/>
</svg>

const close = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 14.1146L22.6 7.51465L24.4853 9.39998L17.8853 16L24.4853 22.6L22.6 24.4853L16 17.8853L9.39998 24.4853L7.51465 22.6L14.1146 16L7.51465 9.39998L9.39998 7.51465L16 14.1146Z" fill="white"/>
</svg>



export default function Navbar() {
    const [isOpen,setOpen] = useState(false)

    function handleClick() {
        setOpen(!isOpen)
    }

    return (
        <div className={style.container}>
            <div className={style.largeContainer}>
                <div className={style.navLogo}>
                    <Image src={logo} alt=''/>
                </div>
                <div className={style.links}>
                    <a className={style.li}>
                        Schools Challenge
                    </a>
                    <a className={style.li}>
                        Learning Bundle
                    </a>
                    <a className={style.li}>
                        Coding School 
                    </a>
                    <button className={style.btn} type='button'>
                        TRY IT NOW
                    </button>
                </div>
            </div>
            <div className={style.smallContainer}>    
                <div className={style.navContainer}>
                    <div className={style.navLogo}>
                        <Image src={logo} alt=''/>
                    </div>
                    <div className={style.navBtn} onClick={handleClick}>
                        <a>{isOpen==true?close:hamburger }</a>
                    </div>
                </div>
                
                <div className={isOpen==true?style.show:style.hide}>
                    <div className={style.links}>
                        <div className={style.li}>
                            Schools Challenge
                        </div>
                        <div className={style.li}>
                            Learning Bundle
                        </div>
                        <div className={style.li}>
                            Coding School 
                        </div>
                        <button className={style.btn} type='button'>
                            TRY IT NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}