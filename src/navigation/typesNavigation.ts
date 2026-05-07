import { Product } from "../types";

export type RootStackParamList = {
    Home: undefined
    Detail: {product : Product}
    Edit: {product: Product; mode: 'view' | 'edit'}
};
