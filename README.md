# gcp-functions-ts-mongodb-boilerplate

## Keywords

- Google Cloud Functions
- Google Cloud Functions Run
- TypeScript
- MongoDB
- Boilerplate
- Environment Configuration
- Node.js
- GitHub Actions
- Cloud Deployment
- Cloud Run
- Serverless Functions

## Overview

This is a boilerplate project for creating Google Cloud Functions using TypeScript and MongoDB. It provides a basic structure and setup to get you started quickly.

## Features

- Google Cloud Functions
- TypeScript
- MongoDB integration
- Environment configuration

## Prerequisites

- Node.js (>=20.x)
- Google Cloud SDK
- MongoDB

## Getting Started

1. Clone the repository:

   ```sh
   git clone git@github.com:YuDaSe/gcp-functions-ts-mongodb-boilerplate.git
   cd gcp-functions-ts-mongodb-boilerplate
   ```

2. Install dependencies:

   ```sh
   npm ci
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your MongoDB connection string and any other necessary environment variables.

   ```
   MONGO_CONNECTION_STRING="mongodb://admin:admin@0.0.0.0:27017/gcp-functions-ts-mongodb-boilerplate"
   ```

4. Build and run:
  ```sh
  npm run build:tsc
  npm run start
  curl -X GET "http://localhost:8080/?command=fetchUsers"
  ```

## To Deploy to Google Cloud Functions using GitHub actions:
   Go to `.github/workflows/deploy.yaml` configure variables: GCP_CREDENTIALS, GCP_FUNCTION_NAME, GCP_FUNCTION_REGION, GCP_FUNCTION_ENTRY_POINT. Uncomment GCP deployment part.

   ```yaml
      - name: 'auth service account 2'
       uses: 'google-github-actions/auth@v2'
       with:
         credentials_json: '${{ secrets.GCP_CREDENTIALS }}'

     - name: Set up Cloud SDK
       uses: google-github-actions/setup-gcloud@v1

     - name: Deploy to Cloud Run
       run: |
         gcloud functions deploy ${{ vars.GCP_FUNCTION_NAME }} \
           --gen2 \
           --runtime=nodejs22 \
           --region=${{ vars.GCP_FUNCTION_REGION }} \
           --trigger-http \
           --entry-point=${{ vars.GCP_FUNCTION_ENTRY_POINT }} \
           --source=dist
   ```

## Run tests 

- To run tests:
  ```sh
  docker compose up -d
  npm test
  ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.