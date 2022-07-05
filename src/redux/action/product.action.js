import * as ActionType from '../ActionType';
// import firestore from '@react-native-firebase/firestore';
import { BASE_URL } from '../../shared/Baseurl';

export const insertProduct = productData => dispatch => {
try {
  dispatch(loadingProduct());
  let fData = {
    id: Math.floor(Math.random() * 1000),
    ...productData,
  };
  fetch(BASE_URL + 'products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fData),
  })
    .then(response => response.json())
    .then(data => {
      dispatch({type: ActionType.POST_PRODUCT, payload: fData});
    })
    .catch(error => {
      dispatch(errorProduct(error));
    });
} catch (e) {
  dispatch(errorProduct(e));
}
}

// export const insertProduct = productData => dispatch => {
//   try {
//     firestore()
//       .collection('Product')
//       .add({
//         name: productData.name,
//         price: productData.price,
//         area: productData.area,
//         info: productData.info,
//       })
//       .then(product1 => {
//         dispatch({
//           type: ActionType.INSERTED_PRODUCT,
//           payload: {id: product1.id, ...productData},
//         });
//       });
//   } catch (error) {
//     dispatch({type: ActionType.ERROR_PRODUCT, payload: error});
//   }
// };

export const loadingProduct = () => dispatch => {
  dispatch({type: ActionType.LOADING_PRODUCT});
};

export const errorProduct = error => dispatch => {
  dispatch({type: ActionType.ERROR_PRODUCT, payload: error});
};

export const fetchProduct = () => dispatch => {
  try {
    dispatch(loadingProduct());
    fetch(BASE_URL + 'products', {
      method: 'GET',
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Somthing Wrong...!!!');
        }
      })
      .then(data => {
        dispatch({type: ActionType.GET_PRODUCT, payload: data});
      })
      .catch(error => {
        dispatch(errorProduct(error.message));
      });
  } catch (e) {
    dispatch(errorProduct(e));
  }
};

export const deleteProduct = id => dispatch => {
  try {
    dispatch(loadingProduct());
    fetch(BASE_URL + 'products/' + id, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Somthing Wrong...!!!');
        }
      })
      .then(data => {
        dispatch({type: ActionType.DELETE_PRODUCT, payload: id});
      })
      .catch(error => {
        dispatch(errorProduct(error.message));
      });
  } catch (e) {
    dispatch(errorProduct(e));
  }
};

// export const deleteProduct = id => async dispatch => {
//   dispatch({type: ActionType.LOADING_PRODUCT});
//   try {
//     firestore()
//       .collection('Product')
//       .doc(id)
//       .delete()
//       .then(() => {
//         dispatch({type: ActionType.DELETED_PRODUCT, payload: id});
//         console.log('User deleted!');
//       });
//   } catch (error) {
//     dispatch({type: ActionType.AUTH_ERROR, payload: error.code});
//   }
// };

export const updateProduct = data => dispatch => {
  try {
    dispatch(loadingProduct());

    fetch(BASE_URL + 'products/' + data.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())

      .then(({data}) => {
        dispatch({type: ActionType.UPDATE_PRODUCT, payload: data});
      })
      .catch(error => {
        dispatch(errorProduct(error));
      });
  } catch (e) {
    dispatch(errorProduct(e));
  }
};

// export const updateProduct = data => dispatch => {
//   try {
//     firestore()
//       .collection('Product')
//       .doc(data.id)
//       .update({
//         name: data.name,
//         price: data.price,
//         area: data.area,
//         info: data.info,
//       })
//       .then(() => {
//         dispatch({type: ActionType.UPDATE_PRODUCT, payload: data});
//       });
//   } catch (e) {
//     dispatch({type: ActionType.AUTH_ERROR, payload: e.code});
//   }
// };

// export const CloudToGetproduct = () => async dispatch => {
//   try {
//     let data = [];
//     await firestore()
//       .collection('Product')
//       .get()
//       .then(querySnapshot => {
//         querySnapshot.forEach(documentSnapshot => {
//           let d = {
//             id: documentSnapshot.id,
//             ...documentSnapshot.data(),
//           };
//           data.push(d);
//         });
//       });
//     dispatch({type: ActionType.POST_PRODUCT, payload: data});
//   } catch (error) {
//     console.log(error);
//   }
// };
