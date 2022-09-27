from flask import Flask

from .config import app_config
from .views.GraphView import graph_api as graph_blueprint 
from flask_cors import CORS

def create_app(env_name):
  """
  Create app
  """
  
  # app initiliazation
  app = Flask(__name__)
  CORS(app)

  app.config.from_object(app_config[env_name])

  app.register_blueprint(graph_blueprint, url_prefix='/api/v1/graph')

  @app.route('/', methods=['GET'])
  def index():
    """
    example endpoint
    """
    return 'Congratulations! Your first endpoint is workin'

  return app