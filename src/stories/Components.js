const components = {
    "Atomic": {
      "Text": [
        { name: "Heading", paths: { css: "styles/Atomic/Heading/Heading.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Heading/Heading.jsx", stories: "src/stories/Atomic/Heading/Heading.stories.jsx" }},
        { name: "Paragraph", paths: { css: "styles/Atomic/Paragraph/Paragraph.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Paragraph/Paragraph.jsx", stories: "src/stories/Atomic/Paragraph/Paragraph.stories.jsx" }},
        { name: "Label", paths: { css: "styles/Atomic/Label/Label.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Label/Label.jsx", stories: "src/stories/Atomic/Label/Label.stories.jsx" }},
        { name: "Caption", paths: { css: "styles/Atomic/Caption/Caption.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Caption/Caption.jsx", stories: "src/stories/Atomic/Caption/Caption.stories.jsx" }},
      ],
      "Interactive": [
        { name: "Button", paths: { css: "styles/Atomic/Button/Button.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Button/Button.jsx", stories: "src/stories/Atomic/Button/Button.stories.jsx" }},
        { name: "Link", paths: { css: "styles/Atomic/Link/Link.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Link/Link.jsx", stories: "src/stories/Atomic/Link/Link.stories.jsx" }},
        { name: "Icon", paths: { css: "styles/Atomic/Icon/Icon.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Icon/Icon.jsx", stories: "src/stories/Atomic/Icon/Icon.stories.jsx" }},
        { name: "Checkbox", paths: { css: "styles/Atomic/Checkbox/Checkbox.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Checkbox/Checkbox.jsx", stories: "src/stories/Atomic/Checkbox/Checkbox.stories.jsx" }},
        { name: "RadioButton", paths: { css: "styles/Atomic/RadioButton/RadioButton.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/RadioButton/RadioButton.jsx", stories: "src/stories/Atomic/RadioButton/RadioButton.stories.jsx" }},
        { name: "Toggle", paths: { css: "styles/Atomic/Toggle/Toggle.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Toggle/Toggle.jsx", stories: "src/stories/Atomic/Toggle/Toggle.stories.jsx" }},
        { name: "TextInput", paths: { css: "styles/Atomic/TextInput/TextInput.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/TextInput/TextInput.jsx", stories: "src/stories/Atomic/TextInput/TextInput.stories.jsx" }},
        { name: "TextArea", paths: { css: "styles/Atomic/TextArea/TextArea.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/TextArea/TextArea.jsx", stories: "src/stories/Atomic/TextArea/TextArea.stories.jsx" }},
        { name: "Select", paths: { css: "styles/Atomic/Select/Select.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Select/Select.jsx", stories: "src/stories/Atomic/Select/Select.stories.jsx" }},
        { name: "Slider", paths: { css: "styles/Atomic/Slider/Slider.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Slider/Slider.jsx", stories: "src/stories/Atomic/Slider/Slider.stories.jsx" }},
        { name: "RangeInput", paths: { css: "styles/Atomic/RangeInput/RangeInput.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/RangeInput/RangeInput.jsx", stories: "src/stories/Atomic/RangeInput/RangeInput.stories.jsx" }},
      ],
      "Media": [
        { name: "Image", paths: { css: "styles/Atomic/Image/Image.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Image/Image.jsx", stories: "src/stories/Atomic/Image/Image.stories.jsx" }},
        { name: "Video", paths: { css: "styles/Atomic/Video/Video.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Video/Video.jsx", stories: "src/stories/Atomic/Video/Video.stories.jsx" }},
        { name: "Audio", paths: { css: "styles/Atomic/Audio/Audio.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Audio/Audio.jsx", stories: "src/stories/Atomic/Audio/Audio.stories.jsx" }},
        { name: "Icon", paths: { css: "styles/Atomic/Icon/Icon.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Icon/Icon.jsx", stories: "src/stories/Atomic/Icon/Icon.stories.jsx" }},
      ],
      "Visual": [
        { name: "Divider", paths: { css: "styles/Atomic/Divider/Divider.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Divider/Divider.jsx", stories: "src/stories/Atomic/Divider/Divider.stories.jsx" }},
        { name: "Spacer", paths: { css: "styles/Atomic/Spacer/Spacer.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Spacer/Spacer.jsx", stories: "src/stories/Atomic/Spacer/Spacer.stories.jsx" }},
        { name: "Tooltip", paths: { css: "styles/Atomic/Tooltip/Tooltip.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Tooltip/Tooltip.jsx", stories: "src/stories/Atomic/Tooltip/Tooltip.stories.jsx" }},
        { name: "Badge", paths: { css: "styles/Atomic/Badge/Badge.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Badge/Badge.jsx", stories: "src/stories/Atomic/Badge/Badge.stories.jsx" }},
        { name: "Tag", paths: { css: "styles/Atomic/Tag/Tag.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Tag/Tag.jsx", stories: "src/stories/Atomic/Tag/Tag.stories.jsx" }},
      ],
      "Feedback": [
        { name: "Loader", paths: { css: "styles/Atomic/Loader/Loader.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Loader/Loader.jsx", stories: "src/stories/Atomic/Loader/Loader.stories.jsx" }},
        { name: "Spinner", paths: { css: "styles/Atomic/Spinner/Spinner.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Spinner/Spinner.jsx", stories: "src/stories/Atomic/Spinner/Spinner.stories.jsx" }},
        { name: "ProgressBar", paths: { css: "styles/Atomic/ProgressBar/ProgressBar.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/ProgressBar/ProgressBar.jsx", stories: "src/stories/Atomic/ProgressBar/ProgressBar.stories.jsx" }},
        { name: "Alert", paths: { css: "styles/Atomic/Alert/Alert.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Alert/Alert.jsx", stories: "src/stories/Atomic/Alert/Alert.stories.jsx" }},
        { name: "Snackbar", paths: { css: "styles/Atomic/Snackbar/Snackbar.css", globalCss: "styles/global.css", jsx: "src/components/Atomic/Snackbar/Snackbar.jsx", stories: "src/stories/Atomic/Snackbar/Snackbar.stories.jsx" }},
      ]
    },
    "Molecules": {
      "FormElements": [
        { name: "InputGroup", paths: { css: "styles/Molecules/InputGroup/InputGroup.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/InputGroup/InputGroup.jsx", stories: "src/stories/Molecules/InputGroup/InputGroup.stories.jsx" }},
        { name: "InputWithLabel", paths: { css: "styles/Molecules/InputWithLabel/InputWithLabel.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/InputWithLabel/InputWithLabel.jsx", stories: "src/stories/Molecules/InputWithLabel/InputWithLabel.stories.jsx" }},
        { name: "SearchBar", paths: { css: "styles/Molecules/SearchBar/SearchBar.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/SearchBar/SearchBar.jsx", stories: "src/stories/Molecules/SearchBar/SearchBar.stories.jsx" }},
        { name: "FileUpload", paths: { css: "styles/Molecules/FileUpload/FileUpload.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/FileUpload/FileUpload.jsx", stories: "src/stories/Molecules/FileUpload/FileUpload.stories.jsx" }},
        { name: "FormField", paths: { css: "styles/Molecules/FormField/FormField.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/FormField/FormField.jsx", stories: "src/stories/Molecules/FormField/FormField.stories.jsx" }},
      ],
      "ButtonsWithIcons": [
        { name: "IconButton", paths: { css: "styles/Molecules/IconButton/IconButton.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/IconButton/IconButton.jsx", stories: "src/stories/Molecules/IconButton/IconButton.stories.jsx" }},
        { name: "ButtonGroup", paths: { css: "styles/Molecules/ButtonGroup/ButtonGroup.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/ButtonGroup/ButtonGroup.jsx", stories: "src/stories/Molecules/ButtonGroup/ButtonGroup.stories.jsx" }},
      ],
      "MediaMolecules": [
        { name: "ImageWithCaption", paths: { css: "styles/Molecules/ImageWithCaption/ImageWithCaption.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/ImageWithCaption/ImageWithCaption.jsx", stories: "src/stories/Molecules/ImageWithCaption/ImageWithCaption.stories.jsx" }},
        { name: "VideoWithDescription", paths: { css: "styles/Molecules/VideoWithDescription/VideoWithDescription.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/VideoWithDescription/VideoWithDescription.jsx", stories: "src/stories/Molecules/VideoWithDescription/VideoWithDescription.stories.jsx" }},
        { name: "AvatarWithName", paths: { css: "styles/Molecules/AvatarWithName/AvatarWithName.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/AvatarWithName/AvatarWithName.jsx", stories: "src/stories/Molecules/AvatarWithName/AvatarWithName.stories.jsx" }},
        { name: "AudioPlayer", paths: { css: "styles/Molecules/AudioPlayer/AudioPlayer.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/AudioPlayer/AudioPlayer.jsx", stories: "src/stories/Molecules/AudioPlayer/AudioPlayer.stories.jsx" }},
      ],
      "FeedbackMolecules": [
        { name: "Notification", paths: { css: "styles/Molecules/Notification/Notification.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/Notification/Notification.jsx", stories: "src/stories/Molecules/Notification/Notification.stories.jsx" }},
        { name: "Modal", paths: { css: "styles/Molecules/Modal/Modal.css", globalCss: "styles/global.css", jsx: "src/components/Molecules/Modal/Modal.jsx", stories: "src/stories/Molecules/Modal/Modal.stories.jsx" }},
      ]
    },
    "Organisms": {
      "Forms": [
        { name: "SignInForm", paths: { css: "styles/Organisms/SignInForm/SignInForm.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/SignInForm/SignInForm.jsx", stories: "src/stories/Organisms/SignInForm/SignInForm.stories.jsx" }},
        { name: "RegistrationForm", paths: { css: "styles/Organisms/RegistrationForm/RegistrationForm.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/RegistrationForm/RegistrationForm.jsx", stories: "src/stories/Organisms/RegistrationForm/RegistrationForm.stories.jsx" }},
        { name: "ContactForm", paths: { css: "styles/Organisms/ContactForm/ContactForm.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/ContactForm/ContactForm.jsx", stories: "src/stories/Organisms/ContactForm/ContactForm.stories.jsx" }},
      ],
      "ContentDisplay": [
        { name: "Card", paths: { css: "styles/Organisms/Card/Card.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/Card/Card.jsx", stories: "src/stories/Organisms/Card/Card.stories.jsx" }},
        { name: "MediaCard", paths: { css: "styles/Organisms/MediaCard/MediaCard.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/MediaCard/MediaCard.jsx", stories: "src/stories/Organisms/MediaCard/MediaCard.stories.jsx" }},
        { name: "List", paths: { css: "styles/Organisms/List/List.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/List/List.jsx", stories: "src/stories/Organisms/List/List.stories.jsx" }},
        { name: "Accordion", paths: { css: "styles/Organisms/Accordion/Accordion.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/Accordion/Accordion.jsx", stories: "src/stories/Organisms/Accordion/Accordion.stories.jsx" }},
      ],
      "Navigation": [
        { name: "Navbar", paths: { css: "styles/Organisms/Navbar/Navbar.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/Navbar/Navbar.jsx", stories: "src/stories/Organisms/Navbar/Navbar.stories.jsx" }},
        { name: "Sidebar", paths: { css: "styles/Organisms/Sidebar/Sidebar.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/Sidebar/Sidebar.jsx", stories: "src/stories/Organisms/Sidebar/Sidebar.stories.jsx" }},
        { name: "Breadcrumbs", paths: { css: "styles/Organisms/Breadcrumbs/Breadcrumbs.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/Breadcrumbs/Breadcrumbs.jsx", stories: "src/stories/Organisms/Breadcrumbs/Breadcrumbs.stories.jsx" }},
      ],
      "MediaCollections": [
        { name: "ImageGallery", paths: { css: "styles/Organisms/ImageGallery/ImageGallery.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/ImageGallery/ImageGallery.jsx", stories: "src/stories/Organisms/ImageGallery/ImageGallery.stories.jsx" }},
        { name: "VideoPlaylist", paths: { css: "styles/Organisms/VideoPlaylist/VideoPlaylist.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/VideoPlaylist/VideoPlaylist.jsx", stories: "src/stories/Organisms/VideoPlaylist/VideoPlaylist.stories.jsx" }},
        { name: "Carousel", paths: { css: "styles/Organisms/Carousel/Carousel.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/Carousel/Carousel.jsx", stories: "src/stories/Organisms/Carousel/Carousel.stories.jsx" }},
      ],
      "Tables": [
        { name: "DataTable", paths: { css: "styles/Organisms/DataTable/DataTable.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/DataTable/DataTable.jsx", stories: "src/stories/Organisms/DataTable/DataTable.stories.jsx" }},
        { name: "PricingTable", paths: { css: "styles/Organisms/PricingTable/PricingTable.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/PricingTable/PricingTable.jsx", stories: "src/stories/Organisms/PricingTable/PricingTable.stories.jsx" }},
        { name: "ComparisonTable", paths: { css: "styles/Organisms/ComparisonTable/ComparisonTable.css", globalCss: "styles/global.css", jsx: "src/components/Organisms/ComparisonTable/ComparisonTable.jsx", stories: "src/stories/Organisms/ComparisonTable/ComparisonTable.stories.jsx" }},
      ]
    },
    "Layout": {
      "Grid": [
        { name: "Grid", paths: { css: "styles/Layout/Grid/Grid.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Grid/Grid.jsx", stories: "src/stories/Layout/Grid/Grid.stories.jsx" }},
      ],
      "Section": [
        { name: "Section", paths: { css: "styles/Layout/Section/Section.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Section/Section.jsx", stories: "src/stories/Layout/Section/Section.stories.jsx" }},
      ],
      "FlexboxLayout": [
        { name: "Flexbox", paths: { css: "styles/Layout/Flexbox/Flexbox.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Flexbox/Flexbox.jsx", stories: "src/stories/Layout/Flexbox/Flexbox.stories.jsx" }},
      ],
      "NavigationAndMenus": [
        { name: "Header", paths: { css: "styles/Layout/Header/Header.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Header/Header.jsx", stories: "src/stories/Layout/Header/Header.stories.jsx" }},
        { name: "Footer", paths: { css: "styles/Layout/Footer/Footer.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Footer/Footer.jsx", stories: "src/stories/Layout/Footer/Footer.stories.jsx" }},
        { name: "DropdownMenu", paths: { css: "styles/Layout/DropdownMenu/DropdownMenu.css", globalCss: "styles/global.css", jsx: "src/components/Layout/DropdownMenu/DropdownMenu.jsx", stories: "src/stories/Layout/DropdownMenu/DropdownMenu.stories.jsx" }},
        { name: "Pagination", paths: { css: "styles/Layout/Pagination/Pagination.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Pagination/Pagination.jsx", stories: "src/stories/Layout/Pagination/Pagination.stories.jsx" }},
      ],
      "ContentOrganization": [
        { name: "Sidebar", paths: { css: "styles/Layout/Sidebar/Sidebar.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Sidebar/Sidebar.jsx", stories: "src/stories/Layout/Sidebar/Sidebar.stories.jsx" }},
        { name: "Tabs", paths: { css: "styles/Layout/Tabs/Tabs.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Tabs/Tabs.jsx", stories: "src/stories/Layout/Tabs/Tabs.stories.jsx" }},
        { name: "Accordion", paths: { css: "styles/Layout/Accordion/Accordion.css", globalCss: "styles/global.css", jsx: "src/components/Layout/Accordion/Accordion.jsx", stories: "src/stories/Layout/Accordion/Accordion.stories.jsx" }},
      ],
      "HeroSections": [
        { name: "HeroBanner", paths: { css: "styles/Layout/HeroBanner/HeroBanner.css", globalCss: "styles/global.css", jsx: "src/components/Layout/HeroBanner/HeroBanner.jsx", stories: "src/stories/Layout/HeroBanner/HeroBanner.stories.jsx" }},
        { name: "HeroImageVideo", paths: { css: "styles/Layout/HeroImageVideo/HeroImageVideo.css", globalCss: "styles/global.css", jsx: "src/components/Layout/HeroImageVideo/HeroImageVideo.jsx", stories: "src/stories/Layout/HeroImageVideo/HeroImageVideo.stories.jsx" }},
      ]
    },
    "Templates": {
        "LandingPages": [
          { name: "HeroSection", paths: { css: "styles/Templates/LandingPages/HeroSection.css", globalCss: "styles/global.css", jsx: "src/components/Templates/LandingPages/HeroSection.jsx", stories: "src/stories/Templates/LandingPages/HeroSection.stories.jsx" }},
          { name: "FeaturesList", paths: { css: "styles/Templates/LandingPages/FeaturesList.css", globalCss: "styles/global.css", jsx: "src/components/Templates/LandingPages/FeaturesList.jsx", stories: "src/stories/Templates/LandingPages/FeaturesList.stories.jsx" }},
          { name: "CallToAction", paths: { css: "styles/Templates/LandingPages/CallToAction.css", globalCss: "styles/global.css", jsx: "src/components/Templates/LandingPages/CallToAction.jsx", stories: "src/stories/Templates/LandingPages/CallToAction.stories.jsx" }},
          { name: "Testimonials", paths: { css: "styles/Templates/LandingPages/Testimonials.css", globalCss: "styles/global.css", jsx: "src/components/Templates/LandingPages/Testimonials.jsx", stories: "src/stories/Templates/LandingPages/Testimonials.stories.jsx" }},
        ],
        "DashboardLayouts": [
          { name: "AdminDashboard", paths: { css: "styles/Templates/DashboardLayouts/AdminDashboard.css", globalCss: "styles/global.css", jsx: "src/components/Templates/DashboardLayouts/AdminDashboard.jsx", stories: "src/stories/Templates/DashboardLayouts/AdminDashboard.stories.jsx" }},
          { name: "SidebarTopNav", paths: { css: "styles/Templates/DashboardLayouts/SidebarTopNav.css", globalCss: "styles/global.css", jsx: "src/components/Templates/DashboardLayouts/SidebarTopNav.jsx", stories: "src/stories/Templates/DashboardLayouts/SidebarTopNav.stories.jsx" }},
        ],
        "ECommercePages": [
          { name: "ProductPage", paths: { css: "styles/Templates/ECommercePages/ProductPage.css", globalCss: "styles/global.css", jsx: "src/components/Templates/ECommercePages/ProductPage.jsx", stories: "src/stories/Templates/ECommercePages/ProductPage.stories.jsx" }},
          { name: "ShoppingCart", paths: { css: "styles/Templates/ECommercePages/ShoppingCart.css", globalCss: "styles/global.css", jsx: "src/components/Templates/ECommercePages/ShoppingCart.jsx", stories: "src/stories/Templates/ECommercePages/ShoppingCart.stories.jsx" }},
        ],
        "AuthenticationPages": [
          { name: "SignInPage", paths: { css: "styles/Templates/AuthenticationPages/SignInPage.css", globalCss: "styles/global.css", jsx: "src/components/Templates/AuthenticationPages/SignInPage.jsx", stories: "src/stories/Templates/AuthenticationPages/SignInPage.stories.jsx" }},
          { name: "RegistrationPage", paths: { css: "styles/Templates/AuthenticationPages/RegistrationPage.css", globalCss: "styles/global.css", jsx: "src/components/Templates/AuthenticationPages/RegistrationPage.jsx", stories: "src/stories/Templates/AuthenticationPages/RegistrationPage.stories.jsx" }},
        ],
        "ContactUsPages": [
          { name: "FormSection", paths: { css: "styles/Templates/ContactUsPages/FormSection.css", globalCss: "styles/global.css", jsx: "src/components/Templates/ContactUsPages/FormSection.jsx", stories: "src/stories/Templates/ContactUsPages/FormSection.stories.jsx" }},
          { name: "LocationInfo", paths: { css: "styles/Templates/ContactUsPages/LocationInfo.css", globalCss: "styles/global.css", jsx: "src/components/Templates/ContactUsPages/LocationInfo.jsx", stories: "src/stories/Templates/ContactUsPages/LocationInfo.stories.jsx" }},
          { name: "SocialMediaLinks", paths: { css: "styles/Templates/ContactUsPages/SocialMediaLinks.css", globalCss: "styles/global.css", jsx: "src/components/Templates/ContactUsPages/SocialMediaLinks.jsx", stories: "src/stories/Templates/ContactUsPages/SocialMediaLinks.stories.jsx" }},
        ]
      },
      "Pages": {
        "HomePage": [
          { name: "HomePage", paths: { css: "styles/Pages/HomePage/HomePage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/HomePage/HomePage.jsx", stories: "src/stories/Pages/HomePage/HomePage.stories.jsx" }},
        ],
        "AboutUsPage": [
          { name: "AboutUsPage", paths: { css: "styles/Pages/AboutUsPage/AboutUsPage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/AboutUsPage/AboutUsPage.jsx", stories: "src/stories/Pages/AboutUsPage/AboutUsPage.stories.jsx" }},
        ],
        "ContactUsPage": [
          { name: "ContactUsPage", paths: { css: "styles/Pages/ContactUsPage/ContactUsPage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/ContactUsPage/ContactUsPage.jsx", stories: "src/stories/Pages/ContactUsPage/ContactUsPage.stories.jsx" }},
        ],
        "UserProfilePage": [
          { name: "UserProfilePage", paths: { css: "styles/Pages/UserProfilePage/UserProfilePage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/UserProfilePage/UserProfilePage.jsx", stories: "src/stories/Pages/UserProfilePage/UserProfilePage.stories.jsx" }},
        ],
        "ProductDetailPage": [
          { name: "ProductDetailPage", paths: { css: "styles/Pages/ProductDetailPage/ProductDetailPage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/ProductDetailPage/ProductDetailPage.jsx", stories: "src/stories/Pages/ProductDetailPage/ProductDetailPage.stories.jsx" }},
        ],
        "CheckoutPage": [
          { name: "CheckoutPage", paths: { css: "styles/Pages/CheckoutPage/CheckoutPage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/CheckoutPage/CheckoutPage.jsx", stories: "src/stories/Pages/CheckoutPage/CheckoutPage.stories.jsx" }},
        ],
        "BlogPage": [
          { name: "BlogPage", paths: { css: "styles/Pages/BlogPage/BlogPage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/BlogPage/BlogPage.jsx", stories: "src/stories/Pages/BlogPage/BlogPage.stories.jsx" }},
        ],
        "AdminDashboard": [
          { name: "AdminDashboard", paths: { css: "styles/Pages/AdminDashboard/AdminDashboard.css", globalCss: "styles/global.css", jsx: "src/components/Pages/AdminDashboard/AdminDashboard.jsx", stories: "src/stories/Pages/AdminDashboard/AdminDashboard.stories.jsx" }},
        ],
        "SearchResultsPage": [
          { name: "SearchResultsPage", paths: { css: "styles/Pages/SearchResultsPage/SearchResultsPage.css", globalCss: "styles/global.css", jsx: "src/components/Pages/SearchResultsPage/SearchResultsPage.jsx", stories: "src/stories/Pages/SearchResultsPage/SearchResultsPage.stories.jsx" }},
        ]
      },
      "Miscellaneous": {
        "TooltipsPopovers": [
          { name: "Tooltip", paths: { css: "styles/Miscellaneous/Tooltip/Tooltip.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/Tooltip/Tooltip.jsx", stories: "src/stories/Miscellaneous/Tooltip/Tooltip.stories.jsx" }},
          { name: "Popover", paths: { css: "styles/Miscellaneous/Popover/Popover.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/Popover/Popover.jsx", stories: "src/stories/Miscellaneous/Popover/Popover.stories.jsx" }},
        ],
        "Overlays": [
          { name: "ModalWindow", paths: { css: "styles/Miscellaneous/ModalWindow/ModalWindow.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/ModalWindow/ModalWindow.jsx", stories: "src/stories/Miscellaneous/ModalWindow/ModalWindow.stories.jsx" }},
          { name: "Drawer", paths: { css: "styles/Miscellaneous/Drawer/Drawer.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/Drawer/Drawer.jsx", stories: "src/stories/Miscellaneous/Drawer/Drawer.stories.jsx" }},
        ],
        "SearchComponents": [
          { name: "SearchBox", paths: { css: "styles/Miscellaneous/SearchBox/SearchBox.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/SearchBox/SearchBox.jsx", stories: "src/stories/Miscellaneous/SearchBox/SearchBox.stories.jsx" }},
          { name: "Autocomplete", paths: { css: "styles/Miscellaneous/Autocomplete/Autocomplete.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/Autocomplete/Autocomplete.jsx", stories: "src/stories/Miscellaneous/Autocomplete/Autocomplete.stories.jsx" }},
        ],
        "MediaAndContentControls": [
          { name: "AudioControls", paths: { css: "styles/Miscellaneous/MediaAndContentControls/AudioControls.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/MediaAndContentControls/AudioControls.jsx", stories: "src/stories/Miscellaneous/MediaAndContentControls/AudioControls.stories.jsx" }},
          { name: "VideoControls", paths: { css: "styles/Miscellaneous/MediaAndContentControls/VideoControls.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/MediaAndContentControls/VideoControls.jsx", stories: "src/stories/Miscellaneous/MediaAndContentControls/VideoControls.stories.jsx" }},
          { name: "Filters", paths: { css: "styles/Miscellaneous/MediaAndContentControls/Filters.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/MediaAndContentControls/Filters.jsx", stories: "src/stories/Miscellaneous/MediaAndContentControls/Filters.stories.jsx" }},
        ],
        "InteractiveMaps": [
          { name: "Map", paths: { css: "styles/Miscellaneous/InteractiveMaps/Map.css", globalCss: "styles/global.css", jsx: "src/components/Miscellaneous/InteractiveMaps/Map.jsx", stories: "src/stories/Miscellaneous/InteractiveMaps/Map.stories.jsx" }},
        ]
      }
    };