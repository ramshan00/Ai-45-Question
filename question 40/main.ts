//Exercise 40 - Albums
function make_album(artist:string, title:string):{artist:string, title:string}{
    let album:{artist:string, title:string} = {artist: artist, title: title};
    return album;
}
//creating dictionaries of album
let album1 = make_album('Jungkook','Golden');
let album2 = make_album('V Taehyung','Layover');
let album3 = make_album('Suga','D-Day');
//printing these dictionaries on console
console.log(album1);
console.log(album2);
console.log(album3);