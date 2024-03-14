import React from "react";
import "./styles.css"
import iconIA from '../../../assets/iconIA01.png'


const Apresentation = () =>{
    return(
        <section className="back-color-info pdb-5">
            <div className="container centalizar-info-apresentacao">
                <div className="div-imgApresentation">
                    <img className="imgApresentation" src={iconIA} alt="Imagem " />
                </div>
                <div>
                    <h2 className="txtNome">Inteligência<br/>Arti<strong className="h2-info-apresentacao">ficial</strong></h2>
                    <button className="btnInfoDev mb-5">Ver mais informações</button>
                </div>
            </div>
        </section>
    );
}

export default Apresentation;