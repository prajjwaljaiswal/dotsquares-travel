import React, { useState, useEffect } from 'react';
import { useBooking } from '../BookingContext';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { DatePicker } from '@/components/ui/DatePicker';
import styles from './DetailsStep.module.css';

interface DetailsStepProps {
  onNext: () => void;
  onBack: () => void;
}

export function DetailsStep({ onNext, onBack }: DetailsStepProps) {
  const { data, setStepData, validateDetailsStep } = useBooking();
  const travellerCount = data.destination?.travellers || 1;
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!data.details) {
      setStepData('details', {
        primaryTraveller: { name: '', dateOfBirth: '', gender: '' },
        additionalTravellers: []
      });
    } else {
      const requiredAdditional = Math.max(0, travellerCount - 1);
      const currentAdditional = data.details.additionalTravellers?.length || 0;
      
      if (requiredAdditional !== currentAdditional) {
        const additionalTravellers = Array.from({ length: requiredAdditional }, (_, i) => 
          data.details?.additionalTravellers?.[i] || { name: '', dateOfBirth: '', gender: '' }
        );
        setStepData('details', {
          ...data.details,
          additionalTravellers
        });
      }
    }
  }, [travellerCount]);

  const handlePrimaryChange = <K extends keyof Traveller>(field: K, value: Traveller[K]) => {
    setStepData('details', {
      ...data.details!,
      primaryTraveller: { ...data.details!.primaryTraveller, [field]: value }
    });
  };

  const handleAdditionalChange = (index: number, field: keyof Traveller, value: any) => {
    const updated = [...data.details!.additionalTravellers];
    updated[index] = { ...updated[index], [field]: value };
    setStepData('details', {
      ...data.details!,
      additionalTravellers: updated
    });
  };

  const handleBlur = (fieldId: string) => {
    setTouched(prev => ({ ...prev, [fieldId]: true }));
  };

  const handleNext = () => {
    const validation = validateDetailsStep();
    if (validation.isValid) {
      setErrors({});
      onNext();
    } else {
      setErrors(validation.errors);
      const allTouched: Record<string, boolean> = {};
      Object.keys(validation.errors).forEach(key => {
        allTouched[key] = true;
      });
      setTouched(allTouched);
    }
  };

  const genderOptions = [
    { value: '', label: 'Select Gender (Optional)' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className={styles.container} data-testid="details-step">
      <h2 className={styles.title}>Traveller Information</h2>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Primary Traveller</h3>
        <div className={styles.fieldsGrid}>
          <Input
            label="Full Name"
            value={data.details?.primaryTraveller.name || ''}
            onChange={(e) => handlePrimaryChange('name', e.target.value)}
            onBlur={() => handleBlur('primaryName')}
            error={touched.primaryName ? errors.primaryName : undefined}
            required
            size="md"
            data-testid="primary-name"
          />
          <DatePicker
            label="Date of Birth"
            value={data.details?.primaryTraveller.dateOfBirth || ''}
            onChange={(value) => handlePrimaryChange('dateOfBirth', value)}
            onBlur={() => handleBlur('primaryDOB')}
            error={touched.primaryDOB ? errors.primaryDOB : undefined}
            required
            max={new Date().toISOString().split('T')[0]}
            size="md"
            data-testid="primary-dob"
          />
          <Select
            label="Gender"
            value={data.details?.primaryTraveller.gender || ''}
            onChange={(e) => handlePrimaryChange('gender', e.target.value as Traveller['gender'])}
            options={genderOptions}
            size="md"
            data-testid="primary-gender"
          />
        </div>
      </div>

      {travellerCount > 1 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Additional Travellers</h3>
          {Array.from({ length: travellerCount - 1 }, (_, i) => (
            <div key={i} className={styles.additionalTraveller} data-testid={`additional-traveller-${i}`}>
              <h4 className={styles.travellerNumber}>Traveller {i + 2}</h4>
              <div className={styles.fieldsGrid}>
                <Input
                  label="Full Name"
                  value={data.details?.additionalTravellers[i]?.name || ''}
                  onChange={(e) => handleAdditionalChange(i, 'name', e.target.value)}
                  onBlur={() => handleBlur(`additionalName_${i}`)}
                  error={touched[`additionalName_${i}`] ? errors[`additionalName_${i}`] : undefined}
                  required
                  size="md"
                  data-testid={`additional-name-${i}`}
                />
                <DatePicker
                  label="Date of Birth"
                  value={data.details?.additionalTravellers[i]?.dateOfBirth || ''}
                  onChange={(value) => handleAdditionalChange(i, 'dateOfBirth', value)}
                  onBlur={() => handleBlur(`additionalDOB_${i}`)}
                  error={touched[`additionalDOB_${i}`] ? errors[`additionalDOB_${i}`] : undefined}
                  required
                  max={new Date().toISOString().split('T')[0]}
                  size="md"
                  data-testid={`additional-dob-${i}`}
                />
                <Select
                  label="Gender"
                  value={data.details?.additionalTravellers[i]?.gender || ''}
                  onChange={(e) => handleAdditionalChange(i, 'gender', e.target.value)}
                  options={genderOptions}
                  size="md"
                  data-testid={`additional-gender-${i}`}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.navigation}>
        <button
          type="button"
          onClick={onBack}
          className={`ds-focusable ${styles.backButton}`}
          data-testid="back-button"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className={`ds-focusable ${styles.nextButton}`}
          data-testid="next-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
