from flask import Flask, request, jsonify
from .config import app_config
from .views.GraphView import graph_api as graph_blueprint 
from flask_cors import CORS
import gspread
from google.oauth2 import service_account

def create_app(env_name):
  """
  Create app
  """
  
  # app initiliazation
  app = Flask(__name__)
  CORS(app)

  app.config.from_object(app_config[env_name])

  app.register_blueprint(graph_blueprint, url_prefix='/api/v1/graph')

  credentials = service_account.Credentials.from_service_account_file(
  'C:/Users/Aaliyan/Desktop/Capstone/CapstoneApp/backend/src/views/credentials.json', scopes=["https://spreadsheets.google.com/feeds","https://www.googleapis.com/auth/spreadsheets","https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"] 
)

  client = gspread.authorize(credentials)
  gsheet = client.open("Cali 22415C").sheet1

  @app.route('/', methods=['GET'])
  def index():
    """
    example endpoint
    """
    return 'Congratulations! Your first endpoint is workin'
  
  

  @app.route('/all_data', methods=['GET'])
  def get_all_graph_data():
    """
    Get all data
    """

    # return jsonify(gsheet.get_all_records()) 
    # Need to see how to upload this real time
    # Need to only send in like 10 values at a time 

    return jsonify(gsheet.row_values(2))

  # An example POST Route to add a review
  @app.route('/add_data', methods=["POST"])
  def add_data():
      req = request.get_json()
      row = [req["email"], req["date"], req["score"]]
      gsheet.insert_row(row, 2)  # since the first row is our title header
      
      return jsonify(gsheet.get_all_records())

  
  return app
