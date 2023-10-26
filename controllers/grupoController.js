const pool = require('../models/db');

function validarGrupo(data) {
  if (!Array.isArray(data.componentes) || data.componentes.length === 0) {
    return 'dado inválido';
  }
  return null;
}

exports.createGrupo = async (req, res) => {
  const erro = validarGrupo(req.body);

  if (erro) {
    return res.status(400).json({ error: erro });
  }

  const { componentes } = req.body;

  try {
    const { rows } = await pool.query(
      'INSERT INTO grupo (componentes) VALUES ($1) RETURNING id, componentes',
      [componentes]
    );

    return res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'erro ao criar grupo' });
  }
};

exports.getGrupo = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM grupo');
    return res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'erro ao recuperar grupos' });
  }
};
