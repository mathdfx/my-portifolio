import React from "react";
import { Heart, CircleSmall } from 'lucide-react';

const About = () => {
    return (
        <section
            id="about"
            className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-neutral-900 from-25% to-neutral-800 to-75%">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                        Minha Jornada
                    </h2>
                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-pastel-600 from-50% to bg-pastel-100 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                        <div className="bg-black p-6 sm:p-7 rounded-2xl shadow-lg hover-shadow-xl transition-shadow">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
                                <Heart className="mr-3 text-pastel-100" size={20} />
                                <span className="sm:text-2xl">
                                    Sobre Mim
                                </span>
                            </h3>
                            <p className="text-sm sm:text-base text-white leading-relaxed mb-4">
                                Olá! Sou Matheus Oliveira, um profissional apaixonado por desvendar desafios e construir soluções que realmente fazem a diferença. Minha jornada é uma fusão de experiência prática em gestão e uma crescente paixão por tecnologia, o que me permite abordar problemas de forma holística e criativa.
                            </p>
                            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
                                Minha base profissional foi construída em ambientes dinâmicos, onde a eficiência e a resolução de problemas eram o foco principal. Como Conferente Líder na CORELLO COMERCIAL LTDA, não apenas gerenciei processos logísticos complexos e equipes de até 20 colaboradores, mas também atuei como um ponto chave de suporte técnico. Lá, dominei o sistema ERP Linx, prestando suporte de primeiro nível para hardware (impressoras, coletores, desktops) e software, e otimizando fluxos operacionais. Essa experiência me ensinou a importância de uma infraestrutura de TI robusta e como a tecnologia, quando bem aplicada, pode transformar a operação de um negócio.
                            </p>
                            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
                                Minha vivência com análise de dados em Excel/Google Sheets e a implementação de otimizações que resultaram em aumento de 25% na eficiência operacional me deram uma mentalidade orientada a resultados e a capacidade de identificar gargalos e propor melhorias contínuas. Sou um profissional que entende o impacto direto da tecnologia no dia a dia das pessoas e dos processos.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md-grid-cols-2 gap-4 sm:gap-6">
                            <div className="bg-gradient-to-br from-pastel-100 to-pastel-300 p-4 sm:p-6 rounded-2xl border-pastel-100">
                                <h4 className="font-bold text-neutral-800 mb-4 flex items-center text-sm sm:text-base">
                                    Areas de Interesse
                                </h4>
                                <ul className="space-y-2 text-xs sm:text-sm text-neutral-700"> 
                                    <li className="flex items-center"><span className='flex-shrink-0'>
                                        <CircleSmall className='text-black flex-shrink-0' size={10}/>
                                    </span>

                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default About;