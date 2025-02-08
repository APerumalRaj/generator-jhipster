import dayjs from 'dayjs/esm';

import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 11737,
};

export const sampleWithPartialData: IProduct = {
  id: 31533,
  name: 'almost tempting fervently',
};

export const sampleWithFullData: IProduct = {
  id: 4403,
  sample: 'cafe',
  name: 'along amongst',
  price: 12918,
  date: dayjs('2025-02-07'),
};

export const sampleWithNewData: NewProduct = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
