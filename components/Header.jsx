export default function Header() {
  return (
    <nav>
      <div className='logo-container'>
        <picture className='logo--image'>
          <source srcSet='/troll-meme.webp' type='image/webp' />
          <img src='/troll-meme.png' className='logo--image' />
        </picture>
        <p className='logo--title'>Meme Generator</p>
      </div>
      <p>by bb-8 </p>
    </nav>
  );
}
