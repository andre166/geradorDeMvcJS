import { Divider } from '@material-ui/core';
import ExportDiv from './exportDiv';

function ModelGenerator({ name, atributosDaClasse, importType }) {
  let nameFirsLetterUpper =
    name.charAt(0).toUpperCase() + name.substring(1, name.length);
  let attr = atributosDaClasse.split(',');

  return (
    <div className="textAreas">
      <h2>Model</h2>
      <p>
        <span className="azulEscuro">class</span>{' '}
        <span className="verdeClaro">{nameFirsLetterUpper}Model </span>
        {' {'}
      </p>
      <div className="ml-1">
        <span className="azulEscuro">constructor</span> ({' {'}
        <span className="azulClaro2">{atributosDaClasse}</span>
        {' }'}){' {'}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {attr.map((at) => (
            <span className="ml-1">
              <span className="azulEscuro">this</span>.
              <span className="azulClaro2">{at}</span> ={' '}
              <span className="azulClaro2">{at}</span>;
            </span>
          ))}
        </div>
        {' }'}
      </div>
      <div
        className="ml-1"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {attr.map((at) => (
          <div
            style={{
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              borderBottom: '1px solid #d1d1d1',
            }}
          >
            <span>
              {' '}
              <span className="amarelo">
                get{at.charAt(0).toUpperCase() + at.substring(1, at.length)}
              </span>{' '}
              = () => <span className="azulEscuro">this</span>.
              <span className="azulClaro2">{at}</span>
            </span>
            <span>
              <span className="amarelo">
                set{at.charAt(0).toUpperCase() + at.substring(1, at.length)}
              </span>{' '}
              = (<span className="azulClaro2">{at}</span>) => (
              <span className="azulEscuro">this</span>.
              <span className="azulClaro2">{at} </span>={' '}
              <span className="azulClaro2">{at} </span>)
            </span>
          </div>
        ))}
      </div>

      <div
        className="ml-1"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span>
          <span className="amarelo">get{nameFirsLetterUpper}AllInfo</span> = ()
          => {'{'}
        </span>
        <span className="ml-3">
          {' '}
          <span className="roxoClaro">if</span> (!
          <span className="azulEscuro">this</span>.
          <span className="azulClaro2">{attr[0]}</span>) {'{'}
        </span>
        <span className="ml-4">
          <span className="roxoClaro">return</span> {'{ }'}
        </span>
        <span className="ml-3">
          {'}'} <span className="roxoClaro">else</span> {'{'}
        </span>
        <span className="ml-4">
          {' '}
          <span className="roxoClaro">return</span> {'{'}
        </span>
        <div
          className="ml-5"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {attr.map((at) => (
            <span>
              {' '}
              <span className="azulClaro2">
                {at.charAt(0).toUpperCase() + at.substring(1, at.length)}
              </span>
              : <span className="azulEscuro">this</span>.
              <span className="azulClaro2">{at}</span>,
            </span>
          ))}
        </div>

        <span className="ml-4">{'}'}</span>
        <span className="ml-2">{'}'}</span>

        {'}'}
      </div>
      <Divider style={{ marginTop: 10, marginLeft: 10 }} />

      {'}'}

      <ExportDiv
        importType={importType}
        nameFirsLetterUpper={nameFirsLetterUpper}
      />
    </div>
  );
}

export default ModelGenerator;
