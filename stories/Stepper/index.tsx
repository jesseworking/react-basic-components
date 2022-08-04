import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Store } from '@sambego/storybook-state';

import Stepper from '../../src/components/Stepper';
import Button from '../../src/components/Button';

import { StateDecorator } from '../utils/StateDecorator';
import { StyleWrapper } from '../utils/StyleWrapper';

const store = new Store({
  defaultStoryActiveStep: 0,
  nlStoryActiveStep: 0,
  nlStoryCompletion: [false, false, false],
  verticalStoryActiveStep: 0,
  contentStoryActiveStep: 0,
  errorStoryActiveStep: 0,
  errorStoryErrors: [false, false, false]
});

const toggleAt = (key, index) => {
  const items = store.get(key);

  items[index] = !items[index];
  store.set({ [key]: items });
};

storiesOf('Stepper', module)
  .addDecorator(StyleWrapper)
  .addDecorator(withInfo)
  .addParameters({
    info: { inline: true }
  })
  .addDecorator(StateDecorator(store))
  .add('default', () => (
    <Stepper
      activeStep={store.get('defaultStoryActiveStep')}
      steps={[
        {
          label: 'First do Step 1'
        },
        {
          label: 'Then do Step 2'
        },
        {
          label: 'Finally do Step 3'
        }
      ]}
      onStepClick={(step, index) =>
        store.set({ defaultStoryActiveStep: index })
      }
    />
  ))
  .add('non-linear', () => (
    <Stepper
      activeStep={store.get('nlStoryActiveStep')}
      steps={['First do step 1', 'Or do step 2', 'Or even do step 3'].map(
        (step, i) => {
          const completed = store.get('nlStoryCompletion')[i];

          return {
            label: (
              <div>
                <div>{step}</div>
                <Button
                  native
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleAt('nlStoryCompletion', i);
                  }}
                >
                  {!completed ? 'Complete' : 'Undo'}
                </Button>
              </div>
            ),
            completed
          };
        }
      )}
      onStepClick={(step, index) => store.set({ nlStoryActiveStep: index })}
    />
  ))
  .add('vertical', () => (
    <Stepper
      activeStep={store.get('verticalStoryActiveStep')}
      orientation="vertical"
      steps={[
        {
          label: 'First do Step 1'
        },
        {
          label: 'Then do Step 2'
        },
        {
          label: 'Finally do Step 3'
        }
      ]}
      onStepClick={(step, index) =>
        store.set({ verticalStoryActiveStep: index })
      }
    />
  ))
  .add('with content', () => (
    <Stepper
      activeStep={store.get('contentStoryActiveStep')}
      orientation="vertical"
      steps={['First do Step 1', 'Then do Step 2', 'Finally do Step 3'].map(
        (step, index) => ({
          label: step,
          content: (
            <form
              onSubmit={e => {
                e.preventDefault();
                store.set({ contentStoryActiveStep: index + 1 });
              }}
            >
              <input autoFocus type="text" />
            </form>
          )
        })
      )}
      onStepClick={(step, index) =>
        store.set({ contentStoryActiveStep: index })
      }
    />
  ))
  .add('with errors', () => (
    <Stepper
      activeStep={store.get('nlStoryActiveStep')}
      steps={['First do step 1', 'Or do step 2', 'Or even do step 3'].map(
        (step, i) => {
          const hasError = store.get('errorStoryErrors')[i];

          return {
            label: (
              <div>
                <div>{step}</div>
                <Button
                  native
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleAt('errorStoryErrors', i);
                  }}
                >
                  {!hasError ? 'Err' : 'Undo'}
                </Button>
              </div>
            ),
            hasError
          };
        }
      )}
      onStepClick={(step, index) => store.set({ nlStoryActiveStep: index })}
    />
  ));
