from lyricsgenius import Genius

genius = Genius("iefcTxLg6LKT3nOLO8Pe9-7yPXqPQgQRryOokn83ugM50Kdrs32I7YhhQ0K2350A")
artist = genius.search_artist('Andy Shauf', max_songs=3, sort='popularity')
artist.save_lyrics()