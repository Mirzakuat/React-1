import React, { useState } from 'react';
import './App.css';
import Media from './Components/Media';


//NO2
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setpw] = useState('');
  const [alamat, setalamat] = useState('');
  const [JK, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Proses data formulir, contoh: validasi atau kirim ke server

    alert(`Data Submitted:\nName: ${name}\nEmail: ${email}\npw: ${pw}\nalamat: ${alamat}\nJK: ${JK}`);
  };

  return (

    <div className="App">
      <h1>Registration Form</h1>
      <br></br>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <br></br>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="pw"
            value={pw}
            onChange={(e) => setpw(e.target.value)}
            required
          />
        </label>
<br></br> <br></br>

<label>
      Alamat:
          <input
            type="alamat"
            value={alamat}
            onChange={(e) => setalamat(e.target.value)}
            required
          />
        </label>  <br></br> <br></br>

        <label>
          Jenis Kelamin 
          <select
            value={JK}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value=""> </option>
            <option value="male">Laki Laki</option>
            <option value="female">Perempuan</option>
            <option value="other">Other</option>
          </select>
        </label>

        <br></br><br></br>

        <button type="submit">SUBMIT</button>
      </form>
   
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>



      <div className='App full-container-fluid py-3 btn btn-success' style={{ textAlign: 'center' }}>
  <h2>PANCASILA</h2>

  <br></br> <br></br>

  <div style={{ display: 'flex', alignItems: 'center', }}>
    <Media image="BINTANG.png" />
    <span style={{ marginLeft: '10px' }}>Ketuhanan yang Maha Esa</span>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', }}>
    <Media image="RANTAI.png" />
    <span style={{ marginLeft: '10px' }}>Kemanusiaan yang Adil dan Beradab</span>
  </div>

  <div style={{ display: 'flex', alignItems: 'center',  }}>
    <Media image="BERINGIN.png" />
    <span style={{ marginLeft: '10px' }}>Persatuan Indonesia</span>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', }}>
    <Media image="BANTENG.png" />
    <span style={{ marginLeft: '10px' }}>Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan Perwakilan</span>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', }}>
    <Media image="PADI KAPAS.png" />
    <span style={{ marginLeft: '10px' }}>Keadilan Sosial bagi Seluruh Rakyat Indonesia</span>
  </div>
</div>

        <div className="App container col-sm-6">

        <div className="container-fluid py-3 btn btn-danger">
          <h4>Button Merah</h4>
        </div>
        <div className="container-fluid py-3 btn btn-warning">
          <h4>Button Kuning</h4>
        </div>
        <div className="container-fluid py-3 btn btn-success">
          <h4>Button Hijau</h4>
        </div>
        <div className="container-fluid py-3 btn btn-light">
          <h4>Button putih</h4>
        </div>
        <div className="container-fluid py-3 btn btn-dark">
          <h4>Button Black</h4>
        </div>

        <br></br> <br></br>

      </div>


        </div>
     

      );
  }


  export default App;

  