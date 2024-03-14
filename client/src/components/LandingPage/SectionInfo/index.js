import React from "react";
import "./styles.css"
import { RiLightbulbFlashLine } from "react-icons/ri"
import { RiToolsFill } from "react-icons/ri"
import { MdOutlineWeb } from "react-icons/md"
import { MdOutlineSchool } from "react-icons/md"

const SectionInfo = () =>{
    return(
        <section className="back-color">
            <div className="container">
                <div className="row centalizar pdb-5">
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                          <RiLightbulbFlashLine className="icon mt-3"/><br/>
                          <strong>Revolução da Saúde</strong>
                          <p>
                          diagnóstico médico, descoberta de medicamentos e personalização de tratamentos.
                          </p>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                          <RiToolsFill className="icon mt-3"/><br/>
                          <strong>Segurança Cibernética</strong>
                          <p>
                           detectar e responder a ameaças cibernéticas, protegendo redes, sistemas e dados 
                           contra ataques.
                          </p>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                          <MdOutlineWeb className="icon mt-3"/><br/>
                          <strong>Cidades Inteligentes</strong>
                          <p>otimizar o transporte, gerenciar recursos, melhorar a segurança pública  </p>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                          <MdOutlineSchool className="icon mt-3"/><br/>
                          <strong>Educação do Futuro:</strong>
                          <p>oferecendo personalização do aprendizado, tutoria adaptativa, análise de dados educacionais</p><br/>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default SectionInfo;