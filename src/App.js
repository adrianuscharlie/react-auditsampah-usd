import "./App.css";
import Login from "./Login";
import { useState, useEffect } from "react";
import Home from "./Home";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  doc,
  onSnapshot,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";
function App() {
  const [login, setLogin] = useState(false);
  const [nim, setNim] = useState("");
  const [mahasiswa, setMahasiswa] = useState({
    nim: nim,
    report: [],
    sampah: {
      kertas: 0,
      elektronik: 0,
      plastik: 0,
      bungkus: 0,
      baju: 0,
      botol: 0,
      konsumsi: 0,
      disposable: 0,
      organik: 0,
      makanan: 0,
      kendaraan: 0,
    },
  });
  const getData = async () => {
    const docRef = doc(db, "sampah", nim);
    getDoc(docRef).then((item) => {
      if (item.exists()) {
        setMahasiswa(item.data());
        setLogin(true);
      } else {
        if(window.confirm("Data tidak ditemukan. Membuat akun baru dengan NIM "+nim+"?")===true){
          setDoc(doc(db, "sampah", nim), mahasiswa);
          setLogin(true);
        }else{
          alert("Masukan kembali nim dengan benar!")
        }
      }
      
    });
  };
  const updateData = async (item, newSampah) => {
    const docRef = doc(db, "sampah", nim);
    updateDoc(docRef, {
      sampah: item,
      report: arrayUnion({
        date: Timestamp.fromDate(new Date(Date.now())),
        sampah: newSampah,
      }),
    });
    alert("Berhasil Menambahkan Sampah Terbaru! Ke Akun "+nim)
  };
  const handleNim = (e) => {
    setNim(e.target.value);
    setMahasiswa({ ...mahasiswa, nim: nim });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if(nim.length!==9){
      alert("Masukan 9 Digit Nim dengan Benar!")
    }else{
      getData();
    }
    
  };
  const handleLogout = (e) => {
    e.preventDefault();
    setLogin(false);
    setMahasiswa({
      nim: nim,
      report: [],
      sampah: {
        kertas: 0,
        elektronik: 0,
        plastik: 0,
        bungkus: 0,
        baju: 0,
        botol: 0,
        konsumsi: 0,
        disposable: 0,
        organik: 0,
        makanan: 0,
        kendaraan: 0,
      },
    }
    
    );
    setNim("");
  };

  const handleMahasiswaChanged = (index) => (e) => {
    let newSampah = { ...mahasiswa.sampah };
    newSampah[index] = e.target.value;
    setMahasiswa({ ...mahasiswa, sampah: newSampah });
    console.log(mahasiswa);
  };
  return (
    <div className="app">
      {login ? (
        <Home
        handleLogout={handleLogout}
          updateData={updateData}
          handleMahasiswaChanged={handleMahasiswaChanged}
          mahasiswa={mahasiswa}
          login={login}
          nim={nim}
        />
      ) : (
        <Login handleLogin={handleLogin} nim={nim} handleNim={handleNim} />
      )}
    </div>
  );
}

export default App;
