import { HOME_GETDATA } from './ActionTypes';

export function getData() {
  const request = fetch('/api/book-list').then(x => x.json());

  return {
    type: HOME_GETDATA,
    payload: request,
  };
}
