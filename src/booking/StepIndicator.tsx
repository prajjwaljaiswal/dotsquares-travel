'use client';

import React from 'react';
import { BOOKING_STEPS } from './steps.config';
import styles from './StepIndicator.module.css';

interface StepIndicatorProps {
  currentStepIndex: number;
}

export function StepIndicator({ currentStepIndex }: StepIndicatorProps) {
  const totalSteps = BOOKING_STEPS.length;

  return (
    <div className={styles.container} data-testid="step-indicator">
      <p className={styles.progressLabel}>
        Step {currentStepIndex + 1} of {totalSteps}
      </p>
      <ol className={styles.stepList}>
        {BOOKING_STEPS.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isActive = index === currentStepIndex;
          const classNames = [
            styles.stepItem,
            isActive ? styles.active : '',
            isCompleted ? styles.completed : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <li key={step.id} className={classNames} aria-current={isActive ? 'step' : undefined}>
              <span className={styles.stepNumber}>{index + 1}</span>
              <span className={styles.stepLabel}>{step.label}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
