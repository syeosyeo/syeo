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
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 2,
    }
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

class TermsOfService extends React.Component {
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
                Terms of Service
            </Typography>
            </Grid>
            <Grid item xs={12} sm={10} >
              <Paper className={classNames(classes.nunitoSansRegular, classes.paddingPaper)}>
                <small>
                <h2>Terms</h2>
                This Terms of Service Agreement (the “Agreement”) is a legally binding contract that shall govern our relationship with our Users and others who may interact or interface with DAS.Finance, website which includes www.das.finance, (collectively “DAS.Finance”), and its Services, which shall be defined below.
                <br/><br/><h2>Assent & Acceptance</h2>
                By using DAS.Finance, your warrant that you have read and reviewed this Agreement and agree to be bound by it. If you do not agree to be bound by this Agreement, please exit DAS.Finance. We only agree to provide use of DAS.Finance and the Services to you if your assent to this Agreement.
                <br/><br/><h2>Definitions</h2>
                A.	“EFFECTIVE DATE”: "Effective Date" means the date this Agreement comes into force and effect.
                <br/>B.	“PARTIES”: The parties to this Agreement are the owner and operator of DAS.Finance and you, as the User or Member of DAS.Finance. Hereinafter, the parties will individually be referred to as "Party" and collectively as "Parties."
                <br/>C.	“YOU”: Should you agree to this Agreement and continue your use of DAS.Finance, you will be referred to as either you, the User, the Member (if you have registered for any Services on DAS.Finance), or if any second-person pronouns are required and applicable, such pronouns as 'your", "yours", etc.
                <br/>D.	SERVICES: "Services" means any Services that we make available for use or sale on DAS.Finance.
                <br/><br/><h2>DAS.Finance Services</h2>
                DAS.Finance is a Digital Asset Security(DAS) platform which provide information about Digital Asset Security Lists, News and Reports. DAS.Finance also offers additional paid Services which may include, but are not limited to, customizing consulting Services, tax-related services, and an automated tool for assisting with your cryptocurrency investments. DAS.Finance also offers referrals to regulated services.
                <br/><br/>Any and all visitors to DAS.Finance, despite whether they are registered or not, shall be deemed “Users” of the DAS.Finance Services, as described in this Agreement. Once individual registers for the Services, through the process of creating an account, the User shall then be considered a “Member”. All Members are also Users.
                <br/><br/>The User and/or Member acknowledges and agrees that the Services provided and made available on and through DAS.Finance are the sole property of the Company. We may offer the Services or other access on additional mobile applications, which may be made available on various social media networking sites and numerous other platforms and downloadable programs.
                <br/><br/>At our sole and exclusive discretion, we may offer additional Services and/or products, or we may update, modify or revise any current content and Services. If we do so, this Agreement shall apply to any and all additional Services and/or products and any and all updated, modified or revised Services unless otherwise stipulated. We hereby reserve the right to cancel and cease offering any of the aforementioned Services and/or products at our discretion. You, as the end User and/or Member, acknowledge, accept and agree that we shall not be held liable for any such updates, modifications, revisions, suspensions or discontinuance of any of our Services and/or products. Your continued use of the Services provided, after such posting of any updates, changes, and/or modifications, shall constitute your acceptance of such updates, changes and/or modifications, and as such, frequent review of this Agreement and any and all applicable terms and policies should be made by you to ensure you are aware of all terms and policies currently in effect. Should you not agree to the updated, revised or modified terms, you must stop using the provided Services immediately.
                <br/><br/><h2>Age restriction</h2>
                No minors under 18 years of age are permitted to use DAS.Finance. By using DAS.Finance as an individual, you represent and warrant that you are at least 18 years of age and may legally enter into a binding contract with the Company. We disclaim any liability for any misrepresentation of your or any other user’s age. You further represent and warrant that you are not prohibited from using DAS.Finance under the laws of the United States or any applicable jurisdiction. We assume no responsibility or liability for any misrepresentation of your age.
                <br/><br/><h2>Registration & Privacy</h2>
                When you register, the Company may collect information such as your email address and depending on the Services you choose, other information, such as verification data. We store the data that DAS.Finance needs to function as a secure and feature-rich services for DAS.Finance users.
                <br/><br/><h2>Account and Security</h2>
                When you set up an account, you are the sole authorized user of your account. You shall be responsible for maintaining the secrecy and confidentiality of your password and for all activities that transpire on or within your account.
                <br/><br/>You are also responsible for ensuring the continued accuracy of any information such as email address and country info you may provide to Us. Your registration information will allow you to use DAS.Finance and the Services. You must not share such information with any third party, and if you discover that your identifying information has been compromised, you agree to notify us immediately in writing. Email notification will suffice to <a href="mailto:contact@das.finance">contact@das.finance</a>. You are exclusively responsible for your account, including for any act or omission of any user(s) that may access your account, if such act or omission, when undertaken by you, would be deemed a violation of this Agreement.
                <br/><br/>We will notify you through e-mail when our clause changes. If you fail to receive a notification by writing the wrong email, you are responsible for it. Make sure you enter the correct email.
                <br/><br/>Providing false or inaccurate information, or using DAS.Finance or the Services to further fraud or unlawful activity is grounds for immediate termination of this Agreement.
                <br/><br/>You hereby acknowledge and agree that the Company shall not be held liable for any loss and/or damage arising from any failure to comply with this Agreement.
                <br/><br/><h2>Duplicate Wallet Registration</h2>
                If you register the same wallet or API maliciously, authentication may be cancelled. Also, if multiple attempts are found to manipulate the asset by duplicating the API, warnings and blockings will be taken. We also have the right to terminate all services provided to users who repeat this malicious behavior.
                <br/><br/><h2>Conduct</h2>
                As a User or Member of DAS.Finance, you herein acknowledge, understand and agree that all information, text, software, data, photographs, music, video, messages, tags or any other content, whether it is publicly or privately posted and/or transmitted, is the express sole responsibility of the individual from whom the content originated. In short, this means that you are solely responsible for any and all content posted, uploaded, emailed, transmitted or otherwise made available by you by way of the DAS.Finance Services. We do not guarantee the accuracy, integrity or quality of such content. It is expressly understood that by use of our Services, you may be exposed to errors or omissions in content posted and/or any loss or damage as a result of the use of any content posted, emailed, transmitted or otherwise made available on DAS.Finance.
                <br/><br/>Furthermore, you agree not to make use of DAS.Finance’s Services for the purpose of:
                <br/><br/>A.	Uploading, posting, emailing, transmitting, or otherwise making available any content that may be deemed unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy or which is hateful, and/or racially, ethnically, or otherwise objectionable;
                <br/>B.	Engaging in or creating any unlawful gambling, sweepstakes, or pyramid scheme;
                <br/>C.	Implying any endorsement by the Company;
                <br/>D.	Causing harm to minors in any manner whatsoever;
                <br/>E.	Impersonating any individual or entity, including, but not limited to, any Company officials, forum leaders, guides or hosts or falsely stating or otherwise misrepresenting any affiliation with an individual or entity;
                <br/>F.	Forging captions, headings or titles or otherwise offering any content that you personally have no right to pursuant to any law or in accordance with any contractual or fiduciary relationship;
                <br/>G.	Uploading, posting, emailing, transmitting or otherwise offering any such content that may infringe upon any patent, copyright, trademark, or any other proprietary or intellectual rights of any other party;
                <br/>H.	Uploading, posting, emailing, transmitting or otherwise offering any content that you do not personally have any right to offer pursuant to any law or in accordance with any contractual or fiduciary relationship;
                <br/>I.	Uploading, posting, emailing, transmitting, or otherwise offering any unsolicited or unauthorized advertising, promotional flyers, “junk mail,” “spam,” or any other form of solicitation, except in any such areas that may have been designated for such purpose;
                <br/>J.	Uploading, posting, emailing, transmitting, or otherwise offering any source that may contain a software virus or other computer code, any files and/or programs which have been designed to interfere, destroy and/or limit the operation of any computer software, hardware, or telecommunication equipment;
                <br/>K.	Disrupting the normal flow of communication, or otherwise acting in any manner that would negatively affect other users' ability to participate in any real-time interactions;
                <br/>L.	Interfering with or disrupting any DAS.Finance Services, servers and/or networks that may be connected or related to our website, including, but not limited to, the use of any device software and/or routine to bypass the robot exclusion headers;
                <br/>M.	Intentionally or unintentionally violating any local, state, federal, national or international law, including, but not limited to, rules, guidelines, and/or regulations decreed by the U.S. Securities and Exchange Commission, in addition to any rules of any nation or other securities exchange, that would include without limitation, the New York Stock Exchange, the American Stock Exchange, or the NASDAQ, and any regulations having the force of law;
                <br/>N.	Providing informational support or resources, concealing and/or disguising the character, location, and/or source to any organization delegated by the United States government as a "foreign terrorist organization" in accordance to Section 219 of the Immigration Nationality Act;
                <br/>O.	“Stalking” or with the intent to otherwise harass another individual; and/or
                <br/>P.	Collecting or storing of any personal data relating to any other Member or User in connection with the prohibited conduct and/or activities which have been set forth in the aforementioned paragraphs.
                <br/><br/>The Company reserves the right to pre-screen, refuse and/or delete any content currently available through our Services. In addition, we reserve the right to remove and/or delete any such content that would violate this Agreement or which would otherwise be considered offensive to other Users and/or Members.
                <br/><br/>The Company reserves the right to access, preserve and/or disclose Member account information and/or content if it is requested to do so by law or in good faith belief that any such action is deemed reasonably necessary for:
                <br/><br/>A. Compliance with any legal process;
                <br/>B.	Enforcement of this Agreement;
                <br/>C.	Responding to any intellectual property claim by any other User, Member or third party;
                <br/>D.	Responding to requests for customer service; or
                <br/>E.	Protecting the rights, property or the personal safety of the Company, its Users and Members, including the general public.
                <br/><br/>The Company reserves the right to include the use of security components that may permit digital information or material to be protected. Such use of information and/or material is subject to usage guidelines and regulations established by the Company or any other content providers supplying content services to the Company. You are hereby prohibited from making any attempt to override or circumvent any of the embedded usage rules in our Services. Furthermore, unauthorized reproduction, publication, distribution, or exhibition of any information or materials supplied by our Services, despite whether done so in whole or in part, is expressly prohibited.
                <br/><br/><h2>Global Use & Import/Export Compliance</h2>
                You hereby agree to comply with all local rules relating to online conduct and that which is considered acceptable content. Uploading, posting and/or transferring of software, technology and other technical data may be subject to the export and import laws of the United States and possibly other countries. Through the use of our network, you agree to comply with all applicable export and import laws, statutes and regulations, including, but not limited to, the Export Administration Regulations, as well as the sanctions control program of the United States. Furthermore, you state and pledge that you:
                <br/><br/>A.	Are not on the list of prohibited individuals which may be identified on any government export exclusion report nor a Member of any other government which may be part of an export-prohibited country identified in applicable export and import laws and regulations;
                <br/>B.	Agree not to transfer any software, technology or any other technical data through the use of our network Services to any export-prohibited country;
                <br/>C.	Agree not to use DAS.Finance Services for any military, nuclear, missile, chemical or biological weaponry end uses that would be a violation of the U.S. export laws; and
                <br/>D.	Agree not to post, transfer nor upload any software, technology or any other technical data which would be in violation of the U.S. or other applicable export and/or import laws.
                <br/><br/><h2>Content</h2>
                The Company does not lay claim to ownership of any content submitted by any Member or User. You hereby grant the Company the following worldwide, royalty-free and non-exclusive licenses, as applicable:
                <br/><br/>A.	The license to use, distribute, reproduce, modify, adapt, publicly perform and/or publicly display content submitted or made available for inclusion on the publicly accessible areas of DAS.Finance. This license is for the sole purpose of providing and promoting the specific area to which this content was placed and/or made available for viewing. This license shall be available so long as you are a Member of DAS.Finance, and shall terminate at the termination of this Agreement or at such time as when you elect to discontinue your membership.
                <br/>B.	The license to use, distribute, reproduce, modify, adapt, publicly perform and/or publicly display photos, audio, video and/or graphics submitted or made available for inclusion on the publicly accessible areas of DAS.Finance. This license is for the sole purpose of providing and promoting the specific area in which this content was placed and/or made available for viewing. This license shall be available so long as you are a Member of DAS.Finance and shall terminate at such time when you elect to discontinue your membership.
                <br/>C.	The license to use, distribute, reproduce, modify, adapt, publish, translate, publicly perform and/or publicly display any other content submitted or made available for inclusion on the publicly accessible areas of DAS.Finance, whether in whole or in part, and the incorporation of any such content into other works in any arrangement or medium current used or later developed.
                <br/>D.	The license to use, for the sole purposes of providing the Services to you, any financial or cryptocurrency information you may provide to Us, including but not limited to prior history of cryptocurrency investing, personal cryptocurrency portfolio data, and prior tax information. This license is nonexclusive and revocable at any time. You hereby expressly consent to allow us to use any personal information for the sole and express purpose of providing the Services to you. If you purchase any paid Services through which DAS.Finance agrees to rebalance, through its automated investment tool, your cryptocurrency portfolio or portfolios, you hereby consent to and authorize the Company to manage your portfolio or portfolios in such capacity.
                <br/><br/>Those areas which may be deemed “publicly accessible” areas of DAS.Finance are those such areas of our network which are meant to be available to the general public and include message boards and groups that are openly available to both Users and Members.
                <br/><br/><h2>Contributions</h2>
                We provide an area for our Users and members to contribute feedback to our website and apps. When you submit ideas, documents, suggestions and/or proposals (“Contributions”) to our site and apps, you acknowledge and agree that:
                <br/><br/>A.	Your contributions do not contain any type of confidential or proprietary information;
                <br/>B.	The Company shall not be liable or under any obligation to ensure or maintain confidentiality, expressed or implied, related to any Contributions;
                <br/>C.	The Company shall be entitled to make use of and/or disclose any such Contributions in any such manner as we may see fit;
                <br/>D.	The contributor's Contributions shall automatically be assigned to the Company and become the sole intellectual property of the Company; and
                <br/>E.	We are under no obligation to compensate or provide any form of reimbursement in any manner or nature, nor are we under any obligation to credit you for your Contributions.
                <br/><br/><h2>Indemnity</h2>
                You hereby agree to indemnify and hold the Company, our subsidiaries, affiliates, agents, employees, officers, partners and/or licensors harmless against any and all claims or demands, including reasonable attorney’s fees, which may arise from or relate to your use or misuse of DAS.Finance or the Services, your breach of this Agreement, or your conduct or actions or the conduct or actions of any other DAS.Finance user. You agree that the Company shall be able to select its own legal counsel and may participate in its own defense, if the Company wishes.
                <br/><br/><h2>Commercial Reuse</h2>
                You hereby agree not to replicate, duplicate, copy, trade, sell, resell nor exploit for any commercial reason any part, use of, or access to DAS.Finance’s sites or apps.
                <br/><br/><h2>Use and Storage</h2>
                You hereby acknowledge that the Company may set up any such practices and/or limits regarding the use of our Services, including, without limitation, on the maximum number of days that any email, message posting or any other uploaded content shall be retained by the Company, and/or the maximum number of email messages that may be sent and/or received by any member, the maximum volume or size of any email message that may be sent from or may be received by an account on our Service, the maximum disk space allowable that shall be allocated on DAS.Finance's servers on the Member's behalf, and/or the maximum number of times and/or duration that any Member may access our Services in a given period of time. In addition, you also agree that the Company has absolutely no responsibility or liability for the removal or failure to maintain storage of any messages and/or other communications or content maintained or transmitted by our Services. You also hereby acknowledge that we reserve the right to delete or remove any account that is no longer active for an extended period of time. Furthermore, the Company shall reserve the right to modify, alter and/or update these general practices and limits at our sole and exclusive discretion.
                <br/><br/><h2>License</h2>
                We may provide you with certain information as a result of your use of DAS.Finance or the Services. Such information may include, but is not limited to, documentation, data, or information developed by the Us, and other materials which may assist in your use of DAS.Finance or the Services (the “Materials"). Subject to this Agreement, we grant your a personal, non-exclusive, limited, non-transferable and revocable worldwide and royalty-free license to use the Materials solely in connection with your use of DAS.Finance and the Services (“License”). Through this License, you may temporarily download one copy of the relevant, downloadable Materials (information or software) on DAS.Finance's website or apps for personal, non-commercial transitory viewing only.
                <br/><br/>You may not:
                <br/>1.	Modify or copy the Materials;
                <br/>2.	Use the Materials for any commercial purpose, or for any public display (commercial or non-commercial);
                <br/>3.	Attempt to decompile or reverse engineer any software contained on DAS.Finance's website or apps;
                <br/>4.	Remove any copyright or other proprietary notations from the Materials; or
                <br/>5.	Transfer the Materials to another person or "mirror" the Materials on any other server.
                <br/>6.	Scan or probe the underlying structure of DAS.Finance;
                <br/>7.	Violate the security of DAS.Finance or Services through any unauthorized access, circumvention of encryption, or any other security tools, data mining or interference to any host, User or network;
                <br/>8.	Use bots, web crawlers, or any similar devices or online tools to access or index data from DAS.Finance;
                <br/>9.	Attempt to disrupt the experience of other users on DAS.Finance in any way; or
                <br/>10.	Disseminate any virus or other bad code which could harm DAS.Finance or the Services or any device of any user.
                <br/><br/>This License shall automatically terminate if you violate any of these restrictions and may be terminated by the Company at any time. This License also terminates upon your cessation of use of DAS.Finance or the Services or otherwise at the termination of this Agreement.
                <br/><br/>Upon terminating your viewing of these materials or upon the termination of this License, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                <br/><br/><h2>Disclaimer</h2>
                Through your use of DAS.Finance, you acknowledge and agree that information provided by the Company is simply that, information, and should not be considered a substitute for legal advice, tax advice, investing advice, audit advice, accounting advice, or brokerage advice under the guidance of a licensed professional. Further, the information provided herein should not be taken as financial planning or investment solicitation. No fiduciary relationship has been created between your and the Company.
                <br/><br/>You hereby understand and acknowledge that through your use of DAS.Finance, you are not being represented by an attorney, certified financial planner, broker, or other regulated advisor. Certain aspects of the DAS.Finance Services may provide access to such a professional or provide tax-related information, but if you are in need of legal or financial advice, including a review of any financial or tax decisions, we advise you to consult the appropriate advisor, such as your own attorney, accountant, or other professional.
                <br/><br/>You agree that your use of DAS.Finance and Services is at your sole and exclusive risk and that any Services provided by the Company are on an "As Is" basis. The Company hereby expressly disclaims any and all express or implied warranties of any kind, including, but not limited to the implied warranty of fitness for a particular purpose and the implied warranty of merchantability.
                <br/><br/>The maximum liability of the Company arising from or relating to your use of DAS.Finance or Services is limited to the greater of one hundred ($100) US Dollars or the amount you paid to the Company in the last three (3) months. This applies to any and all claims by you, including, but not limited to, lost profits or revenues, consequential or punitive damages, negligence, strict liability, fraud, or torts of any kind.
                <br/><br/><h2>Limitations</h2>
                Fully permissible by law, the Company, including any employees, affiliates, service providers, contractors or agents, shall not liable for any damages that may occur to you as a result of your use of DAS.Finance or Services, even if a Company or a representative has been notified in any manner of the possibility of any such damage. This section applies to any and all claims by you, including, but not limited to, loss of data, loss of goodwill, lost profits or revenues, consequential, indirect, special exemplary or punitive damages, negligence, strict liability, fraud, or torts of any kind, whether such claims are direct or indirect and whether such claims are alleged to be from your use of DAS.Finance, your interaction with another User, or your interaction with any third-party.
                <br/><br/>The maximum liability of the Company arising from or relating to your use of DAS.Finance or Services is limited to the greater of one hundred ($100) US Dollars or the amount you paid to the Company in the last three (3) months.
                <br/><br/>Some or all of the limitations provided in this subsection may not be applicable to you, depending upon your jurisdiction.
                <br/><br/><h2>Accuracy of Materials</h2>
                The materials appearing on DAS.Finance could include technical, typographical, or photographic errors. The Company does not warrant that any of the materials on its website or apps are accurate, complete or current. The Company may make changes to the materials contained on its website or apps at any time without notice. However, the Company does not make any commitment to update the materials.
                <br/><br/><h2>Links</h2>
                Either the Company or any third parties may provide links to other websites and/or resources on DAS.Finance or through any of the Services. Thus, you acknowledge and agree that we are not responsible for the availability of any such external sites or resources, and as such, we do not endorse nor are we responsible or liable for any content, products, advertising or any other materials, on or available from such external links, third party sites, or other resources. Furthermore, you acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any such damage or loss which may be a result of, caused or allegedly caused by or in connection with the use of, or the reliance on, any such content, goods or Services made available on or through any such external link, third party site, or other resource.
                <br/><br/><h2>Advertisers</h2>
                Any correspondence or business dealings with, or the participation in any promotions of, advertisers located on or through our Services, which may include the payment and/or delivery of such related goods and/or Services, and any such other term, condition, warranty and/or representation associated with such dealings, are and shall be solely between you and any such advertiser. Moreover, you agree that the Company shall not be held responsible or liable for any loss or damage of any nature or manner incurred as a direct result of any such dealings or as a result of the presence of such advertisers on DAS.Finance.
                <br/><br/><h2>Affiliate Marketing</h2>
                DAS.Finance receives affiliation fees from third-party businesses through referral links on the DAS.Finance website or app. We recommend products and services based on the anticipated needs of our users and will always make clear when we receive a commission, referral, or other fee based on those recommendations.
                <br/><br/><h2>Modifications</h2>
                The Company may revise this Agreement at any time without notice. It is your responsibility to periodically check this page for any such modification, revision or amendment. Any changes made are assumed to have been accepted by your continued use of DAS.Finance.
                <br/><br/><h2>Downtime</h2>
                The Company may need to interrupt your access to DAS.Finance to perform maintenance or emergency services on a scheduled or unscheduled basis. you agree that your access to DAS.Finance or the Services may be affected by unanticipated or unscheduled downtime, for any reason, but that the Company shall have no liability for any damage or loss caused as a result of such downtime.
                <br/><br/><h2>Proprietary Rights</h2>
                You hereby acknowledge and agree that DAS.Finance's Services and any essential software that may be used in connection with our Services (“Software”) contains proprietary and confidential material that is protected federal intellectual property rights and other applicable laws. Such material may be copyrighted or patented. Furthermore, you herein acknowledge and agree that any content which may be contained in any advertisements or information presented by and through our Services or by advertisers is protected by copyrights, trademarks, patents and/or other proprietary rights and laws. Therefore, except for that which is expressly permitted by applicable law or as authorized by the Company or such applicable licensor, you agree not to alter, modify, lease, rent, loan, sell, distribute, transmit, broadcast, publicly perform and/or create any plagiaristic works which are based on or derived from DAS.Finance Services (e.g. any content or Software), in whole or part.
                <br/><br/>The Company has granted your personal, non-transferable and non-exclusive rights and/or a license to make use of the object code or our Software on a single computer, as long as you do not, and shall not, allow any third party to duplicate, alter, modify, create or plagiarize work from, reverse engineer, reverse assemble or otherwise make an attempt to locate or discern any source code, sell, assign, sublicense, grant a security interest in and/or otherwise transfer any such right in the Software. Furthermore, you agree not to alter or change the Software in any manner, nature or form, and as such, not to use any modified versions of the Software, including and without limitation, for the purpose of obtaining unauthorized access to our Services. Lastly, you also agree not to access or attempt to access our Services through any means other than through the interface which is provided by the Company for use in accessing our Services.
                <br/><br/><h2>Termination</h2>
                As a Member of DAS.Finance, you may cancel or terminate your account, associated email address and/or access to our Services via the settings page at any time.
                <br/><br/>As a member, you agree that the Company may, without any prior notice, immediately suspend, terminate, discontinue and/or limit your account, any email associated with your account, and access to any of our Services. The cause for such termination, discontinuance, suspension and/or limitation of access shall include, but is not limited to:
                <br/><br/>A.	Any breach or violation of this Agreement or any other incorporated agreement, regulation and/or guideline;
                <br/>B.	By way of requests from law enforcement or any other governmental agencies;
                <br/>C.	The discontinuance, alteration and/or material modification to our Services, or any part thereof;
                <br/>D.	Unexpected technical or security issues and/or problems;
                <br/>E.	Any extended periods of inactivity;
                <br/>F.	Any engagement by you in any fraudulent or illegal activities; and/or
                <br/>G.	The nonpayment of any associated fees that may be owed by you in connection with your DAS.Finance account Services.
                <br/><br/>Furthermore, you herein agree that any and all terminations, suspensions, discontinuances, and or limitations of access for cause shall be made at our sole discretion and that we shall not be liable to you or any other third party with regards to the termination of your account, associated email address and/or access to any of our Services.
                <br/><br/>The termination of your account with the Company shall include any and/or all of the following:
                <br/>A.	the removal of any access to all or part of the Services offered within DAS.Finance;
                <br/>B.	the deletion of your password and any and all related information, files, and any such content that may be associated with or inside your account, or any part thereof; and
                <br/>C.	the barring of any further use of all or part of our Services.
                <br/><br/>If your account is terminated by Us, you will not be entitled to any refund of any monies spent on DAS.Finance. At the termination of this Agreement, any provisions that would be expected to survive termination by their nature shall remain in full force and effect.
                <br/><br/><h2>Warranty Disclaimers</h2>
                YOU HEREIN EXPRESSLY ACKNOWLEDGE AND AGREE THAT:
                <br/><br/>A.	THE USE OF DAS.FINANCE SERVICES AND SOFTWARE ARE AT YOUR OWN RISK. OUR SERVICES AND SOFTWARE SHALL BE PROVIDED ON AN "AS IS" AND/OR "AS AVAILABLE" BASIS. DAS.FINANCE AND OUR SUBSIDIARIES, AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES OF ANY KIND WHETHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT
                <br/>B.	DAS.FINANCE AND OUR SUBSIDIARIES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS MAKE NO SUCH WARRANTIES THAT (i) DAS.FINANCE SERVICES OR SOFTWARE WILL MEET YOUR REQUIREMENTS; (ii) DAS.FINANCE SERVICES OR SOFTWARE SHALL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE; (iii) THAT SUCH RESULTS WHICH MAY BE OBTAINED FROM THE USE OF THE DAS.FINANCE SERVICES OR SOFTWARE WILL BE ACCURATE OR RELIABLE; (iv) QUALITY OF ANY PRODUCTS, SERVICES, ANY INFORMATION OR OTHER MATERIAL WHICH MAY BE PURCHASED OR OBTAINED BY YOU THROUGH OUR SERVICES OR SOFTWARE WILL MEET YOUR EXPECTATIONS; AND (v) THAT ANY SUCH ERRORS CONTAINED IN THE SOFTWARE SHALL BE CORRECTED
                <br/>C.	ANY INFORMATION OR MATERIAL DOWNLOADED OR OTHERWISE OBTAINED BY WAY OF DAS.FINANCE SERVICES OR SOFTWARE SHALL BE ACCESSED BY YOUR SOLE DISCRETION AND SOLE RISK, AND AS SUCH YOU SHALL BE SOLELY RESPONSIBLE FOR AND HEREBY WAIVE ANY AND ALL CLAIMS AND CAUSES OF ACTION WITH RESPECT TO ANY DAMAGE TO YOUR COMPUTER AND/OR INTERNET ACCESS, DOWNLOADING AND/OR DISPLAYING, OR FOR ANY LOSS OF DATA THAT COULD RESULT FROM THE DOWNLOAD OF ANY SUCH INFORMATION OR MATERIAL
                <br/>D.	NO ADVICE AND/OR INFORMATION, DESPITE WHETHER WRITTEN OR ORAL, THAT MAY BE OBTAINED BY YOU FROM DAS.FINANCE OR BY WAY OF OR FROM OUR SERVICES OR SOFTWARE SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THE TOS.
                <br/>E.	A SMALL PERCENTAGE OF SOME USERS MAY EXPERIENCE SOME DEGREE OF EPILEPTIC SEIZURE WHEN EXPOSED TO CERTAIN LIGHT PATTERNS OR BACKGROUNDS THAT MAY BE CONTAINED ON A COMPUTER SCREEN OR WHILE USING OUR SERVICES. CERTAIN CONDITIONS MAY INDUCE A PREVIOUSLY UNKNOWN CONDITION OR UNDETECTED EPILEPTIC SYMPTOM IN USERS WHO HAVE SHOWN NO HISTORY OF ANY PRIOR SEIZURE OR EPILEPSY. SHOULD YOU, ANYONE YOU KNOW OR ANYONE IN YOUR FAMILY HAVE AN EPILEPTIC CONDITION, PLEASE CONSULT A PHYSICIAN IF YOU EXPERIENCE ANY OF THE FOLLOWING SYMPTOMS WHILE USING OUR SERVICES: DIZZINESS, ALTERED VISION, EYE OR MUSCLE TWITCHES, LOSS OF AWARENESS, DISORIENTATION, ANY INVOLUNTARY MOVEMENT, OR CONVULSIONS.
                <br/><br/><h2>Limitation of Liability</h2>
                YOU EXPLICITLY ACKNOWLEDGE, UNDERSTAND AND AGREE THAT DAS.FINANCE AND OUR SUBSIDIARIES, AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS SHALL NOT BE LIABLE TO YOU FOR ANY PUNITIVE, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES WHICH MAY BE RELATED TO THE LOSS OF ANY PROFITS, GOODWILL, USE, DATA AND/OR OTHER INTANGIBLE LOSSES, EVEN THOUGH WE MAY HAVE BEEN ADVISED OF SUCH POSSIBILITY THAT SAID DAMAGES MAY OCCUR, AND RESULT FROM:
                <br/><br/>A.	THE USE OR INABILITY TO USE OUR SERVICE;
                <br/>B.	THE COST OF PROCURING SUBSTITUTE GOODS AND SERVICES;
                <br/>C.	UNAUTHORIZED ACCESS TO OR THE ALTERATION OF YOUR TRANSMISSIONS AND/OR DATA;
                <br/>D.	STATEMENTS OR CONDUCT OF ANY SUCH THIRD PARTY ON OUR SERVICE;
                <br/>E.	AND ANY OTHER MATTER WHICH MAY BE RELATED TO OUR SERVICE
                <br/><br/><h2>Release</h2>
                In the event you have a dispute, you agree to release the Company (and its officers, directors, employees, agents, parent subsidiaries, affiliates, co-branders, partners and any other third parties) from claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, suspected or unsuspected, disclosed and undisclosed, arising out of or in any way connected to such dispute.
                <br/><br/><h2>Financial Matters</h2>
                Should you intend to create or to join any service, receive or request any news, messages, alerts or other information from us or our Services concerning companies, stock quotes, investments or securities, please review the above Sections Warranty Disclaimers and Limitations of Liability again. In addition, for this particular type of information, the phrase "Let the investor beware" is appropriate. DAS.Finance's content is provided primarily for informational purposes. The Services shall not be a substitute for trading advice, investment advice, legal advice, or tax advice from a licensed professional. Certain of the paid Services may provide access to an advisor, but the Company and our licensors shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted and/or made available by way of our Services, and shall not be responsible or liable for any trading and/or investment decisions based on any such information.
                <br/><br/><h2>Exclusion and Limitations</h2>
                THERE ARE SOME JURISDICTIONS WHICH DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OF EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. THEREFORE, SOME OF THE ABOVE LIMITATIONS OF SECTIONS WARRANTY DISCLAIMERS AND LIMITATION OF LIABILITY MAY NOT APPLY TO YOU.
                <br/><br/><h2>Third parties</h2>
                You herein acknowledge, understand and agree, that unless otherwise expressly provided in this Agreement, that there shall be no third-party beneficiaries to this Agreement.
                <br/><br/><h2>Notice</h2>
                The Company may furnish you with notices, including those with regards to any changes to this Agreement, through the following mediums, the list of which should be considered nonexhaustive: email, regular mail, MMS or SMS, text messaging, postings on our website or app, or other reasonable means currently known or which may be hereinafter developed. Any such notices may not be received if you violate any aspects of this Agreement by accessing our Services in an unauthorized manner. Your acceptance of this Agreement constitutes your agreement that you are deemed to have received any and all notices that would have been delivered had you accessed our Services in an authorized manner.
                <br/><br/><h2>Trademark</h2>
                You herein acknowledge, understand and agree that all of the DAS.Finance trademarks, copyright, trade name, service marks, and other DAS.Finance logos and any brand features, and/or product and service names are trademarks and as such, are and shall remain the property of the Company. You herein agree not to display and/or use in any manner the DAS.Finance logo or marks without obtaining the Company's prior written consent.
                <br/><br/><h2>Copyright and Intellectual Property</h2>
                The Company will always respect the intellectual property of others, and we ask that all of our Users do the same. With regards to appropriate circumstances and at its sole discretion, The Company may disable and/or terminate the accounts of any User who violates this Agreement and/or infringes the rights of others. If you feel that your work has been duplicated in such a way that would constitute copyright infringement, or if you believe your intellectual property rights have been otherwise violated, you should provide us the following information:
                <br/>A.	The electronic or the physical signature of the individual that is authorized on behalf of the owner of the copyright or other intellectual property interest;
                <br/>B.	A description of the copyrighted work or other intellectual property that you believe has been infringed upon;
                <br/>C.	A description of the location of the site which you allege has been infringing upon your work;
                <br/>D.	Your physical address, telephone number, and email address;
                <br/>E.	A statement, in which you state that the alleged and disputed use of your work is not authorized by the copyright owner, its agents or the law;
                <br/>F.	And finally, a statement, made under penalty of perjury, that the aforementioned information in your notice is truthful and accurate, and that you are the copyright or intellectual property owner, representative or agent authorized to act on the copyright or intellectual property owner's behalf.
                <br/><br/>The Company Agent for notice of claims of copyright or other intellectual property infringement can be contacted at <a href="mailto:contact@das.finance">contact@das.finance</a>.
                <br/><br/><h2>Entire Agreement</h2>
                This Agreement constitutes the entire understanding between the Parties with respect to any and all use of DAS.Finance or any of the Services thereon. This Agreement supersedes and replaces all prior or contemporaneous agreements or understandings, written or oral, regarding the use of DAS.Finance. You may also be subject to additional terms and conditions when you use or purchase certain other DAS.Finance Services, affiliate Services, third-party content or third-party software.
                <br/><br/><h2>Arbitration</h2>
                In case of a dispute between the Parties relating to or arising out of this Agreement, the Parties shall first attempt to resolve the dispute personally and in good faith. If these personal resolution attempts fail, the Parties shall then submit the dispute to binding arbitration, under the Consumer Arbitration Rules of the American Arbitration Association. The arbitration shall be conducted in San Francisco, California. The arbitration shall be conducted by a single arbitrator and such arbitrator shall have no authority to add Parties, vary the provisions of this Agreement, award punitive damages, or certify a class. The arbitrator shall be bound by applicable and governing Federal law as well as the law of the state of California. Each Party shall pay their own costs and fees. Claims necessitating arbitration under this section include, but are not limited to: contract claims, tort claims, claims based on Federal and state law, and claims based on local laws, ordinances, statutes or regulations. Intellectual property claims by the Company will not be subject to arbitration and may, as an exception to this subpart, be litigated. The Parties, in agreement with this sub-part of this Agreement, waive any rights they may have to a jury trial in regard to arbitral claims - i.e. you hereby understand and agree that you are giving up your right to a jury trial or other litigation to assert any claims against the Company. Through this Agreement, you are also relinquishing any right to be engaged in a class action or other group proceeding against the Company.
                <br/><br/><h2>Waiver and Severability of Terms</h2>
                In the event that we fail to enforce any provision of this Agreement, this shall not constitute a waiver of any future enforcement of that provision or of any other provision. Waiver of any part or sub-part of this Agreement will not constitute a waiver of any other part or sub-part. If any part or sub-part of this Agreement is held invalid or unenforceable by a court of law or competent arbitrator, the remaining parts and sub-parts will be enforced to the maximum extent possible. In such condition, the remainder of this Agreement shall continue in full force.
                <br/><br/><h2>No Right of Survivorship Non-Transferability</h2>
                You acknowledge, understand and agree that your account is non-transferable and any rights to your ID and/or contents within your account shall terminate upon your death. Upon receipt of a copy of a death certificate, your account may be terminated and all contents therein permanently deleted.
                <br/><br/><h2>Claim Limitation</h2>
                You acknowledge, understand and agree that regardless of any statute or law to the contrary, any claim or action arising out of or related to the use of ourServices or this Agreement must be filed within one year after said claim or cause of action arose or shall be forever barred.
                <br/><br/><h2>General Provisions</h2>
                <br/>•	LANGUAGE: All communications made or notices given pursuant to this Agreement shall be in the English language.
                <br/>•	HEADINGS FOR CONVENIENCE ONLY: Headings of parts and subparts under this Agreement are for convenience and organization, only. Headings shall not affect the meaning of any provisions of this Agreement.
                <br/>•	NO AGENCY, PARTNERSHIP OR JOINT VENTURE: No agency, partnership, or joint venture has been created between the Parties as a result of this Agreement. No Party has any authority to bind the other to third parties.
                <br/>•	ELECTRONIC COMMUNICATIONS PERMITTED: Electronic communications are permitted to both Parties under this Agreement, including e-mail or fax. For any questions or concerns, please email us at the following address: <a href="mailto:contact@das.finance">contact@das.finance</a>.
                <br/><br/><h2>Violations</h2>
                Please report any violations of these terms to the Company at <a href="mailto:contact@das.finance">contact@das.finance</a>.
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

TermsOfService.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(TermsOfService);