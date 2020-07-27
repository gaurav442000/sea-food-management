import Rebase from "re-base";
import firebase from "firebase";



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATdqKRTQhfOYABI_PHG_dxrqay_S-qrHU",
    authDomain: "sea-food-management.firebaseapp.com",
    databaseURL: "https://sea-food-management.firebaseio.com"
    
}); 

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is default export
export default base;
