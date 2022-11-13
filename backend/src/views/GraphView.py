from flask import request, Blueprint, jsonify
import gspread

from google.oauth2 import service_account


graph_api = Blueprint('graph', __name__)

credentials = service_account.Credentials.from_service_account_file(
  'C:/Users/Aaliyan/Desktop/Capstone/CapstoneApp/backend/src/views/credentials.json', scopes=["https://spreadsheets.google.com/feeds","https://www.googleapis.com/auth/spreadsheets","https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive"] 
)

client = gspread.authorize(credentials)
gsheet = client.open("Cali 22415C").sheet1

@graph_api.route('/all_data', methods=['GET'])
def get_all_graph_data():
  """
  Get all data
  """

  # return jsonify(gsheet.get_all_records())
  return jsonify(gsheet.row_values(1))

# An example POST Route to add a review
@graph_api.route('/add_data', methods=["POST"])
def add_data():
    req = request.get_json()
    row = [req["email"], req["date"], req["score"]]
    gsheet.insert_row(row, 2)  # since the first row is our title header
    return jsonify(gsheet.get_all_records())
