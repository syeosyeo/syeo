import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Footer from './Footer';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  spoqaHanSans: {
    fontFamily: "'Spoqa Han Sans', 'spoqa Han Sans JP', 'Sans-serif'",
    fontSize: "18pt",
  },
  nunitoSansRegular: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 400,
  },
  nunitoSansBold: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 700,
    fontSize: 24,
  },
  commonPadding: {
    paddingLeft: theme.spacing.unit * 20,
    paddingRight: theme.spacing.unit * 20,
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]:{
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
    },
  },
  paddingPaper: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit * 1,
  },
  marginBottom: {
    marginBottom : theme.spacing.unit * 2,
  }
});

class PrivacyPolicy extends React.Component {
  constructor(props){
    super(props);
    this.state={
      language: this.props.language ? this.props.language : "English",
    };
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }
  handleLanguageChange(newLanguage) {
    this.setState({language: newLanguage})
  }

  render() {
    const { classes } = this.props;
    const { language } = this.state;

    return(
      <div>
        <Header language={language} handleLanguageChange={this.handleLanguageChange} />
        
        <main>
          <Grid container justify='center' className={classes.commonPadding}>
            <Grid item xs={12} className={classes.marginBottom}>
              <Typography className={classes.nunitoSansBold}>
                Privacy Policy
            </Typography>
            </Grid>
            <Grid item xs={12} sm={10} >
              <Paper className={classNames(classes.nunitoSansRegular, classes.paddingPaper)}>
              <small>
                  <h1>We Care About Your Privacy</h1>
                        <p>It is DAS.Finance’s policy to respect your privacy regarding any personal data we may collect while operating our services on DAS.Finance, available at <a href="http://das.finance/">das.finance</a>. Accordingly, we have developed this privacy policy (hereinafter, referred to as the “Privacy Policy”) in order for you to understand how we collect and process (i.e., use, store, share, disclose and otherwise make use of) your personal data. This Privacy Policy will also cover your rights in relation to your personal data.</p>

                        <p>This Privacy Policy does not cover any personal data that we may receive about you through sources other than DAS.Finance.</p>

                        <p>By continuing to use DAS.Finance, you acknowledge that you have had the chance to review and consider this Privacy Policy, and you acknowledge that you agree to it. This means that you also consent to the use of your personal data and the methods of disclosure as described in this Privacy Policy. If you do not understand the Privacy Policy or do not agree to one or more provisions of this Privacy Policy, please immediately cease your use of DAS.Finance.</p>

                        <p>This Agreement specifically incorporates by reference the entirety of our <a href="http://das.finance/terms_of_service">Terms of Service</a>.</p>

                        <h2>Definitions</h2>

                        <p>For the purposes of this Privacy Policy:</p>
                        <ol type="a">
                            <li>“EFFECTIVE DATE” means the date this Privacy Policy comes into force and effect.</li>
                            <li>“PERSONAL DATA” means any information relating to a natural person who can be identified, directly or indirectly, by using such information. </li>
                            <li>“SERVICES” means any services that are made available by the Company for use or sale through DAS.Finance.</li>
                            <li>“USER”, “YOU”, and “YOUR” means the user of DAS.Finance that agrees to this Privacy Policy and continues using DAS.Finance. You may also be referred to with pronouns such as “your” and “yours”, when second-person pronouns are required.</li>
                            <li>“PARTIES” means the parties to this Privacy Policy, i.e., you and the Company. Hereinafter, the parties will individually be referred to as “Party” and collectively as “Parties.”</li>
                        </ol>

                        <h2>How We Collect Information and What Information We Collect</h2>

                        <p>Through your use of DAS.Finance, you will be subject to different types of personal data collected and different manners of collection. We will collect and process your personal data in a lawful, fair, and transparent manner and, where appropriate, with your knowledge or prior explicit consent. Personal data will be relevant to the purposes for which they are to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</p>

                        <h2>Types of Personal Data</h2>

                        <p>We comply with data minimization principles. We collect and process only the minimal amount of personal data that is necessary for performing the operations requested by you. We do not attempt to collect any personal data from you that are not strictly necessary for performing the requested operations. The following types of personal data will be collected by the Company through DAS.Finance:</p>

                        <ol>
                            <li>REGISTRATION: You, as a user of DAS.Finance, may be asked to register an account to use DAS.Finance or access any of the services thereon. During the process of your registration, you will be asked to provide your email address, a password, country, net worth, name, etc that you would like to disclose. We use these personal data to provide the services to you and ensure the security of DAS.Finance.</li>

                            <li>BILLING: If you elect to use any of our paid services, you will be asked to provide billing information, such as, but not limited to Your credit card number and billing address. This personal data will be used specifically for providing you with the services you have purchased. The payment and billing information may be stored for the time period as required by applicable law for lawful purposes (e.g., accountancy records).</li>

                            <li>CRYPTO AND FINANCIAL INFORMATION: Depending on how you choose to interact with the DAS.Finance services, you may be asked to provide your general portfolio information, wallet address, Investment propensity data, and other information that will assist us in providing the services to you.</li>

                            <li>USE: Through your use of DAS.Finance, you may be asked questions about how to improve DAS.Finance or you may, at some point, communicate with representatives of DAS.Finance. We will receive your email address, as well as the contents of your communications, answers to questions and any other form of contact between you and DAS.Finance. We will use personal data contained in such communications only for the purposes of providing you with the requested information and for improving the services.</li>

                            <li>AUTOMATIC COLLECTION: We may collect information from you through automatic tracking systems on your device or through the DAS.Finance application programming interface, or API, or other web and mobile analysis software. We may also receive certain usage data, such as your IP address and referral source. We use this information for Our legitimate business interests, including analyzing usage of DAS.Finance.</li>

                            <li>COMBINED OR AGGREGATED INFORMATION: We may combine or aggregate some of your personal data in order to better serve you and to better enhance and update DAS.Finance for your and other consumers’ use.</li>
                        </ol>

                        <h2>Non-Personal Data</h2>

                        <p>We may collect non-personal data, such as browser types, operating systems, and the URL addresses of websites clicked to and from DAS.Finance, <a href="http://das.finance/terms_of_service">including referral links</a> we may post on DAS.Finance in order to analyze what kind of users visit DAS.Finance, how they find it, how long they stay, from which other websites they come to DAS.Finance, what pages they look at, and to which other websites they go from DAS.Finance. In case your non-personal data are aggregated with certain elements of your personal data in the way that we may become able to identify you, such non-personal data will be treated as personal data.</p>

                        <h2>How Information Is Used</h2>

                        <p>We respect data protection principles and process personal data only for specified, explicit and legitimate purposes for which such personal data were provided. We primarily use your personal data to enable your use of DAS.Finance and supply the services requested by you. We may also use your personal data for the following purposes:</p>
                        <ol>
                            <li>Asking you about your experience with us;</li>
                            <li>Communicating with you about your user account with us;</li>
                            <li>Analyzing our aggregate user data;</li>
                            <li>Enforcing our Terms of Use;</li>
                            <li>Providing customer services to you;</li>
                            <li>Advising you about updates to DAS.Finance or related items; or</li>
                            <li>Providing you with information about services that are similar to the services used by you.</li>
                        </ol>

                        <p>We will seek your prior express consent for using your personal data for any purposes that are not indicated in this Privacy Policy.</p>

                        <h2>Newsletters and Marketing Communications</h2>

                        <p>From time to time, we may send you informational communications related to DAS.Finance, such as announcements about updates to DAS.Finance. you may also receive information from us that is specifically about your use of DAS.Finance or about your account with us, including information about security breaches or other privacy-related matters. Please note that such communication does not fall within the scope of direct marketing communication.</p>

                        <p>After we obtain your explicit prior consent, we may use your personal data for direct marketing purposes, such as:</p>
                        <ol>
                            <li>Sending you a newsletter;</li>
                            <li>Offering you new products, services, mobile applications, and/or recommendations;</li>
                            <li>Profiling; and</li>
                            <li>Delivering you targeted information regarding promotions related to DAS.Finance.</li>
                        </ol>

                        <p>If you decide at any time that you no longer wish to receive communications from us, please follow the “unsubscribe” instructions provided in the communications or contact us at <a href="mailto:contact@das.finance">contact@das.finance</a>.</p>

                        <h2>Your Consent</h2>

                        <p>By using DAS.Finance, you are consenting to Our processing of your personal data as set forth in this Privacy Policy. The term “processing” includes collecting, storing, deleting, using, and disclosing personal data.</p>

                        <p>Please note that we do not collect any sensitive data about you (e.g., your health information, opinions about your religious and political beliefs, racial origins and memberships of a professional or trade associations). Should we intend to process any sensitive data collected from you, we will seek your explicit consent in advance.</p>

                        <h2>How Information Is Stored And Kept Secure</h2>

                        <h4>Protection of Personal Data</h4>
                        <p>We protect your personal data by using reasonable security safeguards against loss or theft, unauthorized access, disclosure, copying, use, or modification. Your personal data are contained behind secured networks and are only accessible by a limited number of persons who have special access rights to such systems and are required to keep the personal data confidential. We implement a variety of security measures, such as encryption and pseudonymisation, when users enter, submit, or access their personal data to maintain the safety of your personal data. Please note, however, that no system involving the transmission of information via the Internet, or the electronic storage of data, is completely secure. However, we take the protection and storage of your personal data very seriously and we therefore take all reasonable steps to ensure the ongoing confidentiality, integrity, and availability of your personal data. Nevertheless, we are not liable for any loss, theft, unauthorized access, disclosure, copying, use, or modification of your personal data that occurs outside our reasonable control.</p>

                        <h4>Breach notification</h4>
                        <p>Should a personal data breach occur, we will inform the relevant authorities without undue delay and immediately take reasonable measures to mitigate the breach. We will notify you about such a breach via email as soon as possible but no later than within seven business days.</p>

                        <h4>Retention period</h4>
                        <p>Your personal data will be kept for as long as it is necessary to provide you with the requested services. When your personal data are no longer necessary to deliver the requested services, we will delete your personal data immediately, unless we are obliged by law to retain such personal data for a specific period of time.</p>

                        <h2>Cookies</h2>

                        <p>DAS.Finance uses cookies. Cookies are small files stored on your computer or mobile device which collect information about your browsing behavior. These cookies do not access information which is stored on your computer.</p>

                        <p>There are two types of cookies, namely, persistent cookies (i.e., cookies that remain valid until their expiration date, unless deleted by the user before that date) and session cookies (i.e., cookies that are stored on a web browser and remain valid until the moment when the browser is closed). We use both persistent cookies and session cookies.</p>

                        <p>We use cookies to help us remember information about your account. For example, cookies are used to help us understand your preferences based on previous or current activity on DAS.Finance, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about DAS.Finance traffic and interaction so that we can offer better experiences and tools in the future. Other reasons we use cookies include (but are not limited to):</p>
                        <ol>
                            <li>Understanding and saving user’s preferences for future visits;</li>
                            <li>Keeping track of advertisements; and</li>
                            <li>Compiling aggregate data about traffic and interactions in order to offer better experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.</li>
                        </ol>

                        <p>Most Internet browsers accept cookies automatically, although you are able to change your browser settings to control cookies, including whether or not you accept them, and how to remove them. You may also be able to set your browser to advise you if you receive a cookie, or to block or delete cookies.</p>

                        <p>If you would like to set your browser to refuse cookies, check your browser’s help information or visit <a href="http://www.whatarecookies.com" target="_blank">http://www.whatarecookies.com</a> for further information.</p>

                        <p>We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place. Users can also choose to visit DAS.Finance anonymously, but you may not be permitted to access any of the services.</p>

                        <h2>How Information May Be Shared Or Disclosed</h2>

                        <p>We may disclose your information if we believe that it is reasonable to do so in certain cases, in Our sole and exclusive discretion. Such a disclosure or transfer is limited to the situations when the personal data are required for the purposes of (1) provision of the services, (2) pursuing our legitimate interests, (3) law enforcement purposes, or (4) if you provide your prior explicit consent. Please note that some third parties may be located outside of the jurisdiction in which you reside.</p>

                        <p>Such reasonable disclosure cases may include, but are not limited to:</p>
                        <ul>
                            <li>Satisfying any local, state, or Federal laws or regulations;</li>
                            <li>Responding to requests, such as discovery, criminal, civil, or administrative process, subpoenas, court orders, or writs from law enforcement or other governmental or legal bodies;</li>
                            <li>Bringing legal action against a user who has violated the law or violated our Terms of Services;</li>
                            <li>As may be necessary for the operation of DAS.Finance;</li>
                            <li>Generally cooperating with any lawful investigation about our users; or</li>
                            <li>If we suspect any fraudulent activity on DAS.Finance or if we have noticed any activity which may violate our Terms or other applicable rules.</li>
                        </ul>

                        <h2>Third-Parties</h2>

                        <p>We may utilize third party service providers, from time to time or all the time, to help us with DAS.Finance and to help to serve you. Such third-party service providers may include:</p>
                        <ol>
                            <li>Data storage companies (e.g., Amazon Web Services and other cloud storage providers);</li>
                            <li>User information logistics providers (e.g., Google Analytics or other analytics companies which help us track general user information and usage);</li>
                            <li>Web hosting companies;</li>
                            <li>Newsletter providers; and</li>
                            <li>Other parties who assist us in operating DAS.Finance and conducting our business.</li>
                        </ol>

                        <p>The third party service providers indicated above may have access to your personal data as part of their partnerships with us only if they agree to assure an adequate level of protection of personal data that is consistent with this Privacy Policy.</p>

                        <p>We do not sell, trade, or transfer your personal data to third parties not indicated in this Privacy Policy, unless we obtain your prior explicit consent.</p>

                        <p>Please note that some non-personal data may be provided to third parties for marketing, advertising, or other uses. We also allow third-party behavioral tracking which may include non-personal data.</p>

                        <p>We are not responsible for actions of third parties that are not mentioned in this Privacy Policy and with whom you share your personal data, and we have no authority to manage or control third party solicitations.</p>

                        <h2>Transmittals From Us</h2>

                        <p>From time to time, we may send you informational communications related to DAS.Finance, such as announcements or other information. You may also receive information from us that is specifically about your use of DAS.Finance or about your account with us, including information about security breaches or other privacy-related matters.</p>

                        <p>By providing any personal information to us, or by using DAS.Finance in any manner, you have created a commercial relationship with us. As such, you agree that any email sent from us or third-party affiliates, even unsolicited email, shall specifically not be considered SPAM, as that term is legally defined.</p>

                        <h2>Third Party Links</h2>

                        <p>Through your use of DAS.Finance, you may find links out to other websites or mobile applications. This Privacy Policy does not and will not apply to any of those linked websites or applications. We are not responsible in any manner for the content or privacy and security practices and policies of any third parties, including other websites, services or applications that may be linked to or from DAS.Finance.</p>

                        <p>Before visiting and providing any information to any such third-party websites and applications, you should familiarize yourself with the applicable privacy practices and take reasonable steps necessary to protect your personal data.</p>

                        <h2>Your Rights</h2>

                        <p>You may choose to forego the provision of certain personal data to us, but you may then be prohibited from using DAS.Finance or any of the services thereon. We collect the information we do to maintain the integrity of DAS.Finance and to help to ensure the information security of the Parties. If you do not agree to any of the sections or subsections within this Privacy Policy, you must cease your use of DAS.Finance entirely.</p>

                        <h2>Accessing, Correcting, and Erasing Personal Data</h2>

                        <p>We take reasonable steps to ensure that the personal data collected and processed by us is accurate, complete, and up-to-date. Thus, we ask you to keep your personal data as current as possible and update your personal data through DAS.Finance if necessary.</p>

                        <p>You may at any time review or change the personal data in your user account or terminate your user account by logging into it through DAS.Finance and updating your personal data. Upon your request to terminate your user account, we will deactivate or delete your account and information from our active databases.</p>

                        <p>If you would like to access, modify, or delete your personal data that are processed through DAS.Finance, please send us an email to <a href="mailto:contact@das.finance">contact@das.finance</a>. We will answer your request within a reasonable timeframe.</p>

                        <h2>Children</h2>

                        <p>We do not market to any individual under the age of 18 years old. Individuals under 18 years of age may <i>not</i> create an account on DAS.Finance. However, we cannot distinguish the age of people accessing DAS.Finance. If a person under 18 has provided us with personal data without obtaining parental or guardian consent in advance, the parent or guardian may contact us requesting us to destroy or de-identify the personal data. Our contact details are specified in the “Contact Us” section of this Privacy Policy.</p>

                        <h2>Updates, Modifications, or Revisions</h2>

                        <p>We are committed to conducting our business in accordance with the principles stated in this Privacy Policy in order to ensure that the confidentiality of your personal data is protected and maintained. However, we may change this Privacy Policy from time to time at our sole and exclusive discretion.</p>

                        <p>Unless we specifically obtain your consent, any changes to the Privacy Policy will apply to the personal data collected on or after the date of the last amendment that is indicated at the end of the Privacy Policy.</p>

                        <p>It is your responsibility to periodically check this Privacy Policy for any such modification, revision or amendment. Any changes made are assumed to have been accepted by your continued use of DAS.Finance.</p>

                        <p>For significant changes in the Privacy Policy, or where required by the applicable law, we may seek your explicit consent to the changes stated in the Privacy Policy.</p>

                        <h2>Complaints about Handling of Personal Data</h2>

                        <p>You have the right to submit a complaint to us about the way in which your personal data have been handled by using the contact details indicated in the “Contact Us” section of this Privacy Policy.</p>

                        <p>After you submit such a complaint, we will send you an email within five business days confirming that we have received your complaint. Afterwards, we will investigate your complaint and provide you with our response within a reasonable timeframe.</p>

                        <p>If you are a resident of the European Union and you are not satisfied with the outcome of your complaint, you have the right to lodge a complaint with your local data protection authority.</p>

                        <p>Complaints about transfers of personal data within the Privacy Shield Framework should be submitted by following the instructions described elsewhere in this Privacy Policy.</p>

                        <h2>Contact Us</h2>

                        <p>If you have questions or comments about this Privacy Policy, please contact us by email at <a href="mailto:contact@das.finance">contact@das.finance</a>.</p>
                </small>
              </Paper>
            </Grid>
          </Grid>
      </main>

        <Footer language={language} />
      </div>
    );
  }
}

PrivacyPolicy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(PrivacyPolicy);