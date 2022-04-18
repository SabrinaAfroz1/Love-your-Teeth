import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                <Accordion.Body>
                    Both Authentication and Authorization area unit utilized in respect of knowledge security that permits the safety on an automatic data system. Each area unit terribly crucial topics usually related to the online as key items of its service infrastructure. However, each the terms area unit terribly completely different with altogether different ideas. whereas it’s true that they’re usually employed in an equivalent context with an equivalent tool, they’re utterly distinct from one another.

                    In authentication process, the identity of users are checked for providing the access to the system. While in authorization process, person’s or user’s authorities are checked for accessing the resources. Authentication is done before the authorization process, whereas authorization process is done after the authentication process.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                    Firebase by Google can be used for the following:
                    <br></br>
                    Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.
                    <br></br>
                    Firebase allow syncing the real-time data across all the devices- Android, iOS, and the web without refreshing the screen.
                    <br></br>
                    Firebase offers integration to Google Ads, AdMob, DoubleClick, Play Store, Data Studio, BigQuery, and Slack, to make your app development with efficient and accurate management and maintenance.
                    <br></br>
                    Everything from databases, analytics to crashing reports are included in Firebase. So, the app development teams can stay focused on improving the user experience.
                    <br></br>
                    <br></br>
                    Laravel makes implementing authentication very simple. In fact, almost everything is configured for you out of the box. The authentication configuration file is located at config/auth.php, which contains several well documented options for tweaking the behavior of the authentication services.

                    <br></br>
                    A token can be defined as a digitally encoded signature used to authenticate and authorize a user to access specific resources on a network.
                    A token is always generated in the form of an OTP (One-Time Password), which depicts that it could only be used once and is generated randomly for every transaction.
                    The token-based authentication allows users to verify their unique identity, and in return, they receive a unique token that provides access to certain resources for a particular time frame.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header> What other services does firebase provide other than authentication</Accordion.Header>
                <Accordion.Body>
                    There are many services which Firebase provides, Most useful of them are:
                    <br></br>
                    Cloud Firestore ,Cloud Functions ,Hosting , Cloud Storage, Google Analytics, Predictions
                    Cloud Messaging, Dynamic Links ,Remote Config

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;