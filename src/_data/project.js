function getUrl(env) {
  if (env === "production") {
    return process.env.PROD_URL;
  } else if (env === "development") {
    return process.env.DEV_URL;
  } else if (env === "local") {
    return "http://localhost:8080";
  }
}

const url = getUrl(process.env.ENVIRONMENT);


const project = {
  url: url,
  firebaseConfig: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  }
};

export default project;