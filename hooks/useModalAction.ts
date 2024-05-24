import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setModal, ModalKey } from '@/redux/features/modals/modalSlice';

const useModalAction = (modalKey: ModalKey) => {
  const dispatch = useDispatch();

  const openModal = useCallback(() => {
    dispatch(setModal({ key: modalKey, value: true }));
  }, [dispatch, modalKey]);

  const closeModal = useCallback(() => {
    dispatch(setModal({ key: modalKey, value: false }));
  }, [dispatch, modalKey]);

  return { openModal, closeModal };
};

export default useModalAction;
