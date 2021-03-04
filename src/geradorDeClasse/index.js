import React, { useState, useEffect } from 'react';
import { Paper, Button, TextField, MenuItem } from '@material-ui/core';
import './estilo.css';
import RouteGenerator from './routeGenerator';
import ControllerGenerator from './controllerGenerator';
import ClassGenerator from './modelGenerator';
import DAOGenerator from './DAOGenerator';

export default function App() {
  let [nome, setNome] = useState('militarStatus');
  let [importType, setImportType] = useState('Import');
  let [tableName, setTableName] = useState('');
  let [atributosDaClasse, setAtributosDaClasse] = useState(
    'id_militar_status,status,descricao,inicio,fim,fk_militar'
  );
  let [generate, setGenerate] = useState(false);
  return (
    <div className="containerGeral">
      <div className="container">
        <Paper>
          <div className="form">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}
            >
              <TextField
                style={{ width: 300 }}
                label="Nome da classe"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <TextField
                style={{ width: 300 }}
                label="Nome da tabela"
                value={tableName}
                onChange={(e) => setTableName(e.target.value)}
              />

              <TextField
                style={{ width: 200 }}
                variant="outlined"
                label="Tipo do import"
                select
                onChange={(e) => setImportType(e.target.value)}
                value={importType}
              >
                {['Import', 'Required'].map((e) => (
                  <MenuItem key={e} value={e}>
                    {e}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <TextField
              fullWidth
              label="Atributos da classe"
              value={atributosDaClasse}
              onChange={(e) => setAtributosDaClasse(e.target.value)}
            />
          </div>

          <div className="btnsContainer">
            <Button
              variant="contained"
              color="primary"
              onClick={() => setGenerate(true)}
            >
              Open
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => setGenerate(false)}
            >
              Close
            </Button>
          </div>

          {generate && (
            <>
              <RouteGenerator name={nome} importType={importType} />

              <ControllerGenerator name={nome} importType={importType} />

              <ClassGenerator
                name={nome}
                atributosDaClasse={atributosDaClasse}
                importType={importType}
              />

              <DAOGenerator
                name={nome}
                atributosDaClasse={atributosDaClasse}
                importType={importType}
                tableName={tableName}
              />
            </>
          )}
        </Paper>
      </div>
    </div>
  );
}
