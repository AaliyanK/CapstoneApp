import os

from src.app import create_app

if __name__ == '__main__':
  env_name = 'development'
  print(create_app(env_name))
  app, socketio = create_app(env_name)
  # run app
  socketio.run(app, debug=True, port=5000)