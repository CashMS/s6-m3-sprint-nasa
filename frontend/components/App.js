import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import POTD from './POTD';
import Footer from './Footer';

const API_KEY = '';
const nasaData = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

function App() {
  const [url, setUrl] = useState(null);
  const [photoInfo, setPhotoInfo] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [date, setDate] = useState('');
  const [apodData, setApodData] = useState(null);
  const [lastThree, setLastThree] = useState([]);

  const handleInfo = async () => {
    setPhotoInfo(!photoInfo)
}

const changeDate = async () => {
  try {
    const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${inputValue}`);
    setApodData(res.data);
  } catch (err) {
    console.log('Error fetching APOD data', err);
  }
}

const oldDates = () => {
  const dates = [];
  const today = new Date();

  for (let i = 1; i<= 3; i++) {
    const prevDate = new Date(today);
    prevDate.setDate(today.getDate() - i);
    const year = prevDate.getFullYear();
    const month = String(prevDate.getMonth() + 1).padStart(2, '0');
    const day = String(prevDate.getDate()).padStart(2, '0');
    dates.push(`${year}-${month}-${day}`);
  }

  return dates;
}

useEffect(() => {
  const fetchOld = async () => {
    const dates = oldDates();
    const dataPromises = dates.map(date => 
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
    );
    
    try {
      const res = await Promise.all(dataPromises);
      const fetchedData = res.map(res => res.data);
      setLastThree(fetchedData);
    } catch (err) {
      console.log('Error fetching last three', err.message);
    }
  }

  fetchOld();
}, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(nasaData);
        console.log(res)
        setUrl(res.data);
        setApodData(res.data);
        setDate(res.data.date);
      } catch (err) {
        console.log('Error fetching the APOD data', err.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (date !== inputValue) {
      setDate(inputValue)
    }
  }, [inputValue])

  useEffect(() => {
    console.log(date)
  }, [date])

  return (
    <div>
      {url ? (
        <Header info={url} infoHandle={handleInfo} changeDate={changeDate}
        inputValue={inputValue} setInputValue={setInputValue} />
      ) : (
        <p>Loading...</p>
      )}

      {url ? (
        <POTD info={url} photoInfo={photoInfo} date={date} apodData={apodData} />
      ) : (
        <p>Loading...</p>
      )}

        {url ? (
          <Footer info={url} lastThree={lastThree} />
        ) : (
          <p>Loading...</p>
        )}
    </div>
  )
}

export default App
