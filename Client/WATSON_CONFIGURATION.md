# Watson Orchestrate Configuration Guide

## Important Notes from IBM Documentation

According to the [IBM Watson Orchestrate Embedded Chat documentation](https://developer.watson-orchestrate.ibm.com/manage/channels#embedding-web-chat):

### Security Configuration

**⚠️ CRITICAL**: By default, security is **enabled but not configured** for embedded chat. This means:
- The embedded chat **will not function** until security is properly configured
- You **must** configure **both IBM and client key pairs** for the chat to work
- Alternatively, you can **explicitly disable security** to allow anonymous access (not recommended for production)

### Required Configuration Fields

For **IBM Cloud** deployments, you need:
```javascript
window.wxOConfiguration = {
  orchestrationID: "your-orgID_orchestrationID",
  hostURL: "https://dl.watson-orchestrate.ibm.com",
  rootElementID: "root",
  showLauncher: true,
  deploymentPlatform: "ibmcloud", // Required for IBM Cloud embed
  crn: "your-org-crn", // Required for IBM Cloud embed - Cloud Resource Name
  chatOptions: {
    agentId: "your-agent-id",
    agentEnvironmentId: "your-agent-env-id",
  },
};
```

### Finding Your CRN (Cloud Resource Name)

For IBM Cloud deployments, you need your CRN. According to IBM docs:
- Find it in your IBM Cloud dashboard
- Reference: https://www.ibm.com/docs/en/watsonx/watson-orchestrate/base?topic=experience-faqs#how-can-i-know-my-crn-id

### Security Setup

If you're getting 401 errors, it's likely because:
1. **Security is enabled but not configured** - You need to set up security key pairs
2. **Missing CRN** - If using IBM Cloud, the CRN is required
3. **Missing deploymentPlatform** - Required for IBM Cloud deployments

### Disabling Security (For Testing Only)

If you need to test without security (NOT recommended for production):
1. Configure security to explicitly disable it
2. Use the security configuration tool from IBM
3. Reference: https://developer.watson-orchestrate.ibm.com/manage/channels#embedding-web-chat

### Getting the Correct Configuration

Use the IBM CLI command to generate the correct configuration:
```bash
orchestrate channels webchat embed --agent-name=YOUR_AGENT_NAME
```

This will output the correct configuration for your environment.

