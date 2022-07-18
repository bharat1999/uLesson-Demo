import style from './Categories.module.scss'
import CategoryCard from './CategoryCard'
import Eligibility from './Eligibility'
import Rules from './Rules'

export default function Categories() {
    const science = ['Mathematics','English Language','Physics','Chemistry','Biology']
    const business = ['Mathematics','English Language','Economics','Accounting','Commerce / Business Studies']
    const humanities = ['Mathematics','English Language','Economics','Commerce / Business Studies','Government & Politics']
    const junior = ['Mathematics','English Language','Basic Science']

    return (
        <div className={style.container}>
            <div className={style.heading}>
            Competition Categories
            </div>
            <div className={style.categories}>
                <div className={style.junior}>
                    <div className={style.juniorHeading}>
                        <p>Junior</p>
                    </div>
                    <div>
                        <CategoryCard class='junior' heading='' subjects={junior} />
                    </div>    
                </div>
                <div className={style.senior}>
                    <div className={style.seniorHeading}>
                        <p>Senior</p>
                    </div>
                    <div className={style.row}>
                        <CategoryCard class='senior' heading='Science' subjects={science} />
                        <CategoryCard class='senior' heading='Business' subjects={business}/>
                        <CategoryCard class='senior' heading='Humanities' subjects={humanities}/>
                    </div>
                    <div className={style.col}>
                        <div className={style.card}>
                            <div className={style.seniorHeadingMobile}>
                                <p>Senior</p>
                            </div>
                            <CategoryCard class='senior' heading='Science' subjects={science} />    
                        </div>
                        <div className={style.card}>
                            <div className={style.seniorHeadingMobile}>
                                <p>Senior</p>
                            </div>
                            <CategoryCard class='senior' heading='Science' subjects={science} />    
                        </div>
                        <div className={style.card}>
                            <div className={style.seniorHeadingMobile}>
                                <p>Senior</p>
                            </div>
                            <CategoryCard class='senior' heading='Science' subjects={science} />    
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.eligibilityAndRules}>
                <Eligibility/>
                <Rules/>
            </div>
        </div>
    )
}