import { private_createTypography } from '@mui/material';
import { _id, _name, _price, _change, _buy, _amount, _profit, _percent } from './_mock';

// ----------------------------------------------------------------------

/*
                  { id: 'name', label: '종목명' },
                  { id: 'price', label: '현재가' },
                  { id: 'change', label: '등락' },
                  { id: 'buy', label: '매입가', align: 'center' },
                  { id: 'amount', label: '수량' },
                  { id: 'profit', label: '손익' },
                  { id: 'percent', label: '수익률' },
                  { id: '' },
*/
export const _reports = [...Array(24)].map((_, index) => ({
  id: _id(index),
  name: _name(index),
  price: _price(index),
  change: _change(index),
  buy: _buy(index),
  amount: _amount(index),
  profit: _profit(index),
  percent: _percent(index),
}));
