import { useEffect, useState } from 'react';
import './styles.css'
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const AcessoCP = () =>{

    const { email } = useParams();

    const [nome, setNome] = useState("");     
    const [showModal, setShowModal] = useState(false);   

    useEffect(() => {
        Axios.get(`http://localhost:3001/acesso/${email}`)        
        .then((response) => {            
            if(response.data.msg === "SUCESSO"){                
                setNome(response.data.rsp.nome)
            }            
        })
        .catch((err) => {            
            window.location.href = "/login"        
        })
    }, []);


    const deleteUser = () =>{
        Axios.post('http://localhost:3001/deletar', {
            email: email
        })
        .then((response) => {
            toast.success("Usuário deletado com sucesso!")
            window.location.href = "/login"
        })
        .catch((response) => {
            toast.error("Não foi possível deletar o usuário")
        })
    }

    const usuario = [
        { nome: nome, email: email, opc: 'Cancelar inscrição'}        
    ];

    return(
        <div className="tabela-container">
            <table className="tabela">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>                    
                    <th>Opção</th>                    
                </tr>
                </thead>
                <tbody>
                {usuario.map((usuario, index) => (
                    <tr key={index}>
                    <td>{usuario.nome}</td>
                    <td>{usuario.email}</td>
                    <td><button className='btn btn-primary' onClick={() => setShowModal(true)}>{usuario.opc}</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{display: showModal ? 'block' : 'none'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Cancelar inscrição</h5>
                            <button type="button" className="close" onClick={() => setShowModal(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Tem certeza que deseja cancelar a inscrição?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                            <button type="button" className="btn btn-danger" onClick={deleteUser}>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AcessoCP;