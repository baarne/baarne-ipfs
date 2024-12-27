import express from 'express';
import multer from 'multer';
import { create } from 'ipfs-http-client';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config(); //Ortam değişkenlerini yükler

const app = express(); //Express uygulaması oluşturuldu
const port = process.env.PORT || 5000; //Port numarası belirlendi

//IPFS istemcisini oluşturuldu
const ipfs = create({
    url: process.env.IPFS_API_URL,
});


//Cors middleware
app.use(cors());
app.use(express.json());

//Multer ayarları
const storage = multer.memoryStorage(); //Dosyaları bellekte saklamak için
const upload = multer({ storage }); //Multer nesnesi oluşturuldu

//Test endpointi
app.get('/', (req, res) => {
    res.send('IPFS Backend Çalışıyor'); //Tarayıcıda IPFS Backend Çalışıyor yazısını gösterir
});

//Dosya yükleme endpointi
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const file = req.file; //Yüklenen dosya
        if (!file) {
            return res.status(400).send('Dosya yüklenemedi'); //Dosya yüklenemediyse 400 hatası döndürür
        }

        console.log("IPFS bağlantısı kontrol ediliyor...");
        const { id } = await ipfs.id(); //IPFS bağlantısını kontrol et
        console.log("IPFS bağlantısı başarılı. IPFS Node ID: ", id); //Bağlantı başarılıysa IPFS Node ID'sini konsola yazdır

        const addedFile = await ipfs.add(file.buffer); //Dosyayı IPFS'e yükle
        res.status(200).json({  //Yükleme başarılıysa 200 kodu döndürür
            cid: addedFile.cid.toString(), //Yüklenen dosyanın CID'si
            path: addedFile.path //Yüklenen dosyanın IPFS yolunu döndürür
        });
    } catch (error) {
        console.error("Hata Oluştu: ", error.message); //Hata varsa konsola yazdırır
        console.error("Hata detayları: ", error); //Hata detaylarını konsola yazdırır
        res.status(500).send('Bir hata oluştu'); //500 hatası döndürür
    }
});

//Sunucuyu başlatma
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor`);
});