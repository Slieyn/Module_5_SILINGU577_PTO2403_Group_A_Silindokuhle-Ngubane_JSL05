// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "All This Time", artist: "Drax", genre: "Pop" },
    { title: "Monday", artist: "Rocekt", genre: "Rock" },
    { title: "The Boxer", artist: "Groot", genre: "Pop" },
    { title: "Damage", artist: "HER", genre: "R&B" },
    { title: "Let It Be", artist: "The Beatles", genre: "Rock" },

    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax" : "Pop" , 
    "Rocket" : "Rock",
    "Groot" : "Pop",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playList = [];

    Object.keys(guardians).map((key) => {
        const guardianPlaylist = songs.filter(song => song.genre === guardians[key]);

        const playlistItem = {
            guardian: key,
            playlist: guardianPlaylist
        }

        playList.push(playlistItem);
    });
    
    // append playlist items
    playList.map(item => {
        const playListItemHtml = `
            <div class='playlist-item'>
                <h4 class='playlist-item-title'>${item.guardian}'s Playlist </h4>
                <ul class='playlist-item-songs'>
                    ${item.playlist.map(playlistItem => {
                    return(
                        `
                            <li class='playlist-item-song'>
                                <a href="">${playlistItem.title}</a> by ${playlistItem.artist}
                            </li>
                        `
                    )
                    })}
                </ul>
            <div>
        `

        const playListsElement = document.getElementById('playlists');
        // append html, add to the existing playlist items html
        playListsElement.innerHTML = playListsElement.innerHTML + playListItemHtml;
    });

// Your code here
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);

