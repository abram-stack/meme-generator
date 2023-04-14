import { useEffect, useState } from 'react';
// import memesData from '../memesData';

export default function Meme() {
  // we need state for:alldata and inputs & image
  const [allMemes, setAllMemes] = useState([]);

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const memeUrl = allMemes[Math.floor(Math.random() * allMemes.length)].url;

    setMeme((prevMeme) => {
      return {
        ...meme,
        randomImage: memeUrl,
      };
    });
  }

  function handleChangeText(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  function clearText() {
    setMeme((prevMeme) => ({
      ...prevMeme,
      topText: '',
      bottomText: '',
    }));
  }
  console.log(meme);
  return (
    <main>
      <div className='form'>
        <input
          type='text'
          className='form--input'
          placeholder='Top Text'
          name='topText'
          value={meme.topText}
          onChange={handleChangeText}
        />
        <input
          type='text'
          className='form--input'
          placeholder='Bottom Text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChangeText}
        />
        <button className='form--button' onClick={getMemeImage}>
          Generate meme image
        </button>
        <button className='form--button clear--button' onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className='meme'>
        <img
          src={`${meme.randomImage}`}
          className='meme--image'
          alt={meme.randomImage}
        />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
}
