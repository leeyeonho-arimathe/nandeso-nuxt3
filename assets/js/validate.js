export const firebaseAuthValidateMessage = (e) => {
  if (e.code === 'auth/invalid-email') {
    return 'メールアドレス型式は正しくないです。入力したメールアドレスが正しいか確認してください。';
  } else if (e.code === 'auth/user-disabled') {
    return '入力したメールアドレスは無効になっています。';
  } else if (e.code === 'auth/user-not-found') {
    return '入力したメールアドレスは当サービスに登録されておりません。新規登録してからご利用ください。';
  } else if (e.code === 'auth/too-many-requests') {
    return '一定時間に数回正しくないパスワード入力されたため、セキュリティーのため、一時的に停止状態となっています。しばらく時間が経ってから試してください。';
  } else if (e.code === 'auth/wrong-password') {
    return '入力したパスワードが正しくありません。';
  } else {
    return e.message;
  }
};