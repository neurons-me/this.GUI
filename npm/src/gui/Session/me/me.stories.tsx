import Me from './me';

export default {
  title: 'Users/.me',
  component: Me,
};

export const Default = () => <Me />;

export const WithCommand = () => (
  <Me defaultValue='profile.name("Abella.e")' />
);
