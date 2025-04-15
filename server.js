const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const app = express();

const cron = require('node-cron');
const moment = require('moment');
// const dataAtual = moment().format('YYYY-MM-DD');


// Habilitar CORS para todas as origens
app.use(cors());

// Configuração do Express
app.use(express.json());  // Para que o servidor entenda JSON nas requisições


// Conexão com o banco de dados MySQL (apenas exemplo)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'guisuzi2006', // Sua senha do MySQL
    database: 'express_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao MySQL!');
});



cron.schedule('0 7,12 * * *', () => {
    console.log("Executando cálculo de desconto...");

    // Aqui você busca os usuários e aplica a lógica:
    db.query('SELECT * FROM valores', (err, resultados) => {
        resultados.forEach(registro => {
            const diasPermitidos = JSON.parse(registro.dias); // exemplo: ["Seg", "Qua"]

            const diaHoje = moment().format('ddd'); // retorna tipo "Seg", "Ter"
            if (diasPermitidos.includes(diaHoje)) {
                const novoValor = registro.valor - registro.desconto;

                // Salvar o novo valor e gerar extrato
                db.query('UPDATE valores SET valor = ? WHERE usuario_id = ?', [novoValor, registro.usuario_id]);
                db.query('INSERT INTO extrato (usuario_id, data, valor_antigo, desconto, valor_novo) VALUES (?, NOW(), ?, ?, ?)',
                    [registro.usuario_id, registro.valor, registro.desconto, novoValor]);
            }
        });
    });
});




// Rota para cadastro de novo usuário
app.post('/cadastrar', (req, res) => {
    console.log("Recebendo dados:", req.body);  // Log dos dados recebidos
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    // Verificando se o nome ou e-mail já estão cadastrados
    db.query('SELECT * FROM users WHERE email = ? OR name = ?', [email, nome], (err, result) => {
        if (err) {
            console.error("Erro ao verificar duplicidade:", err);
            return res.status(500).json({ error: 'Erro ao verificar os dados no banco de dados.' });
        }

        if (result.length > 0) {
            return res.status(400).json({ error: 'Nome ou e-mail já cadastrado!' });
        }

        // Criptografando a senha antes de armazenar
        bcrypt.hash(senha, 10, (err, hashedPassword) => {
            if (err) {
                console.error("Erro ao criptografar senha:", err);
                return res.status(500).json({ error: 'Erro ao criptografar a senha.' });
            }

            // Inserindo o novo usuário no banco
            db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', 
                [nome, email, hashedPassword], (err, result) => {
                    if (err) {
                        console.error("Erro ao salvar usuário:", err);
                        return res.status(500).json({ error: 'Erro ao salvar o usuário no banco de dados.' });
                    }
                    
                    console.log("Usuário cadastrado com sucesso! ID:", result.insertId);
                    return res.status(201).json({ 
                        status: 'success', 
                        message: 'Usuário cadastrado com sucesso!', 
                        id: result.insertId,  // ID do usuário recém-cadastrado
                        nome,
                        email
                    });
                });
        });
    });
});


app.post('/login', (req, res) => {
    const { nome, senha } = req.body;

    if (!nome || !senha) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    // Busca o usuário apenas pelo nome
    db.query('SELECT * FROM users WHERE name = ?', [nome], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar usuário no banco de dados.' });
        }

        if (result.length === 0) {
            return res.status(401).json({ error: 'Nome ou senha incorretos!' });
        }

        const usuario = result[0];

        // Compara a senha fornecida com a senha criptografada
        bcrypt.compare(senha, usuario.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao comparar senhas.' });
            }

            if (!isMatch) {
                return res.status(401).json({ error: 'Nome ou senha incorretos!' });
            }

            // Senha correta
            res.status(200).json({
                status: 'success',
                message: 'Login realizado com sucesso!',
                id: usuario.id,
                nome: usuario.name,
                email: usuario.email
            });
        });
    });
});


