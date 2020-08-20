/**
 * funzone che recupera l'utente dal oockie JWT e verifica che esso sia valido.
 * Se presente eegue il refresh del cookie se necessario
 */
export const getAuthUser = () => {
  return { user: { username: "Marco", email: "marcoknezevich@gmail.com" } };
};

export const loginUser = ({ email, password }) => {
  let p = new Promise((resolve, reject) => {
    resolve({ user: { username: "Marco", email: "marcoknezevich@gmail.com" } });
  });

  return p;
};
