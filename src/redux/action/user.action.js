import * as ActionType from '../ActionType';
import auth from '@react-native-firebase/auth';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// import {GoogleSignin} from '@react-native-google-signin/google-signin';

// export const SignUpUser = data => dispatch => {
//   try {
//     fetch(BASE_URL + 'users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   } catch (e) {
//     console.log(e);
//   }
// };


export const authSignUpUser = data => async dispatch => {
  auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(() => {
      auth().onAuthStateChanged(user => {
        user
          .sendEmailVerification()
          .then(() => {
            dispatch({
              type: ActionType.EMAIL_USER,
              payload: 'Please Verify your Email Id...!!!',
            });
          })
          .catch(error => {
            dispatch({type: ActionType.AUTH_ERROR, payload: error.code});
          });
      });
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        dispatch({
          type: ActionType.AUTH_ERROR,
          payload: 'That email address is already in use!',
        });
      }

      if (error.code === 'auth/invalid-email') {
        dispatch({
          type: ActionType.AUTH_ERROR,
          payload: 'That email address is invalid!',
        });
      }
    });
};

// export const clickLogin = (loginData, navigation) => dispatch => {
//   let flag = 0,
//     id = 0;
//   fetch(BASE_URL + 'users', {
//     method: 'GET',
//   })
//     .then(response => response.json())
//     .then(result => {
//       result.map(item => {
//         if (
//           item.email == loginData.email &&
//           item.password == loginData.password
//         ) {
//           (flag = 1), (id = item.id);
//         }
//         if (flag === 1) {
//           dispatch({type: ActionType.SIGNIN_SUCCESS, payload: id});
//           navigation.navigate('Home');
//         } else {
//           dispatch({
//             type: ActionType.SIGNIN_ERROR,
//             payload: 'Wrong Email/Password',
//           });
//         }
//       });
//     });
// };

export const authClickLogin = (email, password) => async dispatch => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      if (user.user.emailVerified) {
        AsyncStorage.setItem('user', user.user.uid);
        dispatch({type: ActionType.SIGNIN_SUCCESS, payload: user});
      } else {
        dispatch({
          type: ActionType.EMAIL_USER,
          payload: 'Plaese verify your Email id ... !!!',
        });
      }
    })
    .catch(error => {
      dispatch({type: ActionType.AUTH_ERROR, payload: error.code});
    });
};

export const signOutUser = () => dispatch => {
  try {
    auth()
      .signOut()
      .then(() => {
        AsyncStorage.clear();
        dispatch({
          type: ActionType.SIGNOUT_USER,
          payload: 'SignOut successFully...',
        });
      });
  } catch (error) {
    dispatch({type: ActionType.AUTH_ERROR, payload: error.code});
  }
};

export const resetPassword = email => dispatch => {
  try {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch({
          type: ActionType.RESET_PASSWORD,
          payload: 'Reset Password link send to your email...!!!',
        });
      });
  } catch (error) {
    dispatch({type: ActionType.AUTH_ERROR, payload: error.code});
  }
};

export const phoneUser = phone => dispatch => {
  try {
    auth()
      .signInWithPhoneNumber(phone)
      .then(confirmation => {
        dispatch({type: ActionType.OTP, payload: confirmation});
      })
      .catch(error => {
        dispatch({type: ActionType.AUTH_ERROR, payload: error.code});
      });
  } catch (e) {
    dispatch({type: ActionType.AUTH_ERROR, payload: error.code});
  }
};

export const verifyOtp = (otp, confirm) => async dispatch => {
  try {
    auth();
    await confirm
      .confirm(otp)
      .then(user => {
        AsyncStorage.setItem('user', user.user.uid);
        dispatch({type: ActionType.SIGNIN_SUCCESS, payload: user});
      })
      .catch(error => {
        dispatch({type: ActionType.AUTH_ERROR, payload: error.code});
      });
  } catch (e) {
    dispatch({type: ActionType.AUTH_ERROR, payload: error.code});
  }
};

// export const googleUser = () => async dispatch => {
//   GoogleSignin.configure({
//     webClientId:
//       '122462149099-arcej230coahrd22n4spehfhungiifmh.apps.googleusercontent.com',
//   });

//   try {
//     await GoogleSignin.hasPlayServices();
//     GoogleSignin.signIn()
//       .then(async user => {
//         const googleCredential = auth.GoogleAuthProvider.credential(user.idToken,);        
//         let details = await auth().signInWithCredential(googleCredential);
//         AsyncStorage.setItem('user', details.user.uid);
//         dispatch({type: ActionType.SIGNIN_SUCCESS, payload: details.user});
//       })
//       .catch(e => {
//         dispatch({type: ActionType.AUTH_ERROR, payload: e.code});
//       });
//   } catch (e) {
//     dispatch({type: ActionType.AUTH_ERROR, payload: e.code});
//   }
// };

export const googleUser = () => async dispatch => {
    GoogleSignin.configure({
      webClientId:
        '673437472199-ol4hth0b4g8uord8f40kilv1p77uu1hp.apps.googleusercontent.com',
    });
  
    try {
      await GoogleSignin.hasPlayServices();
      GoogleSignin.signIn()
        .then(async user => {
          const googleCredential = auth.GoogleAuthProvider.credential(user.idToken,);        
          let details = await auth().signInWithCredential(googleCredential);
          AsyncStorage.setItem('user', details.user.uid);
          dispatch({type: ActionType.SIGNIN_SUCCESS, payload: details.user});
        })
        .catch(e => {
          dispatch({type: ActionType.AUTH_ERROR, payload: e.code});
        });
    } catch (e) {
      dispatch({type: ActionType.AUTH_ERROR, payload: e.code});
    }
  };