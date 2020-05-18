import { all } from 'redux-saga/effects';
import { watchLogin} from './loginSaga';
import { watchKategori } from './kategoriSaga';
import { watchAdmin } from './adminSaga';
import { watchKeluhan } from './keluhanSaga';
function* rootSaga() {
    yield all([
        watchLogin(),
        watchKategori(),
        watchAdmin(),
        watchKeluhan()
    ])
}
export default rootSaga