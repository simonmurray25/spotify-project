# spotify-project

Project Overview
~~~~~~~~~~~~~~~~~
  The purpose of this project was to explore music trends over time using interactive visualizations. We collected and organized data from Spotify, Lyric Genius, and Billboard Music Charts to explore trends related to song names, lyrics, and music features. We collected the current top 40 songs for several different categories in order to look at trends in song names by category. We also collected the top 10 songs from 2006-2023 along with their artist and lyrics. Several different music features including popularity, danceability, energy, tempo, and duration were also collected for the analysis of this second data set. From the second data set we planned to compare music features of the top 10 songs from two different years so users could observe differences in music features from year to year. Lastly, from the second data set we hoped to create a visual representation of song lyric trend between two years. 

Instructions
~~~~~~~~~~~~~
- Create a passwordPG.py file in your folder and add your PGadmin username and password.
  username = 'postgres'
  password = 'YOUR PASSWORD HERE'
- Download and run table schema in pgAdmin to create two tables: top_10_full and categories_top_40
- Install the required modules in python using the following code:  
  1. "pip install billboard.py" 
  2. "pip install lyricsgenius"  
  3. "pip install wordcloud"  
  4. "pip install spotipy"
  - Run the following Jupyter notebooks in this order:    
  1. Billboard_charts_dataframes.ipynb 
  2. lyrics.ipynb - This will run for at least 10 minutes  
  3. audio_features.ipynb  
  4. merge.ipynb  
- Download and import top_10_full.csv and categories_top_40.csv into the PGadmin data base  
- Download and run flask_project_3.py
- Open index.html and click go live to open the webpage
- Explore the 3 different interactive visualizations to learn more about music features of popular songs, song naming trends by music category, and lyric trends of popular songs.

Ethical Considerations
~~~~~~~~~~~~~~~~~~~~~~
  Our team made sure to choose reputable and reliable data sources to reduce any data errors or bias. We chose a topic that did not require any data from individuals to protect data privacy. By using freely accessible data we reduced any issues concerning privacy and data security.

Data Sources
~~~~~~~~~~~~
- Billboard charts API https://github.com/guoguo12/billboard-charts
- Spotify API https://developer.spotify.com/documentation/web-api
- Lyric genius API https://docs.genius.com/#/getting-started-h1

References
~~~~~~~~~~
- Sources can be found commented in the code.
