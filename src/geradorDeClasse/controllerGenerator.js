function ControllerGenerator(props) {
  const { name } = props;
  let nameFirsLetterUpper = '';
  if (name) {
    nameFirsLetterUpper =
      name.charAt(0).toUpperCase() + name.substring(1, name.length);
  } else {
    nameFirsLetterUpper = 'teste';
  }

  return (
    <div className="textAreas">
      <h2>Controller</h2>

      <p>
        <span className="azulEscuro">const</span>{' '}
        <span className="amarelo">connection = require</span>(
        <span className="laranja">'../config/dbConnection'</span>)
      </p>
      <p>
        <span className="azulEscuro">const</span>{' '}
        <span className="verdeClaro">_{name}DAO</span> ={' '}
        <span className="amarelo">require</span>(
        <span className="laranja">
          '../DAO/
          {name}DAO'
        </span>
        )
      </p>

      <div className="functionClone">
        <p>
          <span className="verdeClaro">module.exports</span>.
          <span className="amarelo">
            cadastrar
            {nameFirsLetterUpper}
          </span>{' '}
          = <span className="azulClaro2">function (req, res)</span> {'{'}
        </p>
        <span className="ml-1">
          <span className="azulEscuro">const</span>{' '}
          <span className="azulClaro">{name}DAO</span> ={' '}
          <span className="azulEscuro">new</span>{' '}
          <span className="verdeClaro">_{name}DAO</span>(
          <span className="amarelo">connection</span>)
        </span>
        <span className="ml-1">
          <span className="azulClaro">{name}DAO</span>.
          <span className="amarelo">cadastrar{nameFirsLetterUpper}</span>(
          <span className="azulClaro2">function (err,result)</span> {'{'}
        </span>
        <span className="ml-2">
          {' '}
          <span className="roxoClaro">if</span> (err) {'{'}{' '}
        </span>
        <span className="ml-3">
          <span className="azulClaro2">
            res.send( {'{'} erro: err {'}'})
          </span>
        </span>
        <span className="ml-2">
          {'}'}
          <span className="roxoClaro">else</span> {'{'}
        </span>
        <span className="ml-3">res.send(result)</span>
        <span className="ml-2">{'}'}</span>
        <span className="ml-1">{'}'})</span>
        <span>{'}'}</span>
      </div>

      <div className="functionClone">
        <p>
          <span className="verdeClaro">module.exports</span>.
          <span className="amarelo">
            listar
            {nameFirsLetterUpper}
          </span>{' '}
          = <span className="azulClaro2">function (req, res)</span> {'{'}
        </p>
        <span className="ml-1">
          <span className="azulEscuro">const</span>{' '}
          <span className="azulClaro">{name}DAO</span> ={' '}
          <span className="azulEscuro">new</span>{' '}
          <span className="verdeClaro">_{name}DAO</span>(
          <span className="amarelo">connection</span>)
        </span>
        <span className="ml-1">
          <span className="azulClaro">{name}DAO</span>.
          <span className="amarelo">listar{nameFirsLetterUpper}</span>(
          <span className="azulClaro2">function (err,result)</span> {'{'}
        </span>
        <span className="ml-2">
          {' '}
          <span className="roxoClaro">if</span> (err) {'{'}{' '}
        </span>
        <span className="ml-3">
          <span className="azulClaro2">
            res.send( {'{'} erro: err {'}'})
          </span>
        </span>
        <span className="ml-2">
          {'}'}
          <span className="roxoClaro">else</span> {'{'}
        </span>
        <span className="ml-3">res.send(result)</span>
        <span className="ml-2">{'}'}</span>
        <span className="ml-1">{'}'})</span>
        <span>{'}'}</span>
      </div>

      <div className="functionClone">
        <p>
          <span className="verdeClaro">module.exports</span>.
          <span className="amarelo">
            excluir
            {nameFirsLetterUpper}
          </span>{' '}
          = <span className="azulClaro2">function (req, res)</span> {'{'}
        </p>
        <span className="ml-1">
          <span className="azulEscuro">const</span>{' '}
          <span className="azulClaro">{name}DAO</span> ={' '}
          <span className="azulEscuro">new</span>{' '}
          <span className="verdeClaro">_{name}DAO</span>(
          <span className="amarelo">connection</span>)
        </span>
        <span className="ml-1">
          <span className="azulClaro">{name}DAO</span>.
          <span className="amarelo">excluir{nameFirsLetterUpper}</span>(
          <span className="azulClaro2">function (err,result)</span> {'{'}
        </span>
        <span className="ml-2">
          {' '}
          <span className="roxoClaro">if</span> (err) {'{'}{' '}
        </span>
        <span className="ml-3">
          <span className="azulClaro2">
            res.send( {'{'} erro: err {'}'})
          </span>
        </span>
        <span className="ml-2">
          {'}'}
          <span className="roxoClaro">else</span> {'{'}
        </span>
        <span className="ml-3">res.send(result)</span>
        <span className="ml-2">{'}'}</span>
        <span className="ml-1">{'}'})</span>
        <span>{'}'}</span>
      </div>
    </div>
  );
}

export default ControllerGenerator;
