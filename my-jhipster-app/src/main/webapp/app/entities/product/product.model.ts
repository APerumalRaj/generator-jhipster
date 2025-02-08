import dayjs from 'dayjs/esm';

export interface IProduct {
  id: number;
  sample?: string | null;
  name?: string | null;
  price?: number | null;
  date?: dayjs.Dayjs | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
