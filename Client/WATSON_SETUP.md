# Watson Orchestrate Setup

## Current Configuration

The Watson Orchestrate chatbot is configured with the following IDs:

```javascript
orchestrationID: "20251027-2225-5441-0060-2bc997cc28f2_20251027-2226-0773-200d-659bd8d521bf"
agentId: "91fd8461-521f-476a-a66f-1399ad8e2794"
agentEnvironmentId: "2083e8d2-53b0-424a-b085-7c84e5f8ed3c"
```

## Error: 401 - Orchestrate ID Not Found

If you're seeing this error, it means:

1. **The Orchestration ID is incorrect** - Double-check the ID in your Watson Orchestrate dashboard
2. **You don't have access** - The orchestration might not be shared with your account
3. **The orchestration doesn't exist** - It may have been deleted or never created

## How to Fix

1. **Get the correct Orchestration ID:**
   - Log into IBM Watson Orchestrate
   - Go to your orchestration
   - Copy the full orchestration ID from the URL or settings

2. **Update the configuration in `Client/src/App.jsx`:**
   ```javascript
   window.wxOConfiguration = {
     orchestrationID: "YOUR_CORRECT_ORCHESTRATION_ID_HERE",
     hostURL: "https://dl.watson-orchestrate.ibm.com",
     rootElementID: "watson-orchestrate-container",
     chatOptions: {
       agentId: "YOUR_AGENT_ID",
       agentEnvironmentId: "YOUR_ENVIRONMENT_ID",
     }
   };
   ```

3. **Verify your IDs are correct:**
   - Orchestration ID should be visible in Watson Orchestrate dashboard
   - Agent ID should match your Watson Assistant agent
   - Environment ID should match your environment (development/staging/production)

4. **Check permissions:**
   - Ensure you have access to the orchestration
   - Verify the orchestration is published/deployed
   - Check if there are any authentication requirements

## Testing

After updating the IDs, refresh your browser and check:
- Console for successful initialization messages
- Network tab for successful API calls (status 200, not 401)
- Chat button should appear and work correctly

