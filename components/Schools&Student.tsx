
import style from './Schools&Students.module.scss'
import useCountDown from '../hooks/useCountDown'
import { useState } from 'react'

const schoolIcon = <svg className={style.span} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="64" rx="32" fill="#7B7FDA" fillOpacity="0.15"/>
<path d="M45 44H44V37C43.9983 36.3811 43.8051 35.7778 43.4471 35.273C43.089 34.7681 42.5835 34.3863 42 34.18V44H40V30.16C39.9993 29.6321 39.8594 29.1137 39.5942 28.6572C39.3291 28.2007 38.9482 27.8222 38.49 27.56L33.49 24.7C33.3334 24.6125 33.1695 24.5389 33 24.48V23H35C35.1307 22.9985 35.2598 22.9713 35.38 22.92C35.6243 22.8186 35.8185 22.6244 35.92 22.38C36.02 22.1366 36.02 21.8635 35.92 21.62C35.8724 21.4973 35.801 21.3851 35.71 21.29L32.71 18.29C32.6178 18.2001 32.5092 18.1288 32.39 18.08H32.29C32.2268 18.0752 32.1632 18.0752 32.1 18.08H31.98C31.9168 18.0752 31.8532 18.0752 31.79 18.08H31.69C31.57 18.1273 31.4611 18.1987 31.3699 18.2899C31.2787 18.3811 31.2073 18.4901 31.16 18.61C31.1514 18.6394 31.1514 18.6706 31.16 18.7C31.0838 18.786 31.029 18.8888 31 19V24.48C30.8305 24.5389 30.6666 24.6125 30.51 24.7L25.51 27.56C25.0518 27.8222 24.6709 28.2007 24.4058 28.6572C24.1406 29.1137 24.0007 29.6321 24 30.16V44H22V34.18C21.4165 34.3863 20.911 34.7681 20.5529 35.273C20.1949 35.7778 20.0017 36.3811 20 37V44H19C18.7348 44 18.4804 44.1054 18.2929 44.2929C18.1054 44.4805 18 44.7348 18 45C18 45.2652 18.1054 45.5196 18.2929 45.7071C18.4804 45.8947 18.7348 46 19 46H45C45.2652 46 45.5196 45.8947 45.7071 45.7071C45.8946 45.5196 46 45.2652 46 45C46 44.7348 45.8946 44.4805 45.7071 44.2929C45.5196 44.1054 45.2652 44 45 44ZM33 30H35V32H33V30ZM33 34H35V36H33V34ZM33 38H35V40H33V38ZM29 30H31V32H29V30ZM29 34H31V36H29V34ZM29 38H31V40H29V38ZM30 44V43C30 42.7348 30.1054 42.4805 30.2929 42.2929C30.4804 42.1054 30.7348 42 31 42H33C33.2652 42 33.5196 42.1054 33.7071 42.2929C33.8946 42.4805 34 42.7348 34 43V44H30Z" fill="#7B7FDA"/>
</svg>

const regIcon = <svg className={style.span} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="64" rx="32" fill="#68BC98" fillOpacity="0.15"/>
<path d="M28.0001 30.6667C29.0549 30.6667 30.0861 30.3539 30.9631 29.7678C31.8402 29.1818 32.5238 28.3489 32.9274 27.3743C33.3311 26.3998 33.4367 25.3274 33.2309 24.2929C33.0251 23.2583 32.5172 22.308 31.7713 21.5621C31.0254 20.8162 30.0751 20.3083 29.0406 20.1025C28.006 19.8967 26.9336 20.0023 25.9591 20.406C24.9846 20.8096 24.1516 21.4932 23.5656 22.3703C22.9795 23.2474 22.6667 24.2785 22.6667 25.3333C22.6667 26.7478 23.2287 28.1044 24.2288 29.1046C25.229 30.1048 26.5856 30.6667 28.0001 30.6667ZM38.6667 33.3333C39.4579 33.3333 40.2312 33.0987 40.889 32.6592C41.5468 32.2197 42.0595 31.595 42.3623 30.8641C42.665 30.1332 42.7442 29.3289 42.5899 28.553C42.4355 27.7771 42.0546 27.0643 41.4952 26.5049C40.9358 25.9455 40.223 25.5645 39.4471 25.4102C38.6712 25.2559 37.8669 25.3351 37.136 25.6378C36.4051 25.9406 35.7804 26.4533 35.3409 27.1111C34.9013 27.7689 34.6667 28.5422 34.6667 29.3333C34.6667 30.3942 35.0882 31.4116 35.8383 32.1618C36.5885 32.9119 37.6059 33.3333 38.6667 33.3333ZM44.0001 42.6667C44.3537 42.6667 44.6928 42.5262 44.9429 42.2761C45.1929 42.0261 45.3334 41.687 45.3334 41.3333C45.3323 40.0872 44.982 38.8663 44.3222 37.8092C43.6624 36.752 42.7195 35.901 41.6005 35.3526C40.4816 34.8042 39.2313 34.5805 37.9915 34.7067C36.7518 34.8329 35.5723 35.304 34.5867 36.0667C33.2808 34.7658 31.6188 33.8808 29.8105 33.5232C28.0022 33.1657 26.1285 33.3516 24.4257 34.0575C22.7229 34.7634 21.2673 35.9578 20.2424 37.4899C19.2175 39.022 18.6692 40.8233 18.6667 42.6667C18.6667 43.0203 18.8072 43.3594 19.0573 43.6095C19.3073 43.8595 19.6465 44 20.0001 44H36.0001C36.3537 44 36.6928 43.8595 36.9429 43.6095C37.1929 43.3594 37.3334 43.0203 37.3334 42.6667" fill="#68BC98"/>
</svg>

const timerIcon = <svg className={style.span} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="64" rx="32" fill="#EA7052" fillOpacity="0.15"/>
<path d="M32.0001 45.3334C24.6361 45.3334 18.6667 39.3641 18.6667 32.0001C18.6667 24.6361 24.6361 18.6667 32.0001 18.6667C39.3641 18.6667 45.3334 24.6361 45.3334 32.0001C45.3334 39.3641 39.3641 45.3334 32.0001 45.3334ZM33.3334 32.0001V25.3334H30.6667V34.6667H38.6667V32.0001H33.3334Z" fill="#EA7052"/>
</svg>



export default function SchoolsStudents() {


    const [days, hours, minutes] = useCountDown("August 15, 2022");  
    return (
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.card + " " + style.school}>
                    <div className={style.row}>
                        {schoolIcon}
                        <p className={style.heading}>21</p>
                    </div>
                    <div className={style.subheading}>
                        SCHOOLS REGISTERED
                    </div>
                </div>
                <div className={style.card + " " + style.registered}>
                    <div className={style.row}>
                        {regIcon}
                        <p className={style.heading}>4,025</p>
                    </div>
                    <div className={style.subheading}>
                        STUDENTS REGISTERED
                    </div>
                </div>
                <div className={style.card + " " + style.timer}>
                    <div className={style.row}>
                        {timerIcon}
                        <div className={style.time}>
                            <div className={style.row}>
                                <div className={style.subheading }>
                                    DAYS
                                </div>
                                <div className={style.subheading}>
                                    HOURS
                                </div>
                                <div className={style.subheading}>
                                    MINS
                                </div>
                            </div>
                        <p className={style.heading + " " + style}>{days} : {hours} : {minutes}</p>

                        </div>
                    </div>
                    <div className={style.subheading}>
                        TIME TO COMPETITION
                    </div>
                </div>
            </div>
        </div>
        
    )
}