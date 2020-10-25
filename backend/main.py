from waitress import serve
from endpoint import app

if __name__ == "__main__":
    # execute only if run as a script
    app.run(debug=True)


