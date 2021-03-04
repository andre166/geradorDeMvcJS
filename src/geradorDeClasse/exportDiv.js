function ExportDiv({ importType, nameFirsLetterUpper }) {
  return (
    <div className="ContainerPrincipal">
      <>
        {importType === 'Import' ? (
          <p>
            {' '}
            <span className="roxo">export default </span>{' '}
            <span className="amarelo">{nameFirsLetterUpper}Model;</span>
          </p>
        ) : (
          <p className="azulEscuro">
            module.exports = {nameFirsLetterUpper}Model;
          </p>
        )}
      </>
    </div>
  );
}

export default ExportDiv;
