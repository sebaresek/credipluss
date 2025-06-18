import { useState } from "react";
import style from './Calculator.module.css'
import NavBar from '../../components/NavBar/NavBar';

export default function Calculator() {
    const [monto, setMonto] = useState(500000);
    const [plazo, setPlazo] = useState("30 días");

    // Función para calcular el total según monto y plazo
    const calcularCuota = (monto, plazo) => {
    let total = monto;

    if (plazo === "15 días") {
        total *= 1.4;
        return total.toLocaleString("es-AR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }); // Total
    } else if (plazo === "30 días") {
        total *= 1.55;
        return total.toLocaleString("es-AR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }); // Total
    } else if (plazo === "2 meses") {
        total *= 1.85;
        const cuotaMensual = total / 2;
        return cuotaMensual.toLocaleString("es-AR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }); // Cuota mensual
    } else if (plazo === "3 meses") {
        total *= 2.05; // Corregido para dar cuotas de ~68.333
        const cuotaMensual = total / 3;
        return cuotaMensual.toLocaleString("es-AR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }); // Cuota mensual
    } else if (plazo === "6 meses") {
        total *= 2.7;
        const cuotaMensual = total / 6;
        return cuotaMensual.toLocaleString("es-AR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }); // Cuota mensual
    }
    return total.toLocaleString("es-AR");
    };

    // Función para mostrar el interés como texto
    const getInteresTexto = (plazo) => {
        if (plazo === "15 días") return "40%";
        if (plazo === "30 días") return "55%";
        if (plazo === "2 meses") return "85%";
        if (plazo === "3 meses") return "105%";
        if (plazo === "6 meses") return "170%";
        return "";
    };

    const handleMontoChange = (e) => {
        setMonto(parseInt(e.target.value, 10));
    };

    const linkWhatsApp = `https://wa.me/3765084215?text=Me%20interesa%20solicitar%20un%20préstamo%20de%20$${monto.toLocaleString(
        "es-AR"
    )}%20para%20pagar%20en%20${plazo}`;

    return (
        <div>
            {/* Encabezado */}
            <NavBar/>
            <div className={style.padd}></div>
            <div className="min-h-screen bg-gradient-to-b from-purple-50 to-gray-100 flex flex-col items-center">
            {/* <div className="w-full bg-white shadow-sm border-b border-gray-100 flex justify-center py-3 px-6">
                <a href="/home"className="">
                    <img src={logo} alt="CrediPlus Logo" className="h-10 w-auto" />
                </a>
            </div> */}

            {/* Contenido */}
            <div className="w-full max-w-md space-y-8 pb-16 p-6">
                <div className="text-center space-y-2">
                <h1 className="text-4xl font-light text-gray-900 leading-tight">
                    Simulá tu{" "}
                    <span className="text-purple-600 font-semibold">Préstamo</span> y
                    recibilo al instante
                </h1>
                </div>

                {/* Monto */}
                <div className="space-y-6">
                <p className="text-center text-gray-600 text-lg">¿Cuánto querés pedir?</p>
                <div className="text-center">
                    <span className="text-5xl font-bold text-purple-600">
                    ${monto.toLocaleString("es-AR")}
                    </span>
                </div>
                <div className="relative ">
                    <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="1000"
                    value={monto}
                    onChange={handleMontoChange}
                    style={{
                        background: `linear-gradient(to right, #3858ad 0%, rgb(104 85 247) ${
                        ((monto - 50000) / 950000) * 100
                        }%, #e5e7eb ${(monto - 50000) / 950000 * 100}%, #e5e7eb 100%)`,
                    }}
                    className={`${style.sliderCustom} w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer z-10 relative`}
                    />
                    {/* Thumb visual */}
                    <div
                    style={{
                        left: `clamp(0%, calc(${((monto - 50000) / 950000) * 100}% - 12px), calc(100% - 24px))`,
                        border: "2px solid rgb(85, 115, 247)",
                    }}
                    className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md z-20 pointer-events-none"
                    ></div>
                </div>
                </div>

                {/* Plazos */}
                <div className="space-y-6">
                <p className="text-center text-gray-600 text-lg">¿En cuánto tiempo?</p>
                <div className="flex justify-center gap-3 flex-wrap">
                    {["15 días", "30 días", "2 meses", "3 meses", "6 meses"].map((opcion) => (
                    <button
                        key={opcion}
                        onClick={() => setPlazo(opcion)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        plazo === opcion
                            ? "bg-purple-600 text-white shadow-lg scale-105"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                        {opcion}
                    </button>
                    ))}
                </div>
                </div>

                {/* Resultado */}
                <div className="text-center space-y-3">
                <p className="text-gray-600 text-lg">Valor de cuota</p>
                <p className="text-4xl font-bold text-gray-800">
                    $ {calcularCuota(monto, plazo)}
                </p>
                <p className="text-sm text-gray-500">Interés: {getInteresTexto(plazo)}</p>
                </div>

                {/* Botón */}
                <div className="space-y-4">
                <a
                    href={linkWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${style.gradientButton} w-full h-16 text-white text-xl rounded-full flex items-center justify-center font-bold uppercase tracking-wide transition-transform transform active:scale-95 hover:scale-105`}
                >
                    SOLICITAR PRÉSTAMO
                </a>
                <p className="text-center text-sm text-gray-400">
                    Sujeto a evaluación crediticia.
                </p>
                </div>

                {/* Razones */}
                <div className="space-y-6 mt-12">
                <h2 className="text-2xl text-center">3 razones para pedirlo en CrediPlus</h2>
                {[
                    {
                    titulo: "Préstamos inmediatos",
                    texto:
                        "Sin documentación interminable ni trámites eternos. Lo pedís, y lo recibís.",
                    },
                    {
                    titulo: "Adelantos rápidos",
                    texto:
                        "¿Necesitás salir del apuro? Pedí un adelanto y pagalo a los 15, 30, 60 o más días.",
                    },
                    {
                    titulo: "Control total desde WhatsApp",
                    texto:
                        "Gestioná tus préstamos, adelantos y pagos directo por WhatsApp. Sin llamadas, sin papeles, sin complicaciones.",
                    },
                ].map((razon, i) => (
                    <div
                    key={i}
                    className="bg-white rounded-3xl p-6 shadow-sm flex items-start space-x-4"
                    >
                    <div className="text-4xl font-bold text-purple-200">
                        {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{razon.titulo}</h3>
                        <p className="text-gray-500 text-sm">{razon.texto}</p>
                    </div>
                    </div>
                ))}
                </div>

                {/* Términos */}
                <div className="text-center mt-8 pb-8">
                <a
                    href="/t&c"
                    className="text-gray-400 text-sm underline hover:text-gray-600">
                    Consultá términos y condiciones acá.
                </a>
                </div>
            </div>

            {/* Botón WhatsApp */}
            <a
                href="https://wa.link/t8vn4u"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50 hover:scale-110 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="jsx-aa6e8a7f7d099bdf text-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" class="jsx-aa6e8a7f7d099bdf"></path></svg>
            </a>
            </div>
        </div>
    );
    }
