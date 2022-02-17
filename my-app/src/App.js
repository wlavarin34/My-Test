import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import { useState, useRef } from "react";
import axios, { Axios } from "axios";
function App() {
  const [upload, setUpload] = useState({ preview: '', data: '' });
  const [list, setLists] = useState([]);

  var fileRef = useRef()
  var numberRef = useRef()

  async function submitFile(e){
    e.preventDefault();
    let formData = new FormData()
    formData.append('file', upload.data)
    formData.append('number', numberRef.current.value)
    const response = await fetch('http://localhost:8080/upload/mostfrequent', {
      method: 'POST',
      body: formData,
    });
    response.json().then((result)=>{
      console.log(result);
    setLists(result);
    }).catch((err)=>{
      console.log(err);
    });
  }

  const handleFileChange = (e) => {
    const txt = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setUpload(txt)
  }

  return (
    <div>
     <form className='container' >
     <div className="mb-3">
  <label  className="form-label">Get Most Frequent Words from Text File</label>
  <input onChange={handleFileChange} ref={fileRef}  className="form-control" type="file" id="formFileMultiple" multiple/>
</div>
  <div className="mb-3">
    <label  className="form-label">Number of unique words</label>
    <input ref={numberRef} type="number" className="form-control" id="numbers"/>
  </div>
  <button type="submit" onClick={submitFile} className="btn btn-primary">Submit</button>
</form>
<div className='container'>
<ul className="list-group">
</ul>
<List list={list}/>
</div>
    </div>
  );
}

export default App;
