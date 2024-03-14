// ---------------------------------- #login ----------------------------------
/**
 * @openapi
 * /api/login:
 *   post:
 *     summary: Realiza login na plataforma
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login bem sucedido
 *       404:
 *         description: Usuário não encontrado
 *       401:
 *         description: Senha incorreta
 *       500:
 *         description: Erro interno do servidor
 */


// ---------------------------------- #createUser ----------------------------------
/**
 * @openapi
 * /api/:
 *   post:
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro ao criar usuário
 */

// ---------------------------------- #listUser ----------------------------------
/**
 * @openapi
 * /api/acesso/{email}:
 *   get:
 *     summary: Obtém informações de um usuário
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: Email do usuário
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Informações do usuário retornadas com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */


// ---------------------------------- #deleteUser ----------------------------------
/**
 * @openapi
 * /api/deletar:
 *   post:
 *     summary: Deleta um usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

const express = require('express');

const usuarioControllers = require('../controllers/usuarioController');

const router = express.Router();

router.post("/login", usuarioControllers.login); // Pesquisar por #login na documentação
router.post("/", usuarioControllers.createUser); // Pesquisar por #createUser na documentação
router.post("/deletar", usuarioControllers.deleteUser); // Pesquisar por #deleteUser na documentação
router.get("/acesso/:email", usuarioControllers.listUser) // Pesquisar por #listUser na documentação

module.exports = router;