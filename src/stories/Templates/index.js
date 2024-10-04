// Import all template components directly from their root-level directories
import { AdminDashboard } from './AdminDashboard/AdminDashboard';
import { SidebarTopNav } from './SidebarTopNav/SidebarTopNav';
import { ProductPage } from './ProductPage/ProductPage';
import { ShoppingCart } from './ShoppingCart/ShoppingCart';
import { SignInPage } from './SignInPage/SignInPage';
import { RegistrationPage } from './RegistrationPage/RegistrationPage';
import { HeroSection } from './HeroSection/HeroSection';
import { FeaturesList } from './FeaturesList/FeaturesList';
import { CallToAction } from './CallToAction/CallToAction';
import { Testimonials } from './Testimonials/Testimonials';
import { FormSection } from './FormSection/FormSection';
import { LocationInfo } from './LocationInfo/LocationInfo';
import { SocialMediaLinks } from './SocialMediaLinks/SocialMediaLinks';

// Export all templates under a single object for easier import
const Templates = {
  AdminDashboard,
  SidebarTopNav,
  ProductPage,
  ShoppingCart,
  SignInPage,
  RegistrationPage,
  HeroSection,
  FeaturesList,
  CallToAction,
  Testimonials,
  FormSection,
  LocationInfo,
  SocialMediaLinks,
};

export default Templates;