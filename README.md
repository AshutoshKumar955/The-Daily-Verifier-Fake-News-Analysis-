
# 📰 The Daily Verifier - Fake News Detection System

![Python](https://img.shields.io/badge/Python-3.10+-blue)
![Flask](https://img.shields.io/badge/Flask-Backend-green)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-ML-orange)
![Accuracy](https://img.shields.io/badge/External%20Accuracy-93.72%25-brightgreen)

## Overview

The Daily Verifier is a Machine Learning-powered Fake News Detection System that classifies news articles as **REAL NEWS** or **FAKE NEWS** using Natural Language Processing (NLP).

The project uses **TF-IDF Vectorization** for feature extraction and **Logistic Regression** for classification. A newspaper-themed web interface built with HTML, CSS, JavaScript, and Flask allows users to verify news articles in real time.

---

# 📸 Project Screenshots

## Web Interface

![Web Interface](screenshots/Picture1.png)
![Web Interface](screenshots/Picture2.png)

---

## Training Dataset Performance

**Training/Test Accuracy: 98.49%**

![Training Accuracy](screenshots/Picture5.png)

---

## External Dataset Validation

**External Dataset Accuracy: 93.72%**

![External Accuracy](screenshots/Picture6.png)

---

## Classification Report

![Classification Report](screenshots/Picture3.png)

---

## Confusion Matrix

![Confusion Matrix](screenshots/Picture4.png)

---

# ✨ Features

* Fake News Detection using Machine Learning
* Newspaper-inspired User Interface
* Real-time Prediction through Flask API
* Confidence Score for Predictions
* Responsive Frontend
* External Dataset Validation
* End-to-End ML Deployment

---

# 🛠️ Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Flask
* Flask-CORS

## Machine Learning

* Python
* Pandas
* Scikit-Learn
* TF-IDF Vectorizer
* Logistic Regression

---

# 📂 Dataset Used for Training

## Fake and Real News Dataset (ISOT)

Dataset Link:

https://www.kaggle.com/datasets/clmentbisaillon/fake-and-real-news-dataset

Files Used:

* Fake.csv
* True.csv

### Data Preparation

* Real News labeled as `1`
* Fake News labeled as `0`
* Datasets merged into a single dataframe
* Data shuffled before training

---

# ⚙️ Machine Learning Pipeline

### 1. Data Collection

Loaded Fake.csv and True.csv datasets using Pandas.

### 2. Data Preprocessing

* Assigned Labels
* Merged Datasets
* Shuffled Data
* Selected:

  * text
  * label

### 3. Feature Extraction

TF-IDF (Term Frequency-Inverse Document Frequency) Vectorization was used to convert textual news content into numerical features.

### 4. Model Training

Logistic Regression classifier trained using:

* 80% Training Data
* 20% Testing Data

### 5. Initial Evaluation

Training/Test Accuracy:

**98.49%**

---

# 🧪 External Validation

To evaluate real-world performance, the model was tested on a completely different dataset that was never used during training.

Dataset Link:

https://www.kaggle.com/code/rahilmerchant/fake-news-dataset/output?select=fake-news-data.csv

### Dataset Statistics

| Category       | Count  |
| -------------- | ------ |
| Fake News      | 26,645 |
| Real News      | 24,588 |
| Total Articles | 51,233 |

---

## Results on External Dataset

### Accuracy

**93.72%**

### Classification Report

| Class         | Precision | Recall | F1-Score |
| ------------- | --------- | ------ | -------- |
| Fake News (0) | 0.91      | 0.98   | 0.94     |
| Real News (1) | 0.97      | 0.89   | 0.93     |

### Confusion Matrix

```text
[[26071   574]
 [ 2643 21945]]
```

### Key Observations

* Successfully detected 98% of fake news articles.
* Achieved 97% precision on real news articles.
* Maintained strong performance on a completely unseen dataset.
* Demonstrated good generalization capability beyond the training data.

---

# 📁 Project Structure

```text
The Daily Verifier
│
├── app.py
├── fake_news_model.pkl
├── tfidf_vectorizer.pkl
├── README.md
├── index.html
├── style.css
├── script.js
└── screenshots/
    ├── web_interface.png
    ├── training_accuracy.png
    ├── external_accuracy.png
    ├── classification_report.png
    └── confusion_matrix.png
```

---

# 🚀 How to Run

## Install Dependencies

```bash
pip install flask flask-cors pandas scikit-learn
```

## Start Flask Server

```bash
python app.py
```

## Open the Application

Visit:

```text
http://127.0.0.1:5000
```

Paste a news article and click **Consult the Model**.

---

# ⚠️ Limitations

* Does not perform live fact-checking from the internet.
* Predictions are based on linguistic patterns learned from training data.
* Performance may vary for topics not represented in the training dataset.

---

# 🔮 Future Improvements

* BERT-based Classification
* LSTM Models
* Explainable AI (XAI)
* News Source Credibility Analysis
* Real-time Fact Verification APIs
* Deployment on Cloud Platforms

---

# 👨‍💻 Author

**Ashutosh Kumar**

B.Tech Computer Science Engineering