app.post('/salvar', (req, res) => {
    console.log('Dados recebidos:', req.body);

    const { usuario_id, valor, desconto, desconto_hor, dias } = req.body;
// Salve os dias no banco (pode ser uma coluna com JSON, tipo: ["Seg", "Ter", "Qua"])


    if (!usuario_id || valor == null || desconto == null || desconto_hor == null) {
        console.log('Erro: Dados faltando no corpo da requisição');
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    // Verifica se já existem dados para esse usuário
    db.query('SELECT * FROM valores WHERE usuario_id = ?', [usuario_id], (err, result) => {
        if (err) {
            console.error("Erro ao verificar o usuário:", err);
            return res.status(500).json({ message: 'Erro ao buscar valores existentes.' });
        }

        if (result.length > 0) {
            // Já existe registro, então atualiza somando
            const antigo = result[0];
            const novoValor = parseFloat(antigo.valor) + parseFloat(valor);
            const novoDesconto = parseFloat(antigo.desconto) + parseFloat(desconto);
            const novoDescontoHor = parseFloat(antigo.desconto_hor) + parseFloat(desconto_hor);

            db.query('UPDATE valores SET valor = ?, desconto = ?, desconto_hor = ? WHERE usuario_id = ?',
                [novoValor, novoDesconto, novoDescontoHor, usuario_id],
                (err, resultUpdate) => {
                    if (err) {
                        console.error("Erro ao atualizar os valores:", err);
                        return res.status(500).json({ message: 'Erro ao atualizar os valores.' });
                    }

                    console.log('Valores atualizados com sucesso:', resultUpdate);
                    return res.status(200).json({ message: 'Valores somados e atualizados com sucesso!' });
                }
            );
        } else {
            // Não existe ainda, então insere novo registro
            db.query('INSERT INTO valores (usuario_id, valor, desconto, desconto_hor, dias) VALUES (?, ?, ?, ?, ?)', 
               [usuario_id, valor, desconto, desconto_hor, JSON.stringify(dias)],

                (err, resultInsert) => {
                    if (err) {
                        console.error("Erro ao inserir novos valores:", err);
                        return res.status(500).json({ message: 'Erro ao salvar os valores no banco de dados.' });
                    }

                    console.log('Valores adicionados com sucesso:', resultInsert);
                    return res.status(200).json({ message: 'Valores adicionados com sucesso!' });
                }
            );
        }
    });
});


// Função para consultar dados na tabela valores com o usuario_id
function consultaDadosDoBanco(usuario_id) {
    return new Promise((resolve, reject) => {
        db.query('SELECT valor, desconto, desconto_hor FROM valores WHERE usuario_id = ?', [usuario_id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

// Endpoint para consultar os dados de um usuário específico
app.get('/consultar/:id', (req, res) => {
    const usuarioId = req.params.id;

    db.query(
        'SELECT valor, desconto, desconto_hor FROM valores WHERE usuario_id = ?',
        [usuarioId],
        (error, results) => {
            if (error) {
                console.error('Erro ao executar a query:', error);
                return res.status(500).json({ erro: 'Erro ao consultar dados' });
            }

            if (results.length === 0) {
                return res.status(404).json({ mensagem: 'Nenhum dado encontrado para este usuário' });
            }

            res.json(results);
        }
    );
});


app.get('/perfil/:id', (req, res) => {
    const usuarioId = req.params.id;

    db.query(
        'SELECT name, email FROM users WHERE id = ?',
        [usuarioId],
        (error, results) => {
            if (error) {
                console.error('Erro ao executar a query:', error);
                return res.status(500).json({ erro: 'Erro ao consultar dados' });
            }

            if (results.length === 0) {
                return res.status(404).json({ mensagem: 'Nenhum dado encontrado para este usuário' });
            }

            res.json(results);
        }
    );
});



app.post('/atualizar-nome/:id', (req, res) => {
    const usuarioId = req.params.id; // Obtém o ID do usuário da URL
    const { nome } = req.body; // Obtém o nome novo do corpo da requisição

    if (!nome) {
        return res.status(400).json({ message: 'O nome é obrigatório!' });
    }

    // Atualizar o nome no banco de dados
    db.query('UPDATE users SET name = ? WHERE id = ?', [nome, usuarioId], (err, result) => {
        if (err) {
            console.error("Erro ao atualizar o nome:", err);
            return res.status(500).json({ message: 'Erro ao atualizar o nome do usuário.' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado!' });
        }

        return res.status(200).json({ sucesso: true, message: 'Nome atualizado com sucesso!' });
    });
});



app.post('/verificarEmail/:id', (req, res) => {
    const usuarioId = req.params.id;
    const { email } = req.body;

    console.log(`Verificando e-mail para usuário ${usuarioId} com e-mail ${email}`);

    if (!email) {
        return res.status(400).json({ message: 'O e-mail é obrigatório!' });
    }

    // Verifique se o banco de dados está retornando resultados
    db.query('SELECT * FROM users WHERE id = ? AND email = ?', [usuarioId, email], (err, result) => {
        if (err) {
            console.error("Erro ao verificar o e-mail:", err);
            return res.status(500).json({ message: 'Erro ao verificar o e-mail.' });
        }

        console.log("Resultado da consulta:", result);

        if (result.length === 0) {
            return res.status(404).json({ message: 'E-mail não encontrado!' });
        }

        return res.status(200).json({ sucesso: true, message: 'E-mail encontrado!' });
    });
});



app.post('/atualizar-senha/:id', (req, res) => {
    const usuarioId = req.params.id;
    const { senha } = req.body;

    if (!senha) {
        return res.status(400).json({ message: 'A senha é obrigatória!' });
    }

    // Criptografar a nova senha antes de salvar
    bcrypt.hash(senha, 10, (err, senhaCriptografada) => {
        if (err) {
            console.error("Erro ao criptografar a senha:", err);
            return res.status(500).json({ message: 'Erro ao criptografar a senha.' });
        }

        // Atualizar a senha criptografada no banco
        db.query('UPDATE users SET password = ? WHERE id = ?', [senhaCriptografada, usuarioId], (err, result) => {
            if (err) {
                console.error("Erro ao atualizar a senha:", err);
                return res.status(500).json({ message: 'Erro ao atualizar a senha no banco de dados.' });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Usuário não encontrado!' });
            }

            return res.status(200).json({ sucesso: true, message: 'Senha atualizada e criptografada com sucesso!' });
        });
    });
});









// Iniciando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
