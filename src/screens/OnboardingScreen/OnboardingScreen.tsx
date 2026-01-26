import { Text, View } from 'react-native';

import { NeomorphButton } from '@app/components/NeomorphButton/NeomorphButton';
import { NeomorphTextInput } from '@app/components/NeomorphTextInput/NeomorphTextInput';

import { useOnboardingScreen } from './OnboardingScreen.hooks';
import { styles } from './OnboardingScreen.styles';

export const OnboardingScreen = () => {
  const { control, onSubmit } = useOnboardingScreen();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ProdBoost</Text>
      <Text style={styles.subtitle}>
        Let's get to know you better to personalize your experience
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Your Name or Nickname</Text>
        <NeomorphTextInput
          control={control}
          name="name"
          rules={{
            required: 'Name is required',
            maxLength: {
              value: 150,
              message: 'Name must be less than 150 characters',
            },
          }}
          placeholder="Enter your name..."
          width={350}
          placeholderTextColor="#7BA9A0"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Your Motivation</Text>
        <NeomorphTextInput
          control={control}
          width={350}
          name="motivation"
          rules={{
            required: 'Motivation is required',
            maxLength: {
              value: 150,
              message: 'Motivation must be less than 150 characters',
            },
          }}
          placeholder="What drives you...?"
          placeholderTextColor="#7BA9A0"
        />
      </View>

      <View style={styles.buttonContainer}>
        <NeomorphButton text="Get Started" onPress={onSubmit} />
      </View>
    </View>
  );
};
