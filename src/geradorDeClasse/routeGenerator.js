import ExportDiv from './exportDiv';

function RouteGenerator({ name, importType }) {
  let nameFirsLetterUpper =
    name.charAt(0).toUpperCase() + name.substring(1, name.length);

  return (
    <div className="textAreas">
      <h2>Router</h2>
      <p>
        <span className="azulEscuro">const</span>{' '}
        <span className="amarelo">express = require</span>('
        <span className="laranja">express</span>'){' '}
      </p>
      <p>
        <span className="azulEscuro">const</span>{' '}
        <span className="amarelo">router = express.Router</span>()
      </p>
      <p>
        <span className="azulEscuro">const </span>
        <span className="azulClaro">{name}Controller</span> =
        <span className="amarelo"> require</span>(
        <span className="laranja">
          '../controllers/{name}
          Controller'
        </span>
        )
      </p>

      <p>
        <span className="azulClaro">router</span>.
        <span className="amarelo">post</span>(
        <span className="laranja">'/cadastrar'</span>,{' '}
        <span className="azulClaro2">function</span> (
        <span className="azulClaro2">req, res</span>){'{'}
        <p className="ml-1">
          {' '}
          <span className="azulClaro2">
            {name}Controller.cadastrar{nameFirsLetterUpper}
          </span>
          (<span className="azulClaro2">req, res</span>);
        </p>
        {'}'})
      </p>
      <p>
        <span className="azulClaro">router</span>.
        <span className="amarelo">get</span>(
        <span className="laranja">'/listar'</span>,{' '}
        <span className="azulClaro2">function (req, res)</span> {'{'}
        <p className="ml-1 azulClaro2">
          {name}
          Controller.listar
          {nameFirsLetterUpper}(req, res);
        </p>
        <span>{'}'});</span>
      </p>
      <p>
        <span className="azulClaro">router</span>.
        <span className="amarelo">delete</span>(
        <span className="laranja">'/delete/:id'</span>,{' '}
        <span className="azulClaro2">function (req, res){'{'}</span>
        <p className="ml-1 azulClaro2">
          {name}Controller.excluir{nameFirsLetterUpper}(req, res)
        </p>
        <span>{'}'} )</span>
      </p>
      <ExportDiv
        importType={importType}
        nameFirsLetterUpper={nameFirsLetterUpper}
      />
    </div>
  );
}

export default RouteGenerator;
