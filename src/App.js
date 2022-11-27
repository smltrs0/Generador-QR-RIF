import './App.css';
import QRCode from "react-qr-code";
import { useState } from 'react';
import BannerGit from './BannerGit';

function App() {

  const [urlNitRifVirtual, setUrlRifVirtual] = useState(false);
  const [certRif, setCertRif] = useState(false);
  const [firmaAutorizadaCert, setFirmaAutorizadaCert] = useState(false)
  const [zoonQR, setZoonQR] = useState(80);

  const getUrlCertificado = () => {
    if (certRif && firmaAutorizadaCert) {
      setUrlRifVirtual(`http://contribuyente.seniat.gob.ve/rifconsultacertificado/generarCertificadoRif.do?certRif=${certRif}&firmaAutorizadaCert=${firmaAutorizadaCert}`);
    } else {
      alert("Debe ingresar el certificado y la firma autorizada para poder generar el código QR");
    }
  };

  const handlerCertRif = event => {
    setCertRif(event.target.value);
  };

  const handlerFirmaRif = event => {
    setFirmaAutorizadaCert(event.target.value);
  };

  const handlerZoom = event => {
    const zoom = event.target.value;
    setZoonQR(zoom);
  };

  return (
    <div className="App">
      <BannerGit/>
      <div style={{ padding: "2rem" }}>
        <h2>Genera el código QR correspondiente al RIF</h2>
        <div className='input-container'>
          <fieldset title='Número del comprobante' className='fieldset'>
            <label>N° DE COMPROBANTE(*):</label>
            <input className='input level' placeholder="Cert Rif" onKeyUp={(e) => handlerCertRif(e)} />
          </fieldset>
          <fieldset title='Número de firma autorizada' className='fieldset'>
            <label>FIRMA AUTORIZADA(*):</label>
            <input className='input level' placeholder="Firma Autorizada Cert" onKeyUp={(e) => handlerFirmaRif(e)} />
          </fieldset>
        </div>
        <input type="button" value="Generar código" className='generate' onClick={getUrlCertificado} />

        {urlNitRifVirtual && (<div title='Cambiar tamaño de QR'>
          <p>Zoom</p>
          <input type="range" onChange={(e) => handlerZoom(e)} />
        </div>)}

        {urlNitRifVirtual && <QRCode
          size={256}
          style={{ height: "auto", width: `${zoonQR}%`, paddingTop: "2rem" }}
          value={urlNitRifVirtual}
          level={"M"}
          viewBox={`0 0 256 256`}
        />}
      </div>
    </div>
  );
}

export default App;
