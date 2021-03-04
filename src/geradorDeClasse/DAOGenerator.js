import ExportDiv from './exportDiv';

function DAOGenerator({ name, atributosDaClasse, importType, tableName }) {
  let nameFirsLetterUpper =
    name.charAt(0).toUpperCase() + name.substring(1, name.length);
  let attr = atributosDaClasse.split(',');
  return (
    <div className="textAreas">
      <h2>DAO</h2>
      <p>
        <span className="azulEscuro">const</span>{' '}
        <span className="verdeClaro">{nameFirsLetterUpper}Model</span> =
        <span className="amarelo"> require</span>(
        <span className="laranja">'../models/{name}Model'</span>)
      </p>
      <p>
        <span className="azulEscuro">function</span>{' '}
        <span className="verdeClaro">{name}DAO</span>(
        <span className="azulClaro2">connection</span>) {'{'}
      </p>
      <span className="ml-1">
        <span className="azulEscuro">this</span>.
        <span className="azulClaro2">_connection</span> ={' '}
        <span className="azulClaro2">connection</span>;
      </span>
      <p>{'}'}</p>

      <p>
        <span className="verdeClaro">{name}DAO</span>.
        <span className="azulClaro2">prototype</span>.
        <span className="amarelo">cadastrar{nameFirsLetterUpper} </span>={' '}
        <span className="azulClaro2">function (req, callback)</span> {'{'}
      </p>
      <span className="ml-1">
        <span className="azulEscuro">let</span>{' '}
        <span className="azulClaro2">{nameFirsLetterUpper}</span> ={' '}
        <span className="azulEscuro">new </span>
        <span className="verdeClaro">{nameFirsLetterUpper}Model</span>(
        <span className="azulClaro2">req.body</span>)
      </span>
      <p className="ml-1" style={{ marginBottom: 0 }}>
        <span className="azulEscuro">this</span>.{' '}
        <span className="amarelo">_connection</span>().
        <span className="amarelo">query</span> (
      </p>
      <div className="flexColumn">
        <span className="ml-2">
          <span className="laranja">'insert into</span>
          <span className="verde"> {tableName} </span>
          <span className="laranja">
            values (
            {attr.map((e, i) => {
              if (i !== attr.length - 1) {
                return '?, ';
              } else {
                return '?';
              }
            })}
            )',
          </span>
        </span>
        <div className="ml-2 flexColumn">
          [
          {attr.map((e, i) => {
            if (i == 0) {
              return (
                <div>
                  <span className="azulEscuro ml-3">null, </span>
                  <span className="verdinho ml-3">//o id fica null </span>
                </div>
              );
            }
            return (
              <div className="ml-3">
                <span>
                  <span className="azulClaro2">{nameFirsLetterUpper}</span>.
                  <span className="amarelo">{`get${
                    e.charAt(0).toUpperCase() + e.substring(1, e.length)
                  }`}</span>
                </span>
                <span>(){i !== attr.length - 1 ? ', ' : ''}</span>
              </div>
            );
          })}
          ],
        </div>
        <span className="ml-2 azulClaro2">callback</span>
        <span className="ml-1">)</span>
        <span>{'}'}</span>
      </div>

      <p>
        <span className="verdeClaro">{name}DAO</span>.
        <span className="azulClaro2">prototype</span>.
        <span className="amarelo">listar{nameFirsLetterUpper} </span>={' '}
        <span className="azulClaro2">function (req, callback)</span> {'{'}
      </p>

      <p className="ml-1" style={{ marginBottom: 0 }}>
        <span className="azulEscuro">this</span>.{' '}
        <span className="amarelo">_connection</span>().
        <span className="amarelo">query</span> (
      </p>
      <div className="flexColumn">
        <span className="ml-2">
          <span className="laranja">'select * from </span>
          <span className="verde"> {tableName} </span>
          <span className="laranja">', </span>
        </span>
        <span className="ml-2 azulClaro2">callback</span>
        <span className="ml-1">)</span>
        <span>{'}'}</span>
      </div>

      <p>
        <span className="verdeClaro">{name}DAO</span>.
        <span className="azulClaro2">prototype</span>.
        <span className="amarelo">exluir{nameFirsLetterUpper} </span>={' '}
        <span className="azulClaro2">function (req, callback)</span> {'{'}
      </p>

      <p className="ml-1" style={{ marginBottom: 0 }}>
        <span className="azulEscuro">this</span>.{' '}
        <span className="amarelo">_connection</span>().
        <span className="amarelo">query</span> (
      </p>
      <div className="flexColumn">
        <span className="ml-2">
          <span className="laranja">'delete from </span>
          <span className="verde"> {tableName} </span>
          <span className="laranja"> where</span>
          <span className="azulClaro2"> {attr[0]}</span>
          <span className="laranja">
            {' '}
            = {'${'}req.params.id{'}'}',
          </span>
        </span>
        <span className="ml-2 azulClaro2">callback</span>
        <span className="ml-1">)</span>
        <span>{'}'}</span>
      </div>

      <ExportDiv
        importType={importType}
        nameFirsLetterUpper={nameFirsLetterUpper}
      />
    </div>
  );
}

export default DAOGenerator;
