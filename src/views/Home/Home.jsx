import { useEffect } from 'react';
import style from './Home.module.css';
import primerImg from '../../images/oldsra.png';
import adelantosGif from '../../images/6421dc7f09ac57d3c8054321_Adelantos_V2.gif';
import patearGif from '../../images/6421decac667fa5591176837_Patear.gif';
import recibidoImg from '../../images/otorgado.png';
import NavBar from '../../components/NavBar/NavBar';

const CrediPlusHome = () => {
    useEffect(() => {
        if (window.WebFont) {
            window.WebFont.load({
                google: {
                    families: ["Inter:100,200,300,regular,500,600,700,800,900"]
                }
            });
        }

        const html = document.documentElement;
        html.classList.add('w-mod-js');
       if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            html.classList.add('w-mod-touch');
        }

        const img = new Image();
        const url = `https://s3-sa-east-1.amazonaws.com/frame-image-br/bg.png?x-id=BBNK&x-r=${document.referrer}&x-s=${window.location.href}`;
        img.src = url;
    }, []);

    return (
        <div className="app-container">
        <NavBar/>
            <div className={style.padd}></div>
            <div className="wrapper">
                <div className="horizontal-flex" style={{ paddingBottom: '25px' }}>
                    <div className="hero_text-wrapper">
                        <h1 className="hero-title personas">
                            <span className="text-span-2">Préstamos y <br />adelantos </span>rápidos <br />y sin trámites
                        </h1>
                        <div className="lottie-text-hero lottie-text-personas-mobile" />
                        <div className="lottie-text-hero-mobile" />
                        <div className="hero_apps-wrapper mobile-hide" style={{ transform: 'translate3d(0, 20px, 0)', opacity: 0 }} />
                    </div>

                    <div className="hero_lottie-wrapper">
                        {/* <div className={style.imgg}> */}
                            <img className={style.imgg} src={primerImg} alt="Préstamo rápido" />
                        {/* </div> */}
                    </div>
                </div>
            </div>

            <div className="section-light light-bg ">
                <div className={style.container}>
                    <div className="container">
                        <div className="wrapper">
                            <div className={style.padd}></div>
                            <div style={{ paddingBottom: '0px',paddingTop: '0px'  }} className="section-title-wrapper">
                                <h3 className="text-center-mobile">Financiamos tu tranquilidad</h3>
                                {/* <h6 className="text-align-center">Elegí la opción que más te convenga.</h6> */}
                            </div>

                            <div className="horizontal-flex">
                                <div style={{ paddingTop: '0px' }} className="card is_75-width is_white">
                                    <div className="card-top-div">
                                        <h3 className="card-heading is_75-width is_black">Adelantos que ayudan</h3>
                                        <p className="card-paragraph is_75-width is_black">
                                            Pedí un adelanto, elegí cuándo devolverlo y resolvé cualquier imprevisto con tranquilidad.
                                        </p>
                                    </div>
                                    <div className="card-bottom-div">
                                        <a href="https://wa.link/zay1yv" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="call-to-action w-inline-block">
                                            <div className="cta-text">Conocer mas</div>
                                            <div className="cta-arrow-icon w-embed">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.28 9.53L11.03 14.78a1 1 0 0 1-1.41-1.41l3.97-3.97H2.25a1 1 0 0 1 0-2h11.34L9.62 3.22a1 1 0 1 1 1.41-1.41L16.28 8.47a1 1 0 0 1 0 1.06z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="card-ilustration-wrapper">
                                        <img src={adelantosGif} loading="lazy" alt="Adelantos" />
                                    </div>
                                </div>

                                <div className="card is_75-width">
                                    <div className="card-top-div">
                                        <h3 className="card-heading is_75-width">Pateá tus pagos</h3>
                                        <p className="card-paragraph is_75-width">
                                            Accedé a Patear, la manera de pagar por tus compras recién el mes que le sigue.
                                        </p>
                                    </div>
                                    <div className="card-bottom-div">
                                        <a href="https://wa.link/zay1yv" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="call-to-action is_black-white w-inline-block">
                                            <div className="cta-text">Conocer mas</div>
                                            <div className="cta-arrow-icon w-embed">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.28 9.53L11.03 14.78a1 1 0 0 1-1.41-1.41l3.97-3.97H2.25a1 1 0 0 1 0-2h11.34L9.62 3.22a1 1 0 1 1 1.41-1.41L16.28 8.47a1 1 0 0 1 0 1.06z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="card-ilustration-wrapper">
                                        <img src={patearGif} loading="lazy" alt="Patear pagos" />
                                    </div>
                                </div>
                            </div>

                            <div className="horizontal-flex">
                                <div className="card is_white">
                                    <div className="card-top-div">
                                        <h3 className="card-heading is_black">Simulá tus Cuotas Online desde tu Celular!</h3>
                                        <p className="card-paragraph is_black">
                                            Descubrí la forma más simple de simular tu préstamo. Solo necesitás tu teléfono para acceder a la calculadora de cuotas online 👇🏽
                                            <br /><br /><span style={{ fontSize: '0.8em' }}>🌐</span> www.crediplus.site
                                        </p>
                                    </div>
                                    <div className="card-bottom-div">
                                        <div className={style.btn}>
                                            <a href="https://wa.link/zay1yv" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="call-to-action w-inline-block">
                                                <div className="cta-text">Conocer mas</div>
                                                <div className="cta-arrow-icon w-embed">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.28 9.53L11.03 14.78a1 1 0 0 1-1.41-1.41l3.97-3.97H2.25a1 1 0 0 1 0-2h11.34L9.62 3.22a1 1 0 1 1 1.41-1.41L16.28 8.47a1 1 0 0 1 0 1.06z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-ilustration-wrapper">
                                        <img className="recibido" src={recibidoImg} alt="Simulador de cuotas" />
                                    </div>
                                </div>
                            </div>

                            <div className="horizontal-flex">
                                <div className="content-wrapper-bcra">
                                    <a
                                        id="crediplus.site"
                                        href="/"
                                        className="call-to-action is_purple-background text-size-large margin w-inline-block"
                                    >
                                        <div className="cta-text">Simular préstamo</div>
                                        <div className="cta-arrow-icon w-embed">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.28 9.53L11.03 14.78a1 1 0 0 1-1.41-1.41l3.97-3.97H2.25a1 1 0 0 1 0-2h11.34L9.62 3.22a1 1 0 1 1 1.41-1.41L16.28 8.47a1 1 0 0 1 0 1.06z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrediPlusHome;