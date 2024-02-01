'use client';

import qs from 'query-string';
import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter, useSearchParams } from 'next/navigation';

import Modal from "./Modal";
import Gender from '../inputs/Gender';
import Institution from '../inputs/Institution';
import Place from '../inputs/Place';
import Heading from '../Heading';
import { ReduxStore } from '@/redux/store';
import { ModalKey, setModal } from '@/redux/reducers/modal';

enum STEPS {
  GENDER = 0,
  INSTITUTION = 1,
  LOCATION = 2,
}

const SearchModal = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchModal = useSelector((state: ReduxStore) => state.modal.SearchModal);
  const params = useSearchParams();

  const [step, setStep] = useState(STEPS.GENDER);

  const [location, setLocation] = useState('');
  const [institution, setInstitution] = useState('');
  const [gender, setGender] = useState('');

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.LOCATION) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location,
      institution,
      gender,
    };

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery,
    }, { skipNull: true });

    setStep(STEPS.LOCATION);
    dispatch(setModal({ key: ModalKey.SearchModal, value: false }));
    router.push(url);
  },
  [
    step,
    searchModal,
    location,
    router,
    onNext,
    params,
    institution,
    gender,
  ]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.LOCATION) {
      return 'Search'
    }

    return 'Next'
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.GENDER) {
      return undefined
    }

    return 'Back'
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="For which gender you want the room?"
      />
      <Gender gender={gender} setGender={setGender} />
    </div>
  )

  if (step === STEPS.INSTITUTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="What Institution nears to you?"
          subtitle="Make sure everyone is free!"
        />
        <Institution institution={institution} setInstitution={setInstitution} />
      </div>
    )
  }

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="More information"
          subtitle="Find your perfect place!"
        />
        <Place place={location} setplace={setLocation} />
      </div>
    )
  }

  return (
    <Modal
      isOpen={searchModal}
      title="Filters"
      actionLabel={actionLabel}
      onSubmit={onSubmit}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.GENDER ? undefined : onBack}
      onClose={() => dispatch(setModal({ key: ModalKey.SearchModal, value: false }))}
      body={bodyContent}
    />
  );
}

export default SearchModal;
