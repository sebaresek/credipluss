import style from './T&C.module.css';
import NavBar from '../../components/NavBar/NavBar';

const TerminosCrediplus = () => {
    return (
        <div>
            <NavBar/>
            <div className={style.terminos_container}>
                <h2 className="text-4xl font-light text-gray-900 leading-tight">
                    Términos y Condiciones - Crediplus
                </h2>

                <section>
                    <h3>Aceptación de los Términos</h3>
                    <p>
                        Al utilizar los servicios y el sitio web de Crediplus, usted acepta estos Términos y Condiciones en su totalidad.
                        Si no está de acuerdo con alguno de ellos, por favor no utilice nuestros servicios.
                    </p>
                </section>

                <section>
                    <h3>Uso Responsable y Registro</h3>
                    <p>
                        Para solicitar un crédito, debe registrarse con información verdadera, completa y actualizada. Usted es responsable de mantener la confidencialidad de sus datos y credenciales.
                    </p>
                </section>

                <section>
                    <h3>Otorgamiento de Crédito</h3>
                    <p>
                        La aprobación del crédito es discrecional y está sujeta a evaluación de su perfil financiero, capacidad de pago y la constitución de una garantía. El monto, plazo, tasa de interés y condiciones finales serán comunicados al Prestatario al momento de la aprobación.

                    </p>
                </section>

                <section>
                    <h3>Garantías</h3>
                    <p>
                        El cliente deberá presentar la garantía requerida, la cual podrá ser prendaria o aval, según lo establezca Crediplus. En caso de incumplimiento, Crediplus podrá ejecutar la garantía conforme a la legislación vigente y lo establecido en el contrato de préstamo.
                    </p>
                </section>

                <section>
                    <h3>Intereses, Comisiones y Cargos</h3>
                    <p>
                        La tasa de interés aplicada, así como la Tasa Nominal Anual (TNA), la Tasa Efectiva Anual (TEA) y el Costo Financiero Total (CFT), serán informados al cliente de forma clara y previa. Podrán aplicarse cargos adicionales por gastos administrativos, comisiones y penalizaciones por mora, todos debidamente detallados en el contrato de préstamo.
                    </p>
                </section>

                <section>
                    <h3>Pagos, Renovaciones y Cancelación Anticipada</h3>
                    <p>
                    El cliente se compromete a realizar los pagos en los plazos y montos establecidos. Las renovaciones del crédito se efectuarán bajo las condiciones vigentes al momento de la renovación. El cliente podrá cancelar total o parcialmente el crédito anticipadamente, sin penalizaciones salvo pacto en contrario.
                    </p>
                </section>

                <section>
                    <h3>Mora e Incumplimiento</h3>
                    <p>
                        En caso de atraso en los pagos, Crediplus podrá aplicar intereses punitorios y/o gastos administrativos adicionales, y emitir intimaciones formales. Si el incumplimiento persiste, y conforme a la política de ejecución de la garantía acordada en el contrato de préstamo, Crediplus podrá iniciar las acciones legales correspondientes y reportar al cliente a las centrales de riesgo crediticio.
                    </p>
                </section>

                <section>
                    <h3>Protección de Datos Personales</h3>
                    <p>
                        Sus datos personales serán tratados con estricta confidencialidad, conforme a la Ley 25.326 de Protección de Datos Personales. Podremos utilizar sus datos para la evaluación crediticia, gestionar su crédito, administrar la garantía, comunicarnos con usted y enviarle información comercial con su consentimiento.
                    </p>
                </section>

                <section>
                    <h3>Uso No Autorizado y Seguridad</h3>
                    <p>
                        Usted es responsable de notificar inmediatamente a Crediplus cualquier uso no autorizado o sospecha de fraude relacionado con su cuenta.
                        No nos responsabilizamos por daños derivados del incumplimiento de esta obligación.
                    </p>
                </section>

                <section>
                    <h3>Modificaciones</h3>
                    <p>
                        Crediplus puede modificar estos Términos en cualquier momento, notificándolo con al menos 10 días de anticipación.
                        El uso continuado después de la notificación implica aceptación de los cambios.
                    </p>
                </section>

                <section>
                    <h3>Cesión y Transferencia</h3>
                    <p>
                        Crediplus puede ceder o transferir sus derechos y obligaciones a terceros sin necesidad de consentimiento previo.
                    </p>
                </section>

                <section>
                    <h3>Jurisdicción</h3>
                    <p>
                        Estos Términos se rigen por las leyes de la República Argentina.
                        Para cualquier controversia, usted y Crediplus se someten a la jurisdicción de los tribunales ordinarios de la ciudad de Posadas, Misiones.
                    </p>
                </section>

                <section>
                    <h3>Contacto</h3>
                    <p>
                        Para consultas, reclamos o comunicaciones, puede contactarnos en:
                    </p>
                    <p>
                        📍 Dirección: Ituzaingó y Thomas Guido, Posadas, Misiones<br />
                        📞 Teléfono: +54 376 508 4215<br />
                        📧 Email: sebaresekk@gmail.com
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TerminosCrediplus;