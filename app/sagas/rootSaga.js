import { all } from 'redux-saga/effects';
import { watchLogin} from './loginSaga';
import { watchKategori } from './kategoriSaga';
import { watchAdmin } from './adminSaga'
function* rootSaga() {
    yield all([
        watchLogin(),
        watchKategori(),
        watchAdmin()
    ])
}
export default rootSaga