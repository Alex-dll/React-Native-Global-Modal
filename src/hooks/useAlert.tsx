import {useContext} from 'react';
import {AlertContext} from '../contexts/Alert';

export function useAlert() {
  const context = useContext(AlertContext);
  return context;
}
