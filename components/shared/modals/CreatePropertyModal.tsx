'use client';

import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Modal from "./Modal";
import { categories } from '../Categories';
import Heading from '../Heading';
import CategoryInput from '../inputs/CategoryInput';
import Counter from '../inputs/Counter';
import ImageUpload from '../inputs/ImageUpload';
import Input from '../inputs/Input';
import { features } from '../listings/ListingInfo';
import RoomFeature from '../RoomFeature';
import { ReduxStore } from '@/redux/store';
import { ModalKey, setModal } from '@/redux/features/modals/modalSlice';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '@/components/ui/select';
import { institutionList } from '../inputs/Institution';
import University from '../University';
import { useCreatePropertyMutation } from '@/redux/features/properties/propertiesApiSlice';
import { useGetAllAreasQuery } from '@/redux/features/area/areaApiSlice';
import { useGetAllFeaturesQuery } from '@/redux/features/room-features/roomFeaturesApiSlice';
import { useGetAllUniversityQuery } from '@/redux/features/university/universityApiSlice';

enum STEPS {
  CATEGORY = 0,
  INFO = 1,
  FEATURE=2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PLACE = 5,
  INSTITUTION = 6,
  PRICE = 7,
}

const CreatePropertyModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: ReduxStore) => state.modal.CreatePropertyModal);
  const [createProperty, createPropertyResult] = useCreatePropertyMutation();
  const { data, isFetching } = useGetAllAreasQuery();
  const { data: featuresData, isFetching: isFetchingFeaturesData } = useGetAllFeaturesQuery();
  const { data: universitiesData, isFetching: isFetchingUniversitiesData } = useGetAllUniversityQuery();
  const [selectedFeatures, setSelectedFeatures] = useState<number[]>([]);
  const [selectedInstitutions, setSelectedInstitutions] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [step, setStep] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      roomCount: 1,
      bathroomCount: 1,
      price: NaN,
      title: '',
      description: '',
      sqft: NaN,
      area: '',
      sector: NaN,
      road: NaN,
      house: NaN,
    }
  });

  const category = watch('category');
  const roomCount = watch('roomCount');
  const bathroomCount = watch('bathroomCount');
  const area = watch('area');
  const price = watch('price');

  function isDisabled() {
    if (step === STEPS.CATEGORY && category === '') return true;
    if (step === STEPS.FEATURE && !selectedFeatures.length) return true;
    if (step === STEPS.IMAGES && !uploadedFiles.length) return true;
    if (step === STEPS.INSTITUTION && !selectedInstitutions.length) return true;
    if (step === STEPS.PLACE && !area) return true;
    if (step === STEPS.PRICE && !price) return true;
  }

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const toggleFeature = (featureId: number) => {
    if (selectedFeatures.includes(featureId)) {
      setSelectedFeatures((prevSelected) =>
        prevSelected.filter((id) => id !== featureId)
      );
    } else {
      setSelectedFeatures((prevSelected) => [...prevSelected, featureId]);
    }
  };

  const toggleUniversity = (universityId: number) => {
    if (selectedInstitutions.includes(universityId)) {
      setSelectedInstitutions((prevSelected) =>
        prevSelected.filter((id) => id !== universityId)
      );
    } else {
      setSelectedInstitutions((prevSelected) => [...prevSelected, universityId]);
    }
  };

  const onBack = () => {
    setStep((value) => value - 1);
  }

  const onNext = () => {
    setStep((value) => value + 1);
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }

    data["features"] = selectedFeatures;
    data["images"] = uploadedFiles;
    data["universities"] = selectedInstitutions;
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        if (key !== 'images') {
            formData.append(key, String(value));
        }
    });

    data.images.forEach((image: string | Blob) => {
        formData.append(`images`, image);
    });
    const createPropertyResult = await createProperty(formData).unwrap();
    console.log(createPropertyResult);
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Create'
    }

    return 'Next'
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }

    return 'Back'
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) =>
                setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  )

  if(step === STEPS.FEATURE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Which of these features available in your house?"
          subtitle="Pick features"
        />
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-3
            max-h-[50vh]
            overflow-y-auto
          "
        >
          {features.map((feature) => (
            <RoomFeature feature={feature} selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} key={feature.id} />
          ))}
        </div>
      </div>
    )
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Share some basics about your place"
          subtitle="What amenitis do you have?"
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue('roomCount', value)}
          value={roomCount}
          title="Bed Rooms"
          subtitle="How many bed rooms do you have?"
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue('bathroomCount', value)}
          value={bathroomCount}
          title="Bathrooms"
          subtitle="How many bathrooms do you have?"
        />
        <hr />
        <Input
          id="sqft"
          label="Square Feet"
          disabled={false}
          register={register}
          errors={errors}
          required
          type="number"
        />
      </div>
    )
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add photos of your place"
          subtitle="Show guests what your place looks like!"
        />
        <ImageUpload uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles} />
      </div>
    )
  }

  if (step === STEPS.PLACE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Select Location"
          subtitle="Select location which is nears to your place"
        />
        <div className='w-full'>
          <Select value={area} onValueChange={(value) => setCustomValue('area', value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an area" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Area</SelectLabel>
                <SelectItem value="uttara">Uttara</SelectItem>
                <SelectItem value="gulshan">Gulshan</SelectItem>
                <SelectItem value="banani">Banani</SelectItem>
                <SelectItem value="dhanmondi">Dhanmondi</SelectItem>
                <SelectItem value="mirpur">Mirpur</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Input
          id="sector"
          label="Sector / Block"
          disabled={false}
          register={register}
          errors={errors}
          type='number'
          required
        />
        <Input
          id="road"
          label="Road No."
          disabled={false}
          register={register}
          errors={errors}
          type='number'
          required
        />
        <Input
          id="house"
          label="House No."
          disabled={false}
          register={register}
          errors={errors}
          type='number'
          required
        />
      </div>
    )
  }

  if (step === STEPS.INSTITUTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Universities"
          subtitle="Select universities near your place"
        />
        <div className="w-full flex justify-center">
        <div className="px-8 w-[80%] flex flex-col gap-4 text-center max-h-[400px] overflow-y-auto">
          {institutionList.map((university) => (
            <University key={university.id} university={university} toggleUniversity={toggleUniversity} selectedUniversity={selectedInstitutions} />
          ))}
          </div>
        </div>
      </div>
    )
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="How would you describe your place?"
          subtitle="Short and sweet works best!"
        />
        <Input
          id="title"
          label="Title"
          disabled={false}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Input
          id="description"
          label="Description"
          disabled={false}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Now, set your price"
          subtitle="How much do you charge per month?"
        />
        <Input
          id="price"
          label="Price"
          formatPrice
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  return (
    <>
      <Modal
        disabled={isLoading}
        nextDisabled={isDisabled()}
        isOpen={isOpen}
        title="stuRENT your home!"
        actionLabel={actionLabel}
        onSubmit={handleSubmit(onSubmit)}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
        onClose={() => dispatch(setModal({ key: ModalKey.CreatePropertyModal, value: false }))}
        body={bodyContent}
        />
    </>
  );
}

export default CreatePropertyModal;
