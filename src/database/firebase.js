import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyB24nB1qmvSWqdi4J_xwrTE-M4XY1my4Rg",
    authDomain: "catalogo-filmes-785b6.firebaseapp.com",
    databaseURL: "https://catalogo-filmes-785b6.firebaseio.com",
    projectId: "catalogo-filmes-785b6",
    storageBucket: "catalogo-filmes-785b6.appspot.com",
    messagingSenderId: "298915526380",
    appId: "1:298915526380:web:0506ca65153c1d1d6157c9",
    measurementId: "G-YVYXLCDPPG"
 
})

export const db = app.database()