# Disable Watson Orchestrate Security via CLI/API

## Option 1: Using IBM's Security Configuration Tool (Recommended)

IBM provides an official security configuration tool script:

### Steps:

1. **Download the Security Configuration Tool:**
   - Go to: https://www.ibm.com/docs/en/watsonx/watson-orchestrate/base?topic=chat-using-security-configuration-tool-embedded-agents
   - Download the `wxO-embed-chat-security-tool.sh` script

2. **Make it executable:**
   ```bash
   chmod +x wxO-embed-chat-security-tool.sh
   ```

3. **Run the tool:**
   ```bash
   ./wxO-embed-chat-security-tool.sh
   ```

4. **Follow the prompts:**
   - Enter your service instance URL
   - Enter your API key
   - Choose "Disable security" option
   - Confirm the action

## Option 2: Using Watson Orchestrate API Directly

### Using cURL:

```bash
# Set your variables
INSTANCE_URL="https://dl.watson-orchestrate.ibm.com/instances/YOUR_INSTANCE_ID"
API_KEY="your_api_key_here"
ORCHESTRATION_ID="20251027-2225-5441-0060-2bc997cc28f2_20251027-2226-0773-200d-659bd8c521bf"

# Disable security for web chat channel
curl -X PATCH \
  "${INSTANCE_URL}/api/v1/orchestrations/${ORCHESTRATION_ID}/channels/webchat" \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "security": {
      "enabled": false
    }
  }'
```

### Using the disable-security.sh script:

1. **Update the script with your credentials:**
   ```bash
   # Edit Client/disable-security.sh
   # Update:
   SERVICE_INSTANCE_URL="https://dl.watson-orchestrate.ibm.com/instances/YOUR_INSTANCE_ID"
   API_KEY="your_api_key_here"
   ```

2. **Run the script:**
   ```bash
   cd Client
   chmod +x disable-security.sh
   ./disable-security.sh
   ```

## Option 3: Using Watson Orchestrate Dashboard (Easiest)

1. Go to IBM Watson Orchestrate dashboard
2. Navigate to your orchestration instance
3. Go to **Settings** → **Channels** → **Web Chat**
4. Find the **Security** section
5. Click **Disable Security** or toggle security off
6. Save the settings

## Finding Your Instance ID and API Key

### Instance ID:
- Found in your Watson Orchestrate dashboard URL
- Format: `20251027-2226-0773-200d-659bd8c521bf`
- OR check the orchestration ID in your embed code

### API Key:
1. Go to IBM Cloud Dashboard
2. Navigate to **Manage** → **Access (IAM)** → **API keys**
3. Create a new API key or use existing one
4. Copy the API key (you'll only see it once)

## Verify Security is Disabled

After disabling security, check:
1. Refresh your web application
2. Check the Network tab - API calls should return 200 (not 401)
3. The chat widget should load successfully
4. No "security keys not configured" errors in console

## Re-enabling Security Later

When ready for production:
1. Use the same security configuration tool
2. Choose "Enable security"
3. Configure security key pairs
4. Update your client code to use the keys

## Important Notes

⚠️ **WARNING**: Disabling security allows anonymous access to your Watson Orchestrate instance. Only do this for:
- Development/Testing
- Internal tools
- Non-sensitive applications

❌ **DO NOT** disable security for:
- Production applications
- Public-facing applications
- Applications with sensitive data

