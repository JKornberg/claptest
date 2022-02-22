import NextAuth from "next-auth"
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";


const tenantName = process.env.AUTH_TENANT_NAME
const userFlow = process.env.USER_FLOW
const clientId = process.env.AUTH_CLIENT_ID
const clientSecret = process.env.AUTH_CLIENT_SECRET
console.log(clientSecret)
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    AzureADB2CProvider({
        clientId: clientId,
        clientSeret: clientSecret,
        tenantId: tenantName,
        primaryUserFlow: userFlow,
        authorization: { params: { scope: "offline_access openid" } },
        
      }),
      // {
      //   id: 'azureb2c',
      //   name: 'Azure B2C',
      //   type: 'oauth',
      //   version: '2.0',
      //   debug: true,
      //   scope: 'offline_access openid',
      //   params: {
      //     grant_type: 'authorization_code',
      //     prompt: 'login',
      //     response_type: 'token',
      //   },
      //   token: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${clientId}/${userFlow}/oauth2/v2.0/token`,
      //   // requestTokenUrl: `https://login.microsoftonline.com/${process.env.AUTH_TENANT_GUID}/oauth2/v2.0/token`,
      //   authorization: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${userFlow}/oauth2/v2.0/authorize`,
      //   userinfo: 'https://graph.microsoft.com/oidc/userinfo',
      //   wellKnown: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${userFlow}/v2.0/.well-known/openid-configuration`,

      //   profile: (profile) => {
      //     console.log('THE PROFILE', profile)
  
      //     return {
      //       id: profile.oid,
      //       fName: profile.given_name,
      //       lName: profile.surname,
      //       email: profile.emails.length ? profile.emails[0] : null,
      //     }
      //   },
      //   clientId: process.env.AUTH_CLIENT_ID,
      //   clientSecret: process.env.AUTH_CLIENT_SECRET,
      //   idToken: true,
      //   state: false,
      // },
      
    // ...add more providers here
  ],
})

env: {
   
  }