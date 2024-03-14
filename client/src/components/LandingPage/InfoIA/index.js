import React from "react";
import "./styles.css"
import { BsArrowRight } from "react-icons/bs"


const infoIA = () =>{
    return(
        <section className="back-color-info pdb-5">
            <div className="container">
                <div className="centalizar-info">
                    <h2 className="txtInfo1">Sobre a <br/><strong className="h2-info">Inteligência Artificial</strong></h2>
                    <p className="txtInfo">
                        A inteligência artificial (IA) é um campo da ciência da computação que se concentra no 
                        desenvolvimento de sistemas e algoritmos capazes de realizar tarefas que normalmente exigiriam 
                        inteligência humana. Isso inclui coisas como reconhecimento de fala, visão computacional, tomada
                        de decisão, tradução de idiomas e muito mais.
                    </p>
                    <br/>
                    <p className="txtInfo">
                        Existem várias abordagens para a criação de IA, incluindo redes neurais artificiais, 
                        algoritmos genéticos, lógica fuzzy e aprendizado de máquina, entre outros. 
                    </p>

                    <button className="btnInfoDev mb-5">Saiba mais sobre IA <BsArrowRight/></button>
                </div>
            </div>
        </section>
    );
}

export default infoIA;