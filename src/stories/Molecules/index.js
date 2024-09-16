// src/stories/molecules/index.js

// Import Navigation components
import { Navbar } from './Navbar/Navbar';
import { Sidebar } from './Sidebar/Sidebar';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';

// Import FormElements components
import { InputGroup } from './InputGroup/InputGroup';
import { InputWithLabel } from './InputWithLabel/InputWithLabel';
import { SearchBar } from './SearchBar/SearchBar';
import { FileUpload } from './FileUpload/FileUpload';
import { FormField } from './FormField/FormField';

// Import ButtonsWithIcons components
import { IconButton } from './IconButton/IconButton';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';

// Import MediaMolecules components
import { ImageWithCaption } from './ImageWithCaption/ImageWithCaption';
import { VideoWithDescription } from './VideoWithDescription/VideoWithDescription';
import { AvatarWithName } from './AvatarWithName/AvatarWithName';
import { AudioPlayer } from './AudioPlayer/AudioPlayer';

// Import ContentDisplay components
import { Card } from './Card/Card';
import { MediaCard } from './MediaCard/MediaCard';
import { List } from './List/List';
import { Accordion } from './Accordion/Accordion';

// Import FeedbackMolecules components
import { Notification } from './Notification/Notification';
import { Modal } from './Modal/Modal';

// Import Tables components
import { DataTable } from './DataTable/DataTable';
import { PricingTable } from './PricingTable/PricingTable';
import { ComparisonTable } from './ComparisonTable/ComparisonTable';

// Organize components under subcategories
const molecules = {
  Navigation: {
    Navbar,
    Sidebar,
    Breadcrumbs,
  },
  FormElements: {
    InputGroup,
    InputWithLabel,
    SearchBar,
    FileUpload,
    FormField,
  },
  ButtonsWithIcons: {
    IconButton,
    ButtonGroup,
  },
  MediaMolecules: {
    ImageWithCaption,
    VideoWithDescription,
    AvatarWithName,
    AudioPlayer,
  },
  ContentDisplay: {
    Card,
    MediaCard,
    List,
    Accordion,
  },
  FeedbackMolecules: {
    Notification,
    Modal,
  },
  Tables: {
    DataTable,
    PricingTable,
    ComparisonTable,
  },
};

export default molecules;