const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const usuarioModels = require('../models/usuarioModels');
const database = require('../config/dbConfig');

class usuarioControllers{

    // --------------------------------------- Função criar usuário --------------------------------------- 
    static async createUser(req, res){                  
        try{
            await database.sync();
            let request = await usuarioModels.findOne({ raw: true, where: { email: req.body.email } });

            if(!request){
                const salt = await bcrypt.genSalt(2);
                const passwordHash = await bcrypt.hash(req.body.senha.toString(), salt);
                req.body.senha = passwordHash;

                let novoDado = req.body;

                await usuarioModels.create(novoDado);

                let teste = {
                    user: 'teste.recrut6682@hotmail.com',
                    pass: '' // Colocar a senha do e-mail
                };

                let trasporter = nodemailer.createTransport({
                    service: "hotmail",
                    auth: {
                        user: teste.user,
                        pass: teste.pass
                    }
                })

                const image01 = "https://img.freepik.com/fotos-premium/fundo-de-inteligencia-artificial_798031-145.jpg"

                let info = await trasporter.sendMail({
                    from: `"IA - Notificação" ${teste.user}`,
                    to: req.body.email,
                    subject: "Atualização sobre IA 🤖",
                    text: "",
                    html: `<p>Olá,</p>
                    <p>Gostaríamos de informar sobre a atualização do LeonardoIA, uma IA que cria imagens com base na descrição que você passa para ela.</p>
                    <p>Veja a imagem abaixo:</p>
                    <img src="${image01}" alt="Imagem LeonardoIA">`,          
                }).then((async () => {
                    console.log("Email enviado com sucesso")
                }))
                
                res.status(200).json({msg: "Usuário Criado!"})
            }        
            else {
                res.status(200).json({msg: "Usuário já criado!"})
            }
        }
        catch(err){            
            res.status(404).json("Houve um erro interno!")
        }

        
    }
    
    // --------------------------------------- Função para verificar o login ---------------------------------------
    static async login(req, res){            
        try{                        
            await database.sync();                 
            let request = await usuarioModels.findOne({ raw: true, where: { email: req.body.email } });                 
            
            if(!request){
                res.send("Usuário não encontrado")
            }

            if(request){                
                bcrypt.compare(req.body.senha, request.senha, (err, data) => {                                          
                    if(data){
                        res.status(200).json({msg: "SUCESSO"})
                    }
                    if(data === false){
                        res.status(200).json({msg: "SENHA INCORRETA"})
                    }                            
                })
            }
        }   
        catch(err){
            res.status(500).json('Houve um erro interno!')
        }     
    }

    // --------------------------------------- Função que vai trazer os dados para o usuário ---------------------------------------
    static async listUser(req, res){
        try{
            let email = req.params.email
            await database.sync();      
            await usuarioModels.findOne({where: {email: email}})
            .then((response) => res.status(200).json({msg: "SUCESSO", rsp: response}))
            .catch((err) => res.send(err));        
        }
        catch(err){
            res.status(404).json("Houve um erro interno!")
        }
    }

    // --------------------------------------- Função para deletar usuário ---------------------------------------
    static async deleteUser(req, res){      
        try{
            let email = req.body.email
            await database.sync();
            await usuarioModels.destroy({where: {email: email}});
            res.status(200).send("Usuário deletado");
        }  
        catch(err){
            res.status(404).json("Houve um erro interno!")
        }
    }
}

module.exports = usuarioControllers;