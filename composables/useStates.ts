export const useFirebaseUserStore = () => {
  return useState("firebaseUser", () => null)
};