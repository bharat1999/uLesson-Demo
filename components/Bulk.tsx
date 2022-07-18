
import style from './Bulk.module.scss'

const icon = <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<path d="M23.9998 25.172L32.4858 33.656L29.6558 36.486L25.9998 32.83V44H21.9998V32.826L18.3438 36.486L15.5138 33.656L23.9998 25.172ZM23.9998 4C27.4338 4.00016 30.7479 5.26223 33.3122 7.54624C35.8764 9.83025 37.512 12.9769 37.9078 16.388C40.3963 17.0666 42.5672 18.5982 44.0411 20.7151C45.515 22.8319 46.1981 25.3994 45.971 27.9688C45.744 30.5382 44.6212 32.9461 42.7989 34.7716C40.9766 36.5972 38.5708 37.7243 36.0018 37.956V33.928C36.9221 33.7966 37.8071 33.4831 38.605 33.0059C39.4028 32.5288 40.0977 31.8974 40.6489 31.1488C41.2002 30.4002 41.5967 29.5493 41.8155 28.6457C42.0343 27.7421 42.0709 26.804 41.9232 25.8861C41.7755 24.9683 41.4464 24.089 40.9552 23.2997C40.464 22.5104 39.8205 21.8268 39.0622 21.2889C38.3039 20.751 37.4461 20.3696 36.5388 20.1668C35.6315 19.9641 34.6929 19.9441 33.7778 20.108C34.091 18.6498 34.0741 17.1399 33.7282 15.6891C33.3824 14.2383 32.7164 12.8832 31.779 11.7231C30.8416 10.5629 29.6566 9.62721 28.3107 8.98439C26.9649 8.34157 25.4923 8.00794 24.0008 8.00794C22.5093 8.00794 21.0367 8.34157 19.6908 8.98439C18.345 9.62721 17.16 10.5629 16.2226 11.7231C15.2852 12.8832 14.6192 14.2383 14.2734 15.6891C13.9275 17.1399 13.9106 18.6498 14.2238 20.108C12.3991 19.7653 10.513 20.1616 8.98048 21.2095C7.44793 22.2575 6.39445 23.8713 6.05179 25.696C5.70913 27.5207 6.10536 29.4068 7.15331 30.9393C8.20127 32.4719 9.8151 33.5253 11.6398 33.868L11.9998 33.928V37.956C9.43069 37.7247 7.0246 36.5978 5.20206 34.7724C3.37951 32.947 2.25644 30.5391 2.02914 27.9697C1.80183 25.4002 2.48475 22.8326 3.95853 20.7155C5.4323 18.5985 7.6032 17.0668 10.0918 16.388C10.4872 12.9768 12.1226 9.82982 14.6869 7.54573C17.2513 5.26164 20.5657 3.99973 23.9998 4Z" fill="#301446"/>
</g>
</svg>



export default function Bulk() {
    return (
        <div className={style.container}>
           <div className={style.labelText}>
                Download .csv template and fill it with your student details
           </div>
           <button className={style.btn}>
                Dowload Template
           </button>
           <div className={style.uploadContainer}>
                {icon}
                <button className={style.btn}>Upload .csv file</button>
           </div>
        </div>
    )
}