import './lib/firebase-init';
/* eslint-disable no-new */
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
} from 'firebase/firestore';
import { Card, TodoList } from './Components';
import { State, root } from './Lib';

// import firestore
// import RegisterComponent from './Components/Register';
// import LoginComponent from './Components/Login';
/**
 * OPMAKEN APP
 */
// const appContainer = document.querySelector<HTMLDivElement>('#app')!;

// const register = new RegisterComponent();
// const login = new LoginComponent();

// appContainer.appendChild(login.render());
// appContainer.appendChild(register.render());
// -------------main------------
const addTodoListInput = document.getElementById('addTodoListInput') as HTMLInputElement;
const addTodoListButton = document.getElementById('addTodoListButton') as HTMLElement;
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAk9DFbDqb94mbH4MDnYq3k8Bz9vUcVPyI',
  authDomain: 'what-s-a-student-to-do-62d5d.firebaseapp.com',
  projectId: 'what-s-a-student-to-do-62d5d',
  storageBucket: 'what-s-a-student-to-do-62d5d.appspot.com',
  messagingSenderId: '192194215417',
  appId: '1:192194215417:web:9cf88420428a8dd5559128',

};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const addTodoListFirebase = async (title: string) => {
  const docRef = await addDoc(collection(db, 'projects'), {
    title,
  });
  console.log('Document written with ID: ', docRef.id);
  return docRef.id;
};

addTodoListButton.addEventListener('click', async () => {
  if (addTodoListInput.value.trim() !== '') {
    await addTodoListFirebase(addTodoListInput.value);
    // new TodoList(root, addTodoListInput.value, id);

    addTodoListInput.value = '';
  }
});

const getCards = async (id: string) => {
  const cardsSnapShot = collection(db, `projects/${id}/taken`);
  const qSnap = await getDocs(cardsSnapShot);
  return qSnap.docs.map((d) => (
    {
      id: d.id,
      title: d.data().title,
      description: d.data().description,
      comments: d.data().comments,
      parentId: d.data().parentId,
    }
  ));
};

const createTodoList = ({ id, cards, title }: { id: string; cards: State[], title: string }) => {
  const newList: TodoList = new TodoList(root, title, id);

  cards.forEach((card: State) => {
    new Card(card.title, newList.div as HTMLElement, newList, card.id, id);
    // newList.addToDo();
  });
};

// select collection
// We willen nu referen naar onze collectie `owl-statues`
const colRef = collection(db, 'projects');
// get data
onSnapshot(colRef, (snapshot) => {
  snapshot.docChanges().forEach(async (change) => {
    if (change.type === 'added') {
      // snapshot.docs.forEach(async (doc) => {
      //   addTodoListInput.value = '';
      const cards = await getCards(change.doc.id);
      const { id } = change.doc;
      const { title } = change.doc.data();
      createTodoList({
        title, id, cards, ...change.doc.data(),
      });
      // });
    }
    if (change.type === 'modified') {
      // rerendering
    }
    if (change.type === 'removed') {
      // removing
    }
  });

  // document.querySelector('#app')!.innerHTML = '';
});
// const snapshot =  await getDocs(colRef);

// lists.forEach((listElement) => {
//   console.log(listElement)

//   // listElement.cards.forEach(
//   //   (card) => {
//   //     // newList.addToDo(card.)
//   //   }
//   // )

// });
