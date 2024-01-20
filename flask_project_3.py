import passwordPG
import flask
import sqlalchemy 
from flask_cors import CORS

database = 'Project 3'
engine = sqlalchemy.create_engine(f"postgresql://{passwordPG.username}:{passwordPG.password}@localhost:5432/{database}")
connection = engine.connect()

app = flask.Flask(__name__)
CORS(app, support_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route("/year/<year>")
def top_10(year):
    result = connection.execute(sqlalchemy.text(f'select * from top_ten_songs where year = {year}'))
    result_dict = []
    for record in result:
        result_dict.append({'Title':record.title, 'Year': record.year})
    return(flask.jsonify(result_dict))

@app.route("/category/<category>")
def category(category):
    result = connection.execute(sqlalchemy.text(f'select * from categories_top_40 where category = \'{category}\''))
    result_dict = []
    for record in result:
        result_dict.append({'Category': record.category, 'Title':record.title})
    return(flask.jsonify(result_dict))


@app.route("/lyrics/<song>")
def lyrics(song):
    result = connection.execute(sqlalchemy.text(f'select * from top_10_full where title = \'{song}\''))
    result_dict = []
    for record in result:
        result_dict.append({'Title': record.title, 'Lyrics':record.lyrics})
    return(flask.jsonify(result_dict))

@app.route("/features/<song>")
def features(song):
    result = connection.execute(sqlalchemy.text(f'select * from top_10_full where title = \'{song}\''))
    result_dict = []
    for record in result:
        result_dict.append({'Title': record.title, 'Popularity':record.popularity,'Danceability':record.danceability, 'Energy':record.energy, 'Tempo':record.tempo, 'Duration':record.duration})
    return(flask.jsonify(result_dict))

if __name__ == '__main__': 
    app.run(debug=True)

