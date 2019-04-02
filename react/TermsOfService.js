import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Footer from './Footer';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  spoqaHanSans: {
    fontFamily: "'Spoqa Han Sans', 'spoqa Han Sans JP', 'Sans-serif'",
    fontSize: "18pt"
  },
  nunitoSansRegular: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 400
  },
  nunitoSansBold: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 700,
    fontSize: 24
  },
  commonPadding: {
    paddingLeft: theme.spacing.unit * 20,
    paddingRight: theme.spacing.unit * 20,
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 2
    }
  },
  paddingPaper: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit * 1
  },
  marginBottom: {
    marginBottom: theme.spacing.unit * 6
  },
  maxWidth: {
    maxWidth: '1200px'
  }
});

class TermsOfService extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {classes, language} = this.props;

    return (<div>
      <Header language={language}/>

      <main>
        <Grid container="container" justify='center' className={classes.commonPadding}>
          <Grid item="item" xs={12} container="container" justify="center" className={classes.maxWidth}>
            <Grid item="item" xs={12} className={classes.marginBottom}>
            </Grid>
            <Grid item="item" xs={12} sm={10}>
              <Paper className={classNames(classes.nunitoSansRegular, classes.paddingPaper)}>
                <small>
                  <p>
                    <strong>CryptoQuant Website Terms of Use</strong>
                  </p>
                  <p>CryptoQuant Inc. (“<strong>CryptoQuant</strong>&#8220;), has created this website (the &#8220;<strong>Website</strong>&#8221; or the &#8220;<strong>Site</strong>&#8220;) to provide an online resource for users to obtain information and data related to crypto assets (i.e., cryptocurrencies). To assist you in using the Website and associated Services, and to ensure a clear&nbsp; understanding of the relationship arising from your use of the Website and participation in these Services, we have created (i) these Terms of Use (the &#8220;<strong>Terms</strong>&#8220;) and (ii) a Privacy Policy. Our Privacy Policy explains how we treat information you provide to us through the Site, and our Terms govern your use of our Site. Our Terms and Privacy Policy apply to (a) visitors to the Website who wish to obtain Data and Analytics, but who do not sign up for API data feeds (“<strong>Site Users</strong>”), and (b) users who have registered with CryptoQuant to receive API data feeds (&#8220;<strong>API Users</strong>&#8220;). The terms “<strong>CryptoQuant</strong>,” “<strong>we</strong>” and “<strong>us</strong>” refer to CryptoQuant Inc.
                  </p>
                  <p>
                    <strong>PLEASE READ THIS DOCUMENT CAREFULLY BEFORE YOU ACCESS OR USE THE WEBSITE OR&nbsp;</strong>
                    <strong>PARTICIPATE IN OUR SERVICES. BY ACCESSING THE WEBSITE, YOU AGREE TO BE BOUND BY THE&nbsp;</strong>
                    <strong>TERMS AND CONDITIONS SET FORTH BELOW. IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS&nbsp;</strong>
                    <strong>AND CONDITIONS, PLEASE DO NOT ACCESS OUR WEBSITE OR PARTICIPATE IN OUR SERVICES.</strong>
                  </p>
                  <p>
                    <strong>1. Your Agreement.</strong>
                  </p>
                  <p>These Terms govern (i) your use of the Website, (ii) your receipt of and participation in CryptoQuant’s services offered through the Website (the &#8220;<strong>Services</strong>&#8220;), and (iii) your use of information obtained through the Website, including Data and Analytics, information, data, statistics, software, artwork, text, video, audio, pictures, content, trademarks, trade dress, and other intellectual property owned by CryptoQuant or its licensors and made available to you through the Services (“<strong>Crypto&nbsp;</strong>
                    <strong>Quant Content</strong>”). Please read these Terms carefully; they impose legal obligations on you and on CryptoQuant, and establish our legal relationship. By using the Services or accessing our Website, you are acknowledging that you have read and understood these Terms and agree to be legally bound by them. If you are agreeing to these Terms and our Privacy Policy on behalf of a company or other legal entity (your &#8220;Organization&#8221;), (i) you represent and warrant that you have authority to act on behalf of, and to bind your Organization and (ii) for all purposes in these Terms and the Privacy Policy, the term &#8220;you&#8221; means your Organization on whose behalf you are acting. IF YOU DO NOT HAVE THE LEGAL AUTHORITY TO BIND YOUR ORGANIZATION, YOU MUST NOT ACCESS THE WEBSITE.</p>
                  <p>
                    <strong>2. Our Services: Overview</strong>.</p>
                  <p>The Website is designed to provide an online resource for reviewing Data and Analytics related to crypto assets. For example, you may use the Website to obtain daily crypto asset data sets of either crypto asset network or market data (“Data”). You may also obtain correlations and other derived analytics of the various Data that we or our licensors have generated (“Analytics”). You may also register with the Website to receive API data feeds of Data and Analytics for use in your applications. We may also offer paid subscriptions for products from time to time – if we do so, your use of such products will be subject to a separate license agreement between you and CryptoQuant.</p>
                  <p>
                    <strong>3. Obtaining a Password or Access Credential; Protecting Your Password/Credentials.
                    </strong>
                  </p>
                  <p>We may make certain areas of the Website accessible only to users that have a password or other access credentials such as an API key. Please keep in mind that we will treat anyone who uses your user name and password/access credentials as “you.” We will provide this user with all of the rights and privileges that we provide to you, and we will hold you responsible for the activities of a person using your account. Therefore, we recommend that you maintain your user name and password/access credentials in confidence, and that you refrain from disclosing this information to anyone outside of your Organization who might “pretend” to be you with respect to the Website and your participation in the Services. For clarity, to the extent a single set of access credentials (user name and password or API key) is established for you / your Organization (“Access Credentials”), these Access Credentials may be used by authorized representatives within your Organization, provided that you / your Organization remains responsible for the use of the Website and any CryptoQuant Content obtained by anyone accessing the Website using your Access Credentials. For the avoidance of doubt, you shall not permit any third parties to access the Website using the your Access Credentials. We also ask that you notify us immediately if you suspect that someone is using your user name and/or password and/or API key in this or any inappropriate manner.</p>
                  <p>
                    <strong>4. Grant of Rights</strong>
                  </p>
                  <p>
                    <strong>4.1.
                    </strong>
                    <strong>Grant of Rights to All Users</strong>. Subject to your compliance with the terms and conditions of this Agreement, CryptoQuant hereby grants to Site Users and API Users, under CryptoQuant’ intellectual property rights, a limited non-exclusive, non-transferable, worldwide right (i) to access and use the Website for internal business purposes, and (ii) to access, copy, display, perform, and use Data and Analytics and other CryptoQuant Content for internal, non-commercial business purposes pursuant to the terms of the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License (available at https://creativecommons.org/licenses/by-nc/4.0/). Site User (i) acknowledges and agrees that CryptoQuant is not responsible or liable for the accuracy or completeness of any Data or Analytics, and (ii) shall be responsible and liable for its use of the Data and Analytics.</p>
                  <p>
                    <strong>4.2.
                    </strong>
                    <strong>Grant of Rights to API Users.
                    </strong>In addition to those rights granted to you in Section 4.1, CryptoQuant hereby grants to API Users, under CryptoQuant’ intellectual property rights, a limited nonexclusive, non-transferable, worldwide right to access and use API(s) made available by CryptoQuant to access, copy, display, and perform Data and Analytics and other CryptoQuant Content in your applications for internal, non-commercial business purposes.</p>
                  <p>
                    <strong>4.3.
                    </strong>
                    <strong>Publicity.
                    </strong>Registered User grants to CryptoQuant the right to use Registered User’s name, logo and/or other marks for the sole purpose of identifying Registered User as a user of the Website. No compensation will be paid with respect to CryptoQuant’ use of Registered User’s name and/or trademarks under this grant.</p>
                  <p>
                    <strong>5. Ownership; Reservation of Rights.
                    </strong>
                  </p>
                  <p>The information, data, statistics, software, artwork, text, video, audio, pictures, trademarks, trade dress, and other intellectual property embodied in the Services or the CryptoQuant Content, including but not limited to the Data and Analytics, are the proprietary property of CryptoQuant and its licensors, and are protected by U.S. and international copyright and other intellectual property laws, or are used under the principles of fair use. CryptoQuant and its licensors retain all rights with respect to the Services and the CryptoQuant Content except those expressly granted to you in these Terms.</p>
                  <p>
                    <strong>6. Restrictions.
                    </strong>
                  </p>
                  <p>EXCEPT AS EXPRESSLY PROVIDED HEREIN OR IF OTHERWISE EXPRESSLY PERMITTED BY CryptoQuant (e.g., to the extent made available by CryptoQuant through GitHub or subject to separate license from CryptoQuant), YOU AGREE NOT TO (i) DUPLICATE, PUBLISH, DISPLAY, DISTRIBUTE, MODIFY, OR CREATE DERIVATIVE WORKS FROM THE MATERIAL PRESENTED THROUGH THE WEBSITE AND/OR THROUGH THE SERVICES UNLESS SPECIFICALLY AUTHORIZED IN WRITING BY CryptoQuant; OR (ii) REVERSE ENGINEER, DECOMPILE, DISASSEMBLE, OR OTHERWISE SEEK TO DISCOVER THE SOURCE CODE OF THE CryptoQuant WEBSITE AND UNDERLYING SOFTWARE.</p>
                  <p>
                    <strong>6.1.
                    </strong>
                    <strong>User Comments/Feedback.
                    </strong>Our Website may allow Site Visitors to provide comments or feedback regarding our Website, the CryptoQuant Analytics System, and our Services. By providing comments/feedback, you grant us the right to use your comments and feedback for the purposes of improving the Website, the CryptoQuant Analytics System and our Services.</p>
                  <p>
                    <strong>7. Code of Conduct.
                    </strong>
                  </p>
                  <p>As a condition to your use of the Website and the Services, you agree to follow our Code of Conduct, set out below. Under this Code, you will not:</p>
                  <ul>
                    <li>Provide false identification information to obtain access to the Website or Services.</li>
                    <li>Access the Website or Services to develop or implement a product or service that will act as a substitute for or otherwise compete with the Website or Services.</li>
                    <li>Upload, email or otherwise transmit any images or other User Content that is unlawful, obscene, harmful, hateful, invade the privacy of any third party, contain nudity or pornography, or is otherwise objectionable.</li>
                    <li>Disseminate materials that impact or invade the privacy of others, such as photographs, video clips, sound recordings, personally identifiable information, or other materials that reveal personal, private or sensitive information about another person, without that person’s consent.</li>
                    <li>Submit material that is intentionally false, defamatory, unlawfully threatening, or unlawfully harassing.</li>
                    <li>Infringe any third party&#8217;s copyright, patent, trademark, trade secret, or other proprietary rights or rights of publicity or privacy. Electronic materials – such as music, videos, games, images, and text in electronic form &#8212; can easily be copied, modified and sent over networks (such as the Internet). These electronic materials are thus extremely vulnerable to unauthorized distribution and copyright infringement. These materials may not be transmitted over the Website without the copyright owner&#8217;s permission, or without a legitimate &#8220;fair use&#8221; justification for the transmittal.</li>
                    <li>Transmit materials that contain any viruses, Trojan horses, worms, time bombs, cancelbots, or other computer-programming routines that are intended to damage, detrimentally interfere with, surreptitiously intercept, or expropriate any system, data, or personal information.</li>
                    <li>Use the Website to artificially generate traffic or page links to a website or for any other purpose not expressly allowed under these Terms.</li>
                    <li>Use the Website in a manner that could disable, overburden, or impair the Website or Services or interfere with any other party&#8217;s use and enjoyment of the Website and Services, such as through sending &#8220;spam&#8221; email.</li>
                    <li>Use the Website to test or reverse engineer the Website in order to find limitations, vulnerabilities or to evade filtering capabilities.</li>
                    <li>Seek to obtain access to any materials or information through &#8220;hacking,&#8221; &#8220;data harvesting,&#8221; “web scraping,” or through other means we have not intentionally made available to you through the Website.</li>
                    <li>Use VPNs, proxy servers, or other means to hide the true source of traffic or to circumvent any rate limits we impose on our users.</li>
                    <li>Use the Website for any purpose that is unlawful or prohibited by these Terms. For example, you will not use the Website to violate any law, statute, or regulation (including, without limitation, those governing export control, consumer protection, unfair competition, antidiscrimination, or false advertising).</li>
                  </ul>
                  <p>
                    <strong>8. Charges; Payment Terms.</strong>
                  </p>
                  <p>
                    <strong>8.1.
                    </strong>
                    <strong>Subscription Fees.
                    </strong>In exchange for access to the Website and Services, Registered Users shall pay to CryptoQuant a monthly subscription fee (the “<strong>Subscription Fee</strong>”), as set forth in the registration screen at the time of registration. CryptoQuant reserves the right to increase its Subscription Fees in the event its costs for access to any third party Data and Analytics included in the CryptoQuant Content increase. CryptoQuant will use commercially reasonable efforts to provide advance notice of any fee increases.</p>
                  <p>
                    <strong>8.2.
                    </strong>
                    <strong>Automatic Debit.
                    </strong>If you provide recurring payment information for automatic debit of the Subscription Fee, you authorize CryptoQuant to debit your credit card, checking or savings account designated by you at the time of registration (or as you may update such information thereafter) on a recurring basis for the Subscription Fees.</p>
                  <p>
                    <strong>8.3.
                    </strong>
                    <strong>Taxes.
                    </strong>Subscription Fees are exclusive of all federal, state and local and foreign taxes, levies assessments and withholdings. You shall bear and be responsible for all such taxes, levies and assessments arising out of these Terms, excluding only any tax based on CryptoQuant’ net income.</p>
                  <p>
                    <strong>9. Monitoring; Revocation or Suspension of Use Privileges.
                    </strong>
                  </p>
                  <p>We reserve the right at any time to (i) monitor your use of the Website to determine compliance with these Terms, and (ii) terminate or suspend your use of some or all of the Website or Services if you engage in activities that we conclude, in our discretion, breach our Code of Conduct or otherwise violate these Terms or our Privacy Policy. Although we have no – and assume no &#8212; obligation to monitor activities on the Website, please understand that we may employ filters designed to detect and block inappropriate content under this Code of Conduct. We reserve the right to request edits to your submission, to refuse to post, or to remove any information or materials, in whole or in part, that we believe, in our sole discretion, are incompatible with our Code of Conduct.</p>
                  <p>Users should also understand that our Code of Conduct is based in many instances on principles of applicable law. Users who violate our Code of Conduct accordingly may be exposed under these laws to criminal charges, and civil liability to harmed parties for compensatory damages and attorney&#8217;s fees. CryptoQuant reserves the right at all times to disclose information it deems necessary to satisfy any applicable law, regulation, legal process, or governmental request, consistent with its Privacy Policy.</p>
                  <p>
                    <strong>10. Termination for Cause.
                    </strong>
                  </p>
                  <p>In the event that you are in material breach of any obligation under these Terms, CryptoQuant may terminate this Agreement for cause upon written notice after first: (i) providing you with written notice of the breach (a “Notice of Breach”) and (ii) providing thereafter a five (5) day opportunity to cure beginning on the date of your receipt of the Notice of Breach.</p>
                  <p>
                    <strong>11. Links to Third-Party Sites.
                    </strong>
                  </p>
                  <p>The Website may also contain links or produce search results that reference links to third party websites (collectively &#8220;<strong>Linked Sites</strong>&#8220;). CryptoQuant has no control over these Linked Sites or their content and does not assume responsibility or liability for any content, opinions, or materials available on Linked Sites. CryptoQuant does not endorse the content of any Linked Site, nor does CryptoQuant warrant that a Linked Site will be free of computer viruses or other harmful code that can impact your computer or other web-access device. By using the Website to search for or link to another site, you agree and understand that such use is at your own risk.</p>
                  <p>
                    <strong>12. NO FINANCIAL ADVICE.</strong>
                  </p>
                  <p>The Data and Analytics provided through the Website are provided for information purposes only. CryptoQuant is not a financial advisor. You should consult your financial advisor before you make financial decisions based upon the Data or Analytics. Your use of Data and Analytics is at your own risk. If you choose to use Data and/or Analytics for any purpose, you do so voluntarily and you assume all risks associated with such activities. To the maximum extent permitted by applicable law, you expressly agree that we are not providing financial advice via the Website.</p>
                  <p>
                    <strong>13. Warranty Disclaimer.
                    </strong>
                  </p>
                  <p>THE WEBSITE, SERVICES AND CONTENT WITHIN IT ARE DELIVERED ON AN &#8220;AS IS&#8221; AND &#8220;AS AVAILABLE&#8221; BASIS. WHEN YOU ACCESS THE WEBSITE AND SERVICES, YOU DO SO AT YOUR OWN RISK. CryptoQuant AND ITS LICENSORS DO NOT WARRANT OR REPRESENT THAT (A) THE USE OF THE WEBSITE WILL BE SECURE, TIMELY, UNINTERRUPTED OR ERROR-FREE OR OPERATE IN COMBINATION WITH ANY OTHER HARDWARE, SOFTWARE, SYSTEM OR DATA, (B) THE WEBSITE OR SERVICES WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS, (C) THE QUALITY OF ANY SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE WEBSITE WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS, (D) ERRORS OR DEFECTS WILL BE CORRECTED, OR (E) THAT ANY DATA, ANALYTICS, OR OTHER MATERIALS OR CONTENT YOU DOWNLOAD FROM THE CryptoQuant WEBSITE WILL BE FREE OF VIRUSES OR OTHER HARMFUL FEATURES. WHILE CryptoQuant MAY MAKE DATA AND ANALYTICS AVAILABLE THROUGH THE WEBSITE, THE DATA AND ANALYTICS ARE PROVIDED BY THIRD PARTIES AND CryptoQuant IS NOT RESPONSIBLE OR LIABLE FOR, AND HEREBY DISCLAIMS LIABILITY FOR, YOUR USE OF SUCH DATA AND ANALYTICS, AND THE INFORMATION YOU OBTAIN FROM THEM. YOU EXPRESSLY AGREE THAT YOUR USE OF ANY DATA AND ANALYTICS MADE AVAILABLE THROUGH THE WEBSITE IS AT YOUR SOLE RISK. CryptoQuant DISCLAIMS (i) ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF THIRD PARTY RIGHTS; (ii) ANY RESPONSIBILITY OR LIABILITY FOR THE ACCURACY, CONTENT, COMPLETENESS, OR LEGALITY OF INFORMATION AVAILABLE THROUGH THE WEBSITE OR SYSTEM; AND (iii) ANY RESPONSIBILITY OR LIABILITY FOR HARM RESULTING FROM DOWNLOADING OR ACCESSING INFORMATION THROUGH THE WEBSITE, INCLUDING HARM CAUSED BY VIRUSES OR SIMILAR DESTRUCTIVE FEATURES. YOU EXPRESSLY AGREE THAT USE OF THE CryptoQuant WEBSITE, SYSTEM, AND RELATED SERVICES AND CONTENT IS AT YOUR SOLE RISK.</p>
                  <p>
                    <strong>14. Limitation of Liability.
                    </strong>
                  </p>
                  <p>UNDER NO CIRCUMSTANCES, INCLUDING BUT NOT LIMITED TO BREACH OF CONTRACT, TORT, OR NEGLIGENCE, WILL CryptoQuant BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING LOST PROFITS) THAT ARISE OUT OF OR ARE RELATED TO YOUR USE OF THE CryptoQuant WEBSITE, SERVICES AND CryptoQuant CONTENT.</p>
                  <p>
                    <strong>15. Indemnity.
                    </strong>
                  </p>
                  <p>You agree to defend, indemnify, and hold CryptoQuant and its subsidiaries, affiliates, officers, directors, agents, and employees harmless from any liability to third parties, including reasonable attorneys&#8217; fees, arising from or related to your (i) use of Data and Analytics , and (ii) breach of these Terms</p>
                  <p>
                    <strong>16. Contact for Alleged Copyright Infringement.
                    </strong>
                  </p>
                  <p>CryptoQuant respects the intellectual property rights of others and requires that its users do the same. If you believe that Content on the Website or other activity taking place on the Website constitutes infringement of a work protected by copyright (a &#8220;<strong>Work</strong>&#8220;), please notify our agent, designated under the Digital Millennium Copyright Act (17 U.S.C. §512) (the “<strong>DMCA</strong>”) to respond to such concerns, as follows:</p>
                    <strong>Ki Young Ju<br/>
                    </strong>
                    <strong>CryptoQuant Inc.<br/>
                    </strong>
                    <strong>83, Uisadang-daero, Yeongdeungpo-gu, Seoul, Republic of Korea<br/>
                    </strong>
                    <strong>20th floor<br/>
                    </strong>
                  <p>Your notice must comply with the DMCA. Upon receipt of a compliant notice, we will respond and proceed in accordance with the DMCA.</p>
                  <p>
                    <strong>17. Modifications to these Terms.
                    </strong>
                  </p>
                  <p>We may modify and change these Terms over time. We will not &#8220;retroactively&#8221; change these Terms, and any modifications we make shall take effect proactively, once you next access the Website. Please feel free to print out a copy of these Terms for your records.</p>
                  <p>
                    <strong>18. Assignment.
                    </strong>
                  </p>
                  <p>These Terms shall not be assignable by you, either in whole or in part. CryptoQuant reserves the right to assign its rights and obligations under these Terms.</p>
                  <p>
                    <strong>19. General.
                    </strong>
                  </p>
                  <p>These Terms shall be governed in all respects by the laws of the Commonwealth of Massachusetts without giving effect to its conflicts of law provisions. Both parties submit to the personal jurisdiction of and venue in the state and federal courts in the Commonwealth of Massachusetts in the judicial district where CryptoQuant has its principal place of business. The parties further agree that any cause of action arising under these Terms or our Privacy Policy shall exclusively be brought in such courts. If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced. Headings are for reference purposes only and in no way define, limit, construe, or describe the scope or extent of such section. CryptoQuant’ failure to act with respect to a breach by you or others does not waive its right to act with respect to subsequent or similar breaches. This agreement and the terms and conditions contained herein set forth the entire understanding and agreement between CryptoQuant and you with respect to the subject matter hereof and supersede any prior or contemporaneous understanding, whether written or oral.</p>
                  <p>
                    <strong>20. Survival.
                    </strong>
                  </p>
                  <p>The following provisions shall survive the termination of these Terms and shall apply indefinitely:</p>
                  <ul>
                    <li>Section 5 (Ownership; Reservation of Rights)</li>
                    <li>Section 12 (Warranty Disclaimer)</li>
                    <li>Section 14 (Limitation of Liability)</li>
                    <li>Section 15 (Indemnity)</li>
                    <li>Section 18 (Assignment)</li>
                    <li>Section 19 (General)</li>
                    <li>Section 20 (Survival)</li>
                  </ul>
                  <p>
                    <strong>21. Relationship to Privacy Policy and Other Contracts.
                    </strong>
                  </p>
                  <p>These Terms must be read in conjunction (i) with other agreements into which you may enter concerning the Website, CryptoQuant’ Services or CryptoQuant subscription products, and (ii) with our Privacy Policy. The provisions of our Privacy Policy are incorporated herein. To the extent these Terms conflict with the terms of our Privacy Policy, the terms of our Privacy Policy will control. Similarly to the extent these Terms conflict with the terms and conditions of any specific agreement you enter with us, the terms and conditions of such specific agreement will control.</p>
                  <p>
                    <strong>22. Contact Us.
                    </strong>
                  </p>
                  <p>If you have any questions about these Terms, the practices of this Site, or your dealings with this Website, please contact us at: You may contact us, for any reason, by e-mail as follows:</p>
                  <p>
                    <strong>Effective Date:
                    </strong>The effective date of these Terms is February 18, 2019.</p>
                  <p>
                    <strong>COPYRIGHT AND LEGAL NOTICE</strong>.</p>
                  <p>Copyright © 2019 CryptoQuant Inc. All Rights Reserved.</p>
                  <br/><br/>
                  <h2>Violations</h2>
                  Please report any violations of these terms to the Company at&nbsp;
                   <a href="mailto:contact@cryptoquant.com">contact@cryptoquant.com</a>.
                </small>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </main>

      <Footer language={language}/>
    </div>);
  }
}

TermsOfService.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(TermsOfService);
