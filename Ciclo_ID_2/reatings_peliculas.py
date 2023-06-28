import requests

def get_movie_ratings(movie_title):
    url = f"http://www.omdbapi.com/?t={movie_title}&apikey=68fd8149&"

    response = requests.get(url)
    data = response.json()

    if response.status_code == 200 and data.get('Response') == 'True':
        ratings = data.get('Ratings')
        if ratings:
            for rating in ratings:
                source = rating.get('Source')
                value = rating.get('Value')
                print(f"{source}: {value}")
        else:
            print("No ratings found for the movie.")
    else:
        print("Error retrieving movie data.")

get_movie_ratings("The Dark Knight")
