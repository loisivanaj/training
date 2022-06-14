import { Button, Text } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <Button
        title="Go to my profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
  );
};
