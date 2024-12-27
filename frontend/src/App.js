import React, { useState } from 'react';
import axios from 'axios';

function App() {  //App fonksiyonu
  const [file, setFile] = useState(null); //Dosya state'i
  const [cid, setCid] = useState(''); //CID state'i

  const handleFileChange = (e) => { //Dosya seçildiğinde çalışacak fonksiyon
    setFile(e.target.files[0]); //Seçilen dosyayı state'e atar
  };

  const handleUpload = async () => {  //Dosya yükleme fonksiyonu
    if (!file) {  //Dosya seçilmediyse uyarı verir
      alert('Lütfen bir dosya seçiniz');
      return; //Fonksiyondan çıkar
    }

    const formData = new FormData(); //Form verilerini oluşturur
    formData.append('file', file); //Dosyayı form verilerine ekler

    try { //Dosyayı yüklerken hata oluşursa yakalar
      const response = await axios.post('http://localhost:5001/upload', formData, {  //Dosyayı sunucuya yükler
        headers: {
          'Content-Type': 'multipart/form-data' //Form verilerinin türünü belirtir
        }
      });
      setCid(response.data.cid); //Yüklenen dosyanın CID'sini state'e atar
    } catch (error) { //Hata oluşursa yakalar
      console.error(error); //Hata mesajını konsola yazdırır);
      alert('Dosya yüklenirken bir hata oluştu'); //Hata mesajı gösterir
    }
  };

  return (  //Render fonksiyonu
    <div style={{ padding: '20px' }}>
      <h1>IPFS Dosya Yükleyici</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Yükle</button>
      {cid && (  //CID varsa gösterir
        <div>
          <h2>Yüklenen Dosyanın CID'si:</h2>
          <p>
            Yüklenen CID: <a href={`https://ipfs.io/ipfs/${cid}`} target="_blank" rel="noopener noreferrer">{cid}</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
