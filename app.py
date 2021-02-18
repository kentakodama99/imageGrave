from flask import Flask,make_response,request,jsonify,render_template,send_file
from flask_cors import CORS
import base64
import numpy as np
import cv2

app = Flask(__name__, static_folder="./dist", static_url_path="")
# app = Flask(__name__)
#CORS
CORS(app)

# default(アクセス時の最初の画面)
# @app.route('/')
# def index():
#     return render_template('index.html') #アクセス時の最初の画面

@app.errorhandler(404)
def index(_):
    return send_file("./dist/index.html")

@app.route('/grayscale',methods=['post'])
def grayscale():
  base64img=request.form["image"] #post受け取り
  binary = base64.b64decode(base64img.split(',')[1]) #decode(data:image/{png};base64,{base64encode}]の形式で渡されるので、encode部分のみ抽出してdecode)
  #画像データは3次元であり、(行データ, 列データ, RGBデータ)である。
  arrayimg = np.asarray(bytearray(binary), dtype=np.uint8) #asarray:Numpy配列と同期 bytearray型(代入可能) 8ビットの符号なし整数(0~255)
  grayimg = cv2.imdecode(arrayimg, 0) #グレースケールとして処理
  cv2.imwrite('result.png', grayimg) # 変換結果を保存
  #encode
  with open('result.png', "rb") as image_file:
    data = base64.b64encode(image_file.read())
    data = data.decode('utf-8')
    response = {"result":str(base64img.split(',')[0])+","+str(data)}
  return jsonify(response), 200


if __name__ == "__main__":
  app.run(host='localhost')
  # app.run(host='0.0.0.0')