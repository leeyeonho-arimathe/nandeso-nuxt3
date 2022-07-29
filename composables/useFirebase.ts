import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
/**
 * 新規アカウント登録
 * @param email 
 * @param password 
 * @returns 
 */
export const createUser = async (email: string, password: string) => {
  const auth = getAuth();
  const credentials = await createUserWithEmailAndPassword(auth, email, password);

  return credentials.user;
}
/**
 * サインイン
 * @param email 
 * @param password 
 * @returns 
 */
export const signInUser = async (email: string, password: string) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(auth, email, password);
  
  return credentials.user;
}
/**
 * 認証状態変化により呼ばれるトリガー
 */
export const initUser = async () => {
  const auth = getAuth();
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      useFirebaseUserStore().value = user;
    } else {
      useFirebaseUserStore().value = null;
    }
  });
}
/**
 * サインアウト
 * @returns 
 */
export const signOutUser = async () => {
  return await getAuth().signOut();
}
