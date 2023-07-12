import { useContext } from 'react';
import { UserWidgetContext } from '../../UserWidgetContext';

export const useUserWidgetContext = () => useContext(UserWidgetContext);
