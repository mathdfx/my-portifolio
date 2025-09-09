import React from "react"
import { Heart, Github, Linkedin, } from 'lucide-react'

function Footer() {
    return (
        <footer className="bg-black text-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-12">
                    <h3 className="text-2xl sm:3xl font-bold mb-4">Matheus Oliveira</h3>
                    <p className="text-white mb-6 sm:mb-8 text0sm sm:text-base">Desenvolvedor FullStack</p>


                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8 px-4">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/mathdfx/" >
                            <Linkedin size={20} />
                        </a>
                        <a
                            target="_blank"
                            href="https://github.com/mathdfx" >
                            <Github size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-neutral-700 pt-6 sm:pt-8 text-center">
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed px-4">
                        © {new Date().getFullYear()} Matheus Oliveira de Sousa. Todos Os direitos reservados. 

                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;