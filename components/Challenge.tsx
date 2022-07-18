import style from './Challenge.module.scss'

import Stages from './Stages'

const stage1Data = ['VIRTUAL contest to be taken on the uLesson app - available on Android, iOS (phones and tablets) and web (laptops, desktop computers). ',
        'Stage One is open to all registered candidates. ']

const stage2Data = ['PHYSICAL contest to be held at locations in Lagos, Abuja, and Port Harcourt. Schools or parents will be responsible for bringing invited candidates to these locations.',
        'Top 30 candidates in each of the four categories (Junior, Senior Business, Senior Science, Senior Humanities) will be invited to proceed to Stage Two.']

const finalStageData = ['PHYSICAL quiz show to be held in Lagos or Abuja. Arrangements will be made by the uLesson team to cover transport and welfare costs for successful candidates who do not reside in the host city.',
        'Top 10 candidates in each of the four categories (Junior, Senior Business, Senior Science, Senior Humanities) will be invited to proceed to the final stage.']

export default function Challenge() {
    return (
        <div className={style.container}>
            <div className={style.heading}>
                Challenge Stages
            </div>
            <div className={style.stagesContainer}>
                <Stages heading='Stage 1' date = 'Saturday, July 2nd, 2022; 10:00am.' clr='orange' data={stage1Data}/>
                <Stages heading='Stage 2' date = 'Saturday, July 16th, 2022' clr='yellow' data={stage2Data}/> 
                <Stages heading='Final Stage' date = 'Saturday, July 30th, 2022.' clr='green' data={finalStageData}/> 
            </div>
        </div>
    )
}