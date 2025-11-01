# How to Disable Security for Watson Orchestrate Embedded Chat

## Overview

Watson Orchestrate embedded chat has security **enabled by default but not configured**. This causes 401 errors until security is either:
1. **Properly configured** (recommended)
2. **Disabled** (testing only - NOT for production)

## Option 1: Disable Security via Security Configuration API

To disable security, you need to make a POST request to the Watson Orchestrate security configuration endpoint.

### Steps:

1. **Get your API key** with administrative privileges from IBM Cloud/Watson Orchestrate dashboard

2. **Get your Service Instance URL** from your Watson Orchestrate instance

3. **Make a POST request** to disable security:
   ```bash
   curl -X POST "https://YOUR_SERVICE_INSTANCE_URL/api/v1/channels/webchat/security" \
     -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "enabled": false
     }'
   ```

### Using the Security Configuration Tool

IBM provides an automated security configuration tool. According to the documentation:

1. **Get the `wxO-embed-chat-security-tool.sh` script** from IBM documentation
2. Run the script with appropriate flags to disable security
3. The script will guide you through the process

Reference: https://developer.watson-orchestrate.ibm.com/manage/channels#embedding-web-chat

## Option 2: Configure Security (Recommended Alternative)

Instead of disabling security, you can properly configure it:

1. **Generate key pairs** (IBM key pair + Client key pair)
2. **Configure using the security tool**
3. **Add public keys** to your Watson Orchestrate instance

This is the recommended approach for production environments.

## Important Warnings

⚠️ **Disabling security** means:
- Anyone with access to your web application can access your Watson Orchestrate instance
- No authentication required
- Potential security vulnerabilities
- **Should ONLY be used for development/testing**
- **NOT recommended for production**

⚠️ **Before disabling**:
- Ensure your Watson Orchestrate instance doesn't provide access to sensitive data
- Don't use tools configured with functional credentials that access sensitive data
- Test thoroughly in a controlled environment

## After Disabling Security

Once security is disabled at the server level:
1. Your embedded chat should work without 401 errors
2. No JWT tokens needed
3. Anonymous access is allowed
4. Refresh your web application

## Troubleshooting

If you still get 401 errors after disabling:
1. Verify the API request was successful
2. Check that security is actually disabled in your Watson Orchestrate dashboard
3. Clear browser cache and refresh
4. Check network tab for actual error responses
5. Verify your orchestration ID is correct

## Reference

- IBM Documentation: https://developer.watson-orchestrate.ibm.com/manage/channels#embedding-web-chat
- Security Architecture: See "Embedded chat security" section in documentation

