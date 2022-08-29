import style from './Benefits.module.scss'
import AwardCard from './AwardCard'
import first from '../public/img/1.png'
import second from '../public/img/2.png'
import third from '../public/img/3.png'
import fourth from '../public/img/4.png'
import award from '../public/img/award.png'
import Image from 'next/image'
import SchoolsStudents from './Schools&Student'


export default function Benefits() {
    const prizes = [
        {
            position:'1st Place',
            prize:'₦ 1,000,000',
            src:first,
            clr:'first'
        },
        {
            position:'2nd Place',
            prize:'₦ 250,000',
            src:second,
            clr:'second'
        },
        {
            position:'3rd Place',
            prize:'₦ 150,000',
            src:third,
            clr:'third'
        },
        {
            position:'4th - 10th Place',
            prize:'Other Prize',
            src:fourth,
            clr:'fourth'
        }
    ];
    return (
        <div className={style.container}>
            <SchoolsStudents/>
            <div className={style.heading}>
                <p>Benefits and Awards</p>
            </div>
            <div className={style.awards}>
                {
                    prizes.map((p,key) => (
                        // eslint-disable-next-line react/jsx-key
                        <AwardCard key={key} position={p.position} prize={p.prize} src={p.src} clr={p.clr}/>
                    ))
                }
            </div>
            <div className={style.subheading}>
                <Image src={award} alt=''/>
                <span>These awards apply to each of the four categories. The top 3 winning schools in each category will receive awards</span>
            </div>
        </div>
    )
}