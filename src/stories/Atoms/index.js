// src/stories/atoms/index.js

// Import Text components
import { Heading } from './Heading/Heading';
import { Paragraph } from './Paragraph/Paragraph';
import { Label } from './Label/Label';
import { Caption } from './Caption/Caption';

// Import Interactive components
import { Container } from './Container/Container';
import { Button } from './Button/Button';
import { Link } from './Link/Link';
import { Icon } from './Icon/Icon';
import { Checkbox } from './Checkbox/Checkbox';
import { RadioButton } from './RadioButton/RadioButton';
import { Toggle } from './Toggle/Toggle';
import { TextInput } from './TextInput/TextInput';
import { TextArea } from './TextArea/TextArea';
import { Select } from './Select/Select';
import { Slider } from './Slider/Slider';
import { RangeInput } from './RangeInput/RangeInput';

// Import Media components
import { Image } from './Image/Image';
import { Video } from './Video/Video';
import { Audio } from './Audio/Audio';
// Reusing the Icon component for Media
// If Icon in Media is different, import it separately
// import { Icon as MediaIcon } from './Media/Icon/Icon';

// Import Visual components
import { Divider } from './Divider/Divider';
import { Spacer } from './Spacer/Spacer';
import { Tooltip } from './Tooltip/Tooltip';
import { Badge } from './Badge/Badge';
import { Tag } from './Tag/Tag';

// Import Feedback components
import { Loader } from './Loader/Loader';
import { Spinner } from './Spinner/Spinner';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { Alert } from './Alert/Alert';
import { Snackbar } from './Snackbar/Snackbar';

// Organize components under subcategories
const atoms = {
  Text: {
    Heading,
    Paragraph,
    Label,
    Caption,
  },
  Interactive: {
    Container,
    Button,
    Link,
    Icon,
    Checkbox,
    RadioButton,
    Toggle,
    TextInput,
    TextArea,
    Select,
    Slider,
    RangeInput,
  },
  Media: {
    Image,
    Video,
    Audio,
    Icon, // Reusing the Icon component
  },
  Visual: {
    Divider,
    Spacer,
    Tooltip,
    Badge,
    Tag,
  },
  Feedback: {
    Loader,
    Spinner,
    ProgressBar,
    Alert,
    Snackbar,
  },
};

export default atoms;