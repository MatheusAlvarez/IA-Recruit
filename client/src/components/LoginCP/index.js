import React, { useState } from 'react';
import './styles.css'
import Axios from "axios";
import { toast } from 'react-toastify';
import imgContato from '../../assets/iconUser.png'
import { Col, Form, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs"

const LoginCP = () =>{        
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const register = () => {  
        Axios.post('http://localhost:3001/login', {            
            email: email,
            senha: senha
        }).then((response) => {            
           if(response.data.msg == "SUCESSO"){                
                window.location.href = `/acesso/${email}`
           }
           else{
                toast.error("Usuário ou senha incorretos!")
           }
        });
    };

    const validation = () =>{
        if(email != null && email != "undefined" && email != "" && senha != null && senha != ""){
            register();
        }
        else{
            toast.info("Informe todos os campos!")
        }
    }

    return(
        <section className="back-color-contato">
            <div className="container">
                <div className="row centalizar pdb-5">
                <h2 className="txtInfo1 mt-5 mb-5">Realize o<br/><strong className="h2-info"> Login</strong></h2>
                <div className="col-sm-6 col-lg-4 col-xl-5 mb-3">
                <Form className="mt-3">

                    <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                        <Form.Control onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Control onChange={e => setSenha(e.target.value)} value={senha} placeholder="Senha" type='password'/>
                    </Form.Group>
                </Form>
                <button className="btnInfoDev mb-5" onClick={validation}>Enviar <BsArrowRight/></button>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-5 mb-3">
                    <img className="imgContato" src={imgContato} alt="Imagem " />
                </div>
                </div>
            </div>
        </section>
    );
}

export default LoginCP;