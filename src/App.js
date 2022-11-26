import {useState} from "react";
import './App.css';
import QRCode from "react-qr-code";

function App() {

  const [urlNitRifVirtual, setUrlRifVirtual] = useState(undefined);
  const [certRif, setCertRif] = useState(undefined);
  const [firmaAutorizadaCert, setFirmaAutorizadaCert ] = useState(undefined)
  
  const getUrlCertificado  = () => {
    setUrlRifVirtual(`http://contribuyente.seniat.gob.ve/rifconsultacertificado/generarCertificadoRif.do?certRif=${certRif}&firmaAutorizadaCert=${firmaAutorizadaCert}`);
  };
  

  const handlerCertRif = event => {
    setCertRif(event.target.value);
  };

  const handlerFirmaRif = event => {
    setFirmaAutorizadaCert(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="Octocat.png" className="App-logo" alt="logo" /> */}
      </header>
      <body>
        <div>
          <div>
            <imput placeholder="Cert Rif" onKeyUp={(e) => handlerCertRif(e) }/>
            <imput placeholder="Firma Autorizada Cert" onKeyUp={(e) => handlerFirmaRif(e) }/>
            <button value ="Generar" onKeyPress={getUrlCertificado}/>
          </div>
        <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={urlNitRifVirtual}
              viewBox={`0 0 256 256`}
              />
        </div>
      </body>
    </div>
  );
}

export default App;
