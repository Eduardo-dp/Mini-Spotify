document.addEventListener('DOMContentLoaded', () => {
  const artistsData = [
    { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg' },
    { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg' },
    { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg' },
    { name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg' },
    { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
    { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg' }
  ];

  const albumsData = [
    { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'SleepyJohn', image: './img/album-white-noise.jpg' },
    { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg' },
    { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpg' },
    { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpg' },
    { name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpg' },
    { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/album-escandalo.jpg' }
  ];

  const artistGrid = document.querySelector('.artists-grid');
  const albumGrid = document.querySelector('.albums-grid');
  const searchInput = document.getElementById('searchInput');


  function renderArtists(filter = '') {
    artistGrid.innerHTML = ''; 
    artistsData
      .filter(artist => artist.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');
        artistCard.innerHTML = `
          <img src="${artist.image}" alt="${artist.name}">
          <div>
            <h3>${artist.name}</h3>
            <p>Artista</p>
          </div>
        `;
        artistGrid.appendChild(artistCard);
      });
  }

  function renderAlbums(filter = '') {
    albumGrid.innerHTML = ''; 
    albumsData
      .filter(album => album.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');
        albumCard.innerHTML = `
          <img src="${album.image}" alt="${album.name}">
          <div>
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
          </div>
        `;
        albumGrid.appendChild(albumCard);
      });
  }

  renderArtists();
  renderAlbums();

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
    renderArtists(searchTerm);
    renderAlbums(searchTerm);
  });
}); 