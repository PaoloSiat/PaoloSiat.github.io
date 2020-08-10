// Defines data needed for site information.
interface ISiteInformation {
  headerName: string;
  headerJobTitle: string;
  copyrightMessage: string;
  contactFullName: string;
  contactJobTitle: string;
  contactPhone: string;
  contactEmail: string;
  socialInstagramLink: string;
  socialYoutubeLink: string;
  aboutMeTextFile: string;
  workExperienceFile: string;
}

// Defines data needed for site structure.
interface ISiteStructure {
  aboutMeTitle: string;
  portfolioTitle: string;
  workExperienceTitle: string;
  contactInformationTitle: string;
  contactFormTitle: string;
  navigationAboutMeTitle: string;
  navigationPortfolioTitle: string;
  navigationWorkExperienceTitle: string;
  navigationContactTitle: string;
  backToTopText: string;
  contactFormSubmitText: string;
}

// What defines a category as being a category.
interface IPortfolioCategory {
  name: string;
  title: string;
  visible: boolean;
  images: string[];
}

// Defines the data used by the site.
interface ISiteData {
  siteInformation: ISiteInformation;
  siteStructure: ISiteStructure;
  portfolioCategories: IPortfolioCategory[];
}
