import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  deleteDoc,
  collection,
  addDoc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAk9DFbDqb94mbH4MDnYq3k8Bz9vUcVPyI',
  authDomain: 'what-s-a-student-to-do-62d5d.firebaseapp.com',
  projectId: 'what-s-a-student-to-do-62d5d',
  storageBucket: 'what-s-a-student-to-do-62d5d.appspot.com',
  messagingSenderId: '192194215417',
  appId: '1:192194215417:web:9cf88420428a8dd5559128',

};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export const addTodoFirebase = async (text: string, todoId: string) => {
  const cardsSnapShot = collection(db, `projects/${todoId}/taken`);

  const docRef = await addDoc(cardsSnapShot, {
    title: text,
    description: '',
    comments: [],
  });
  return docRef.id;
};

// eslint-disable-next-line max-len
export const updateTodoFirebase = async (todoListId: string, id: string, attribute: string, value: string) => {
  console.log(todoListId, id, attribute, value);
  if (attribute === 'title') {
    await setDoc(doc(db, `projects/${todoListId}/taken`, id), {
      title: value,
    }, { merge: true });
  } else {
    await setDoc(doc(db, `projects/${todoListId}/taken`, id), {
      description: value,
    }, { merge: true });
  }
};

export const deleteTodoListFirebase = async (id: string) => {
  await deleteDoc(doc(db, 'projects', id));
};

export const deleteCardFromFirebase = async (todoListId: string, id: string) => {
  await deleteDoc(doc(db, `projects/${todoListId}/taken`, id));
};
