from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)


with open("fake_news_model.pkl", "rb") as f:
    model = pickle.load(f)

with open("tfidf_vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    news_text = data.get("text", "")
    transformed_text = vectorizer.transform([news_text])
    prediction = model.predict(transformed_text)[0]
    confidence = round(max(model.predict_proba(transformed_text)[0]) * 100, 2)

    if prediction == 1:
        result = "REAL NEWS"
    else:
        result = "FAKE NEWS"
    return jsonify({
        "prediction": result,
        "confidence": confidence
    })

if __name__ == "__main__":
    app.run(debug=True)