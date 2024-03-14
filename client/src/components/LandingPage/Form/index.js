import React, { useState } from 'react';
import './styles.css'
import Axios from "axios";
import { toast } from 'react-toastify';
import imgContato from '../../../assets/iconCTT.png'
import { Col, Form, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs"

const FormCP = () =>{    

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const register = () => {  
        toast.info("Aguarde um pouco!")
        Axios.post('http://localhost:3001', {
            nome: nome,
            email: email,
            senha: senha
        }).then((response) => {
            if(response.data.msg === "Usuário Criado!"){
              toast.success("Usuário criado com sucesso!")
              setNome("");       
              setEmail("");      
              setSenha("");
            }else{      
              setTimeout(() => {
                toast.info("Não pode adicionar um e-mail já cadastrado :(")
            }, 1000);
            }
                 
        });
    };

    const validation = () =>{
        if(nome !== null && nome !== "undefined" && nome !== "" && email !== null && email !== "undefined" && email !== "" && senha !== null && senha !== ""){
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
            <h2 className="txtInfo1 mt-5 mb-5">Registre-se para saber<br/><strong className="h2-info"> mais informações</strong></h2>
              <div className="col-sm-6 col-lg-4 col-xl-5 mb-3">
              <Form className="mt-3">
                <Row className="mb-3">
                  <Form.Group as={Col}>                    
                    <Form.Control onChange={e => setNome(e.target.value)} value={nome} type="text" placeholder="Nome" />
                  </Form.Group>
                </Row>

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

export default FormCP;